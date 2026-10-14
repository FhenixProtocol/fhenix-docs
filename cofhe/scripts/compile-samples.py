#!/usr/bin/env python3
"""Compile the Solidity code samples of the given .mdx pages.

Usage: python3 cofhe/scripts/compile-samples.py <page.mdx> [<page.mdx> ...]

The script extracts every ```solidity fenced block, turns each block into a
.sol file inside a throwaway Foundry project, and runs one `forge build`.
Any compile error is reported with the page, the block number, and the
compiler message, and the script exits non-zero.

What each block becomes:
- A block that declares a contract, interface, or library compiles as its
  own file. Missing SPDX header, pragma, or FHE.sol import are added.
- A block that declares contract members (functions, modifiers, events,
  state variables with a visibility keyword) is wrapped in
  `contract Sample { ... }` plus the same header.
- A block of bare statements is wrapped in
  `contract Sample { function f() public { ... } }` plus the same header.
- `pragma` and `import` lines found anywhere in a block are hoisted to the
  file header; the rest of the block decides the wrapping.

Skipped blocks (each skip is printed):
- A block that contains an ellipsis placeholder (`...`) is prose, not code.
- A block whose fence title contains the word "Before" documents the old,
  removed API on purpose (migration guides show code that must NOT compile).

Fragments and undeclared names:
A wrapped fragment often references state, modifiers, or types that the
surrounding page declares in an earlier block. Those names cannot resolve
inside the scaffold, so name-resolution errors (undeclared identifier /
identifier not found) are tolerated for WRAPPED blocks only. Every other
error - syntax errors, unknown FHE members, type errors - still fails.
Standalone blocks get a strict compile with no tolerance.

Toolchain:
`forge` must be on PATH. The FHE.sol dependency comes from the npm package
`@fhenixprotocol/cofhe-contracts` (plus its `@openzeppelin/contracts`
dependency). The script looks for it in ./node_modules, or in the directory
named by the COFHE_SAMPLES_NODE_MODULES environment variable.

The confidential token samples import `fhenix-confidential-contracts`, which
brings `@openzeppelin/contracts-upgradeable` with it. Install it next to
cofhe-contracts to compile those samples. When it is missing, blocks that
import it are skipped and the skip says why.
"""

import json
import os
import re
import subprocess
import sys
import tempfile
from pathlib import Path

# Keep in step with FHE.sol's own pragma (see cofhe/get-started/introduction/compatibility.mdx).
SOLC_VERSION = "0.8.28"
SCAFFOLD_PRAGMA = "pragma solidity >=0.8.25 <0.9.0;"
FHE_IMPORT = 'import "@fhenixprotocol/cofhe-contracts/FHE.sol";'

# npm packages a sample may import, each with a file that proves it is
# installed. cofhe-contracts is required; the others are optional and their
# samples are skipped when absent.
REQUIRED_PACKAGE = "@fhenixprotocol/cofhe-contracts"
PACKAGES = {
    "@fhenixprotocol/cofhe-contracts": "FHE.sol",
    "@openzeppelin/contracts": "package.json",
    "@openzeppelin/contracts-upgradeable": "package.json",
    "fhenix-confidential-contracts": "contracts/FHERC20/FHERC20.sol",
}

# Pages whose Solidity samples are known broken. CI skips them so unrelated
# pull requests stay green until the sample is fixed. Every entry needs a
# reason and should be removed when the page is repaired.
SKIP_PAGES: dict[str, str] = {}

# Error codes tolerated in WRAPPED fragments only: the fragment references
# names the page declares outside the block, so they cannot resolve here.
TOLERATED_FRAGMENT_ERRORS = {
    "7576",  # Undeclared identifier
    "7920",  # Identifier not found or not unique (types, modifiers)
    "2333",  # Identifier already declared: variant lists reuse a result name
    "3656",  # Contract should be marked abstract: bodyless signature fragments
    "4334",  # Trying to override non-virtual function (signature fragments)
    "9456",  # Overriding function is missing "override" (signature fragments)
}

FENCE_OPEN_RE = re.compile(r"^(\s*)```solidity\b(.*)$")
HOIST_RE = re.compile(r"^\s*(pragma\s+solidity\b|import\s)")
TYPE_DECL_RE = re.compile(
    r"^\s*(abstract\s+contract|contract|interface|library)\s+[A-Za-z_]"
)
MEMBER_RE = re.compile(
    r"^\s*(function|modifier|event|error|struct|enum|constructor|using|receive|fallback|mapping\s*\()"
)
STATE_VAR_RE = re.compile(
    r"^\s*[A-Za-z_][\w.\[\]]*(\s+(public|private|internal|constant|immutable))+\s+[A-Za-z_]\w*\s*(=|;)"
)


def extract_blocks(path: Path):
    """Yield (block_number, mdx_line, title, code) for each ```solidity fence."""
    lines = path.read_text(encoding="utf-8").splitlines()
    i, number = 0, 0
    while i < len(lines):
        m = FENCE_OPEN_RE.match(lines[i])
        if not m:
            i += 1
            continue
        indent, title = m.group(1), m.group(2).strip()
        start = i + 1
        i += 1
        body = []
        while i < len(lines) and lines[i].strip() != "```":
            line = lines[i]
            body.append(line[len(indent):] if line.startswith(indent) else line)
            i += 1
        i += 1  # past the closing fence
        number += 1
        yield number, start, title, "\n".join(body)


def package_of(path: str):
    """The PACKAGES entry an import path belongs to, or None."""
    for pkg in PACKAGES:
        if path.startswith(pkg + "/"):
            return pkg
    return None


def classify(code: str, title: str, installed: set[str]):
    """Return (mode, source) where mode is 'skip:<reason>' or 'strict'/'wrapped'."""
    if "..." in code:
        return "skip:ellipsis placeholder", None
    if re.search(r"\bbefore\b", title, re.IGNORECASE):
        return "skip:fence titled 'Before' (documents the removed API)", None
    if re.search(r"don'?t|do not|wrong|bad", title, re.IGNORECASE):
        return "skip:fence titled as an anti-example", None
    if code.count("{") != code.count("}"):
        return "skip:unbalanced braces (truncated fragment)", None
    # Only the packages in PACKAGES are provisioned. A sample importing any
    # other package (plugin frameworks, forge-std) cannot compile here;
    # skipping keeps CI honest instead of false-failing.
    for m in re.finditer(r'import\s+(?:\{[^}]*\}\s+from\s+)?"([^"./][^"]*)"', code):
        pkg = package_of(m.group(1))
        if pkg is None:
            return f"skip:imports unprovisioned package {m.group(1)}", None
        if pkg not in installed:
            return f"skip:{pkg} is not installed", None

    hoisted, rest = [], []
    for line in code.splitlines():
        (hoisted if HOIST_RE.match(line) else rest).append(line)
    body = "\n".join(rest).strip("\n")

    header = [] if "SPDX-License-Identifier" in code else ["// SPDX-License-Identifier: MIT"]
    if not any("pragma solidity" in h for h in hoisted):
        header.append(SCAFFOLD_PRAGMA)
    header.extend(hoisted)
    if not any("cofhe-contracts/FHE.sol" in h for h in hoisted):
        header.append(FHE_IMPORT)
    head = "\n".join(header)

    lines = body.splitlines()
    if any(TYPE_DECL_RE.match(l) for l in lines):
        return "strict", f"{head}\n\n{body}\n"
    if not body:
        return "strict", f"{head}\n"
    if any(MEMBER_RE.match(l) or STATE_VAR_RE.match(l) for l in lines):
        return "wrapped", f"{head}\n\ncontract Sample {{\n{body}\n}}\n"
    return "wrapped", f"{head}\n\ncontract Sample {{\nfunction f() public {{\n{body}\n}}\n}}\n"


def find_node_modules() -> tuple[Path, set[str]]:
    """The node_modules to compile against, and which PACKAGES it holds."""
    candidates = []
    env = os.environ.get("COFHE_SAMPLES_NODE_MODULES")
    if env:
        candidates.append(Path(env))
    candidates.append(Path.cwd() / "node_modules")
    for c in candidates:
        if (c / REQUIRED_PACKAGE / PACKAGES[REQUIRED_PACKAGE]).is_file():
            installed = {p for p, marker in PACKAGES.items() if (c / p / marker).is_file()}
            return c.resolve(), installed
    sys.exit(
        f"error: {REQUIRED_PACKAGE} not found.\n"
        "Run: npm install --no-save @fhenixprotocol/cofhe-contracts@<documented version>"
        " fhenix-confidential-contracts@<documented version>\n"
        "or set COFHE_SAMPLES_NODE_MODULES to a node_modules that has it."
    )


def forge_build(project: Path, target: str) -> list[dict]:
    # One forge run per sample. A parser or analysis error in one solc source
    # stops the later compiler phases for every source in the same run, so
    # batching the samples would let a broken block mask errors in the others.
    result = subprocess.run(
        ["forge", "build", "--format-json", target],
        cwd=project,
        capture_output=True,
        text=True,
    )
    try:
        out = json.loads(result.stdout)
    except json.JSONDecodeError:
        # An import of a path the package does not ship stops forge before
        # solc runs, so no JSON comes back. That is the sample's fault, not
        # the setup's: report it against the sample.
        missing = re.search(r"failed to resolve file: (.*?); check configured remappings", result.stderr)
        if missing:
            return [{
                "severity": "error",
                "errorCode": "unresolved-import",
                "sourceLocation": {"file": target},
                "formattedMessage": f"unresolved import: {missing.group(1)}",
            }]
        sys.exit(
            f"error: forge build produced no JSON (exit {result.returncode}).\n"
            f"stdout: {result.stdout[:2000]}\nstderr: {result.stderr[:2000]}"
        )
    return out.get("errors", [])


def main(argv: list[str]) -> int:
    if not argv:
        print("usage: compile-samples.py <page.mdx> [...]", file=sys.stderr)
        return 2

    node_modules, installed = find_node_modules()
    for pkg in sorted(set(PACKAGES) - installed):
        print(f"note: {pkg} not installed; samples importing it are skipped")
    samples = {}  # sol filename -> (page, block number, mdx line, mode)
    compiled = skipped = warned = 0

    with tempfile.TemporaryDirectory(prefix="doc-samples-") as tmp:
        project = Path(tmp)
        src = project / "src"
        src.mkdir()
        (project / "foundry.toml").write_text(
            "[profile.default]\n"
            'src = "src"\n'
            'out = "out"\n'
            "libs = []\n"
            f'solc = "{SOLC_VERSION}"\n'
            "remappings = [\n"
            + "".join(f'    "{p}/={node_modules}/{p}/",\n' for p in sorted(installed))
            + "]\n"
        )

        for arg in argv:
            page = Path(arg)
            rel = page.as_posix()
            if not page.is_file():
                sys.exit(f"error: no such file: {rel}")
            if rel in SKIP_PAGES:
                print(f"SKIP page {rel}: {SKIP_PAGES[rel]}")
                continue
            for number, line, title, code in extract_blocks(page):
                mode, source = classify(code, title, installed)
                if mode.startswith("skip:"):
                    print(f"SKIP  {rel} block {number} (line {line}): {mode[5:]}")
                    skipped += 1
                    continue
                name = f"s{len(samples)}.sol"
                samples[f"src/{name}"] = (rel, number, line, mode)
                (src / name).write_text(source, encoding="utf-8")

        if not samples:
            print("No Solidity blocks to compile.")
            return 0

        failed = 0
        for sol, (rel, number, line, mode) in samples.items():
            messages = []
            for err in forge_build(project, sol):
                if err.get("severity") != "error":
                    continue
                loc = (err.get("sourceLocation") or {}).get("file", "")
                # A sample can make solc report against a package file, e.g. by
                # implementing an interface with the wrong signature. The
                # packages compile cleanly on their own, so the sample is at fault.
                in_package = loc.startswith(str(node_modules))
                if loc != sol and not in_package:
                    # Any other error outside the sample is a setup problem: fail loudly.
                    sys.exit(
                        f"error: compiler error outside the sample {sol}:\n"
                        f"{err.get('formattedMessage')}"
                    )
                if mode == "wrapped" and str(err.get("errorCode")) in TOLERATED_FRAGMENT_ERRORS:
                    continue
                messages.append(err.get("formattedMessage", str(err)))
            if messages:
                # Only strict blocks (complete contracts) gate CI. Wrapped
                # fragments depend on page context the scaffold cannot supply,
                # so their failures are warnings: visible in the log, never
                # blocking a PR.
                if mode == "strict":
                    failed += 1
                    print(f"FAIL  {rel} block {number} (line {line}) [{mode}]")
                else:
                    warned += 1
                    print(f"WARN  {rel} block {number} (line {line}) [{mode}]")
                for msg in messages:
                    print(msg)
            else:
                compiled += 1
                print(f"OK    {rel} block {number} (line {line}) [{mode}]")

    print(f"\n{compiled} compiled, {skipped} skipped, {warned} warnings, {failed} failed")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
