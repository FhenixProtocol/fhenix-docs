#!/usr/bin/env python3
"""Check that tutorial code blocks match the example project they came from.

A page marks a code block with an MDX comment on the line above its fence:

    {/* example: cofhe/tutorials/examples/<project>/<file>#<region> */}
    ```typescript test/alice-to-bob.test.ts
    ...
    ```

The file holds the region between `// #region <name>` and `// #endregion <name>`.
The block must equal the region, ignoring common indentation and trailing
whitespace. CI runs the project's tests, so a page that matches its regions
shows code that runs.

Usage:
    python3 cofhe/scripts/check-example-regions.py [pages...]   # default: every cofhe/**/*.mdx
    python3 cofhe/scripts/check-example-regions.py --self-test
"""

import re
import sys
import tempfile
import textwrap
from pathlib import Path

MARKER = re.compile(r'^\{/\*\s*example:\s*(\S+?)#([\w-]+)\s*\*/\}\s*$')
FENCE = re.compile(r'^(```+|~~~+)')


def normalize(lines):
    text = textwrap.dedent("\n".join(line.rstrip() for line in lines))
    return text.strip("\n")


def region(path: Path, name: str):
    """The lines between `#region name` and `#endregion name`, or None."""
    lines = path.read_text(encoding="utf-8").splitlines()
    start = end = None
    for i, line in enumerate(lines):
        if re.search(rf'#region\s+{re.escape(name)}\s*$', line):
            start = i + 1
        elif re.search(rf'#endregion\s+{re.escape(name)}\s*$', line) and start is not None:
            end = i
            break
    return None if start is None or end is None else lines[start:end]


def check_text(text: str, page: str, root: Path):
    errors = []
    lines = text.splitlines()
    for i, line in enumerate(lines):
        n = i + 1
        m = MARKER.match(line.strip())
        if not m:
            if "{/* example:" in line:
                errors.append(f"{page}:{n}: malformed example marker. Use {{/* example: <path>#<region> */}}")
            continue
        file, name = m.group(1), m.group(2)
        fence = FENCE.match(lines[i + 1].strip()) if i + 1 < len(lines) else None
        if not fence:
            errors.append(f"{page}:{n}: example marker is not followed by a code block")
            continue
        title = lines[i + 1].strip().split()[1:2]
        if not title or not file.endswith(title[0]):
            errors.append(f"{page}:{n}: the code block title must name {file.rsplit('/', 1)[-1]}, the file the marker points to")
            continue
        body, closed = [], False
        for line in lines[i + 2:]:
            if line.strip().startswith(fence.group(1)):
                closed = True
                break
            body.append(line)
        if not closed:
            errors.append(f"{page}:{n}: the code block after the marker is never closed")
            continue
        path = root / file
        if not path.is_file():
            errors.append(f"{page}:{n}: {file} does not exist")
            continue
        want = region(path, name)
        if want is None:
            errors.append(f"{page}:{n}: {file} has no region '{name}'")
        elif normalize(body) != normalize(want):
            errors.append(f"{page}:{n}: code block differs from {file}#{name}. Copy the region into the page.")
    return errors


# Marker paths are relative to the repo root, wherever the script runs from.
REPO = Path(__file__).resolve().parents[2]


def main(argv):
    root = REPO
    pages = [Path(a) for a in argv[1:]] or sorted(root.glob("cofhe/**/*.mdx"))
    errors = []
    for page in pages:
        if page.suffix == ".mdx" and page.exists():
            errors.extend(check_text(page.read_text(encoding="utf-8"), str(page), root))
    for error in errors:
        print(f"error [example-region] {error}")
    print(f"\n{len(errors)} error(s) in {len(pages)} page(s).", file=sys.stderr)
    return 1 if errors else 0


def self_test():
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        (root / "ex").mkdir()
        (root / "ex/a.ts").write_text(
            "x();\n  // #region one\n  const a = 1;\n  const b = 2;\n  // #endregion one\n"
        )
        marker = "{/* example: ex/a.ts#one */}\n"
        good = marker + "```typescript a.ts\nconst a = 1;\nconst b = 2;\n```\n"
        cases = {
            "equal block passes": (good, 0),
            "changed line fails": (good.replace("b = 2", "b = 3"), 1),
            "missing region fails": (good.replace("#one", "#two"), 1),
            "missing file fails": (good.replace("ex/a.ts", "ex/b.ts"), 1),
            "block without marker is ignored": ("```typescript a.ts\nanything\n```\n", 0),
            "marker not followed by a fence fails": (marker + "\ntext\n", 1),
            "malformed marker fails": ("{/* example: ex/a.ts#bad.name */}\n```typescript a.ts\nconst a = 1;\n```\n", 1),
            "unclosed fence fails": (marker + "```typescript a.ts\nconst a = 1;\nconst b = 2;\n", 1),
            "title naming another file fails": (good.replace("```typescript a.ts", "```typescript other.ts"), 1),
        }
        bad = {}
        for name, (page, want) in cases.items():
            got = len(check_text(page, "page.mdx", root))
            if got != want:
                bad[name] = f"want {want} error(s), got {got}"
        print("ok" if not bad else bad)
        return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(self_test() if sys.argv[1:] == ["--self-test"] else main(sys.argv))
