#!/usr/bin/env python3
"""Version consistency checks for the CoFHE docs.

The compatibility page is the single source of truth for package versions.
This script asserts two things:

  --docs   every version pinned anywhere in the docs matches that page, and so
           do the package pins in the sample-compile workflow
  --npm    the compatibility page itself matches what is published on npm

The two run separately on purpose. The docs check is offline and runs on every
pull request. The npm check needs the network and only tells you the world moved,
which is not a reason to fail an unrelated pull request, so it runs on a schedule.

Usage:
    python3 cofhe/scripts/check-versions.py --docs [files...]   # defaults to every cofhe/ .mdx
    python3 cofhe/scripts/check-versions.py --npm

Exits 1 if any mismatch is found. See STYLE.md.
"""

import json
import re
import subprocess
import sys
from pathlib import Path

TRUTH = Path("cofhe/get-started/introduction/compatibility.mdx")

# Historical references name a version to say when something changed, which is a
# fact about the past rather than a pin that can go stale. They are written with a
# `v` prefix (`cofhe-contracts@v0.1.2`), so the pin patterns below never match them.
PIN = r'(?<![\w/@-]){pkg}@([\^~]?)(\d+\.\d+\.\d+(?:-[A-Za-z0-9.]+)?)'

# A page can opt a line out when it deliberately shows an old version.
IGNORE = re.compile(r'<!--\s*versions:ignore\s*-->')

SKIP_DIRS = ("cofhejs/",)

# The sample-compile workflow installs these packages to compile the docs'
# Solidity samples. Its pins must match the page, or CI compiles the samples
# against a version the docs do not tell readers to install.
WORKFLOW = Path(".github/workflows/sample-compile.yml")
WORKFLOW_PINS = {
    "COFHE_CONTRACTS_VERSION": "@fhenixprotocol/cofhe-contracts",
    "CONFIDENTIAL_CONTRACTS_VERSION": "fhenix-confidential-contracts",
}


def truth_table(path: Path = TRUTH):
    """Package to version, read from the compatibility page's tables."""
    versions = {}
    for line in path.read_text(encoding="utf-8").splitlines():
        # | `@cofhe/sdk` | [`0.7.1`](...) | ... |   or   | `@cofhe/sdk` | `0.7.1` | ... |
        m = re.match(
            r'\|\s*\*{0,2}`(@?[a-z0-9@/-]+)`\*{0,2}\s*\|\s*\[?`([\^~]?\d+\.\d+\.\d+)`',
            line.strip(),
        )
        if m:
            versions[m.group(1)] = m.group(2).lstrip("^~")
    return versions


def scan(paths, versions):
    problems = []
    for path in paths:
        if any(str(path).startswith(d) for d in SKIP_DIRS):
            continue
        for n, line in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
            if IGNORE.search(line):
                continue

            # explicit pins: pkg@1.2.3, pkg@^1.2.3
            for pkg, want in versions.items():
                for m in re.finditer(PIN.format(pkg=re.escape(pkg)), line):
                    if m.group(2) != want:
                        problems.append(
                            (path, n, f"{pkg}@{m.group(1)}{m.group(2)} should be {want}")
                        )

            # table rows: | `pkg` | `1.2.3` | ...
            cells = [c.strip() for c in line.split("|")]
            for i, cell in enumerate(cells[:-1]):
                name = re.fullmatch(r'\*{0,2}`(@?[a-z0-9@/-]+)`\*{0,2}', cell)
                ver = re.fullmatch(r'\[?`([\^~]?\d+\.\d+\.\d+)`.*', cells[i + 1])
                if name and ver and name.group(1) in versions:
                    want = versions[name.group(1)]
                    if ver.group(1).lstrip("^~") != want:
                        problems.append(
                            (path, n, f"{name.group(1)} table entry `{ver.group(1)}` should be {want}")
                        )
    return problems


def scan_workflow(versions):
    problems = []
    text = WORKFLOW.read_text(encoding="utf-8")
    for var, pkg in WORKFLOW_PINS.items():
        m = re.search(rf"^\s*{var}:\s*['\"]?([^\s'\"]+)", text, re.MULTILINE)
        if not m:
            problems.append((WORKFLOW, 0, f"{var} not found (it pins {pkg})"))
        elif pkg in versions and m.group(1) != versions[pkg]:
            n = text[: m.start(1)].count("\n") + 1
            problems.append((WORKFLOW, n, f"{var} {m.group(1)} should be {versions[pkg]} ({pkg})"))
    return problems


def npm_latest(pkg):
    out = subprocess.run(
        ["npm", "view", pkg, "version"], capture_output=True, text=True, timeout=120
    )
    return out.stdout.strip() or None


def main(argv):
    args = [a for a in argv[1:] if not a.startswith("--")]
    mode_docs = "--docs" in argv
    mode_npm = "--npm" in argv
    if not (mode_docs or mode_npm):
        print(__doc__)
        return 2

    versions = truth_table()
    if not versions:
        print(f"{TRUTH}: error could not read any version from the compatibility tables")
        return 1

    failed = False

    if mode_docs:
        paths = [Path(a) for a in args] or sorted(Path("cofhe").rglob("*.mdx"))
        paths = [p for p in paths if p.suffix == ".mdx" and p.exists()]
        problems = scan(paths, versions) + scan_workflow(versions)
        for path, n, message in problems:
            print(f"{path}:{n}: error [version-drift] {message}")
        print(
            f"\n{len(problems)} version mismatch(es) in {len(paths)} file(s), "
            f"against {TRUTH}.",
            file=sys.stderr,
        )
        failed |= bool(problems)

    if mode_npm:
        def semver(v):
            return tuple(int(x) for x in re.match(r"(\d+)\.(\d+)\.(\d+)", v).groups())

        stale = []
        for pkg, documented in sorted(versions.items()):
            latest = npm_latest(pkg)
            if latest is None:
                print(f"error [not-published] {pkg} is not published under that name")
                stale.append((pkg, documented, "missing"))
            elif semver(latest) > semver(documented):
                print(f"error [behind-npm] {pkg}: docs say {documented}, npm has {latest}")
                stale.append((pkg, documented, latest))
            elif semver(latest) < semver(documented):
                # Docs may deliberately document a release cut on master before
                # the npm publish. Warn so the state stays visible; do not fail.
                print(f"warning [ahead-of-npm] {pkg}: docs say {documented}, npm has {latest}")
        print(
            f"\n{len(stale)} package(s) out of date in {TRUTH}.", file=sys.stderr
        )
        failed |= bool(stale)

    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
