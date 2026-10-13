#!/usr/bin/env python3
"""Structural checks for Mintlify MDX pages.

Vale covers prose. This script covers the things Vale cannot see: frontmatter,
heading hierarchy, code fences, link paths, and alt text. It is fence-aware, so
nothing inside a code block is treated as prose or markup.

Usage:
    python3 scripts/lint-docs.py [files...]     # defaults to every .mdx in the repo

Exits 1 if any error is found. See STYLE.md.
"""

import re
import sys
from pathlib import Path

GUIDE = "STYLE.md"
OLD_COFHE_LINK = re.compile(r'(\]\(|href="|src=")(/(?:get-started|client-sdk|fhe-library|tutorials|deep-dive|images)(?=[/)"#])[^)"\s]*)')


def parse(path: Path):
    text = path.read_text(encoding="utf-8")
    lines = text.splitlines()
    front, body_start = {}, 0
    if lines and lines[0].strip() == "---":
        for i in range(1, len(lines)):
            if lines[i].strip() == "---":
                body_start = i + 1
                break
            m = re.match(r'\s*([A-Za-z0-9_-]+)\s*:\s*(.*)', lines[i])
            if m:
                front[m.group(1)] = m.group(2).strip().strip('"\'')
    return lines, front, body_start


def check(path: Path):
    lines, front, body_start = parse(path)
    errors = []

    def err(line_no, rule, message):
        errors.append((path, line_no, rule, message))

    # Snippets are fragments included into pages, so they carry no frontmatter.
    is_snippet = "snippets" in path.parts
    if not is_snippet:
        if not front.get("title"):
            err(1, "frontmatter", "Missing frontmatter `title`.")
        if not front.get("description"):
            err(1, "frontmatter", "Missing frontmatter `description`. One sentence saying what the page covers.")

    in_fence, fence_marker, fence_line = False, "", 0
    last_level = 1  # the H1 Mintlify renders from the frontmatter title

    for i in range(body_start, len(lines)):
        line = lines[i]
        n = i + 1
        stripped = line.strip()

        fence = re.match(r'^(```+|~~~+)(.*)$', stripped)
        if fence:
            marker, info = fence.group(1), fence.group(2).strip()
            if not in_fence:
                in_fence, fence_marker, fence_line = True, marker[:3], n
                if not info:
                    err(n, "code-lang", "Code block has no language tag. Add one, plus a filename where the reader needs to know where the code goes.")
            elif marker.startswith(fence_marker):
                in_fence = False
            continue
        if in_fence:
            continue

        heading = re.match(r'^(#{1,6})\s+(\S.*)$', line)
        if heading:
            level, title = len(heading.group(1)), heading.group(2)
            if level == 1:
                err(n, "manual-h1", "Manual H1. Mintlify renders the page H1 from the frontmatter `title`. Body headings start at `##`.")
            elif level > last_level + 1:
                err(n, "heading-skip", f"Heading level jumps from h{last_level} to h{level}. Do not skip levels.")
            last_level = max(level, 2) if level > 1 else last_level
            continue

        for match in re.finditer(r'\]\((\.\.?/[^)\s]*)\)', line):
            err(n, "link-path", f"Relative link `{match.group(1)}`. Use a root-relative path, such as `/cofhe/fhe-library/core-concepts/access-control`.")
        for match in re.finditer(r'\]\((https?://(?:(?:cofhe-)?docs\.fhenix\.zone|docs\.fhenix\.io)[^)\s]*)\)', line):
            err(n, "link-path", f"Absolute link to our own site `{match.group(1)}`. Use a root-relative path so preview deployments resolve.")
        # Pre-move CoFHE paths still resolve through wildcard redirects, so
        # mint broken-links accepts them and they would pile up unnoticed.
        for match in OLD_COFHE_LINK.finditer(line):
            err(n, "link-path", f"Old CoFHE path `{match.group(2)}`. CoFHE pages live under `/cofhe`: use `/cofhe{match.group(2)}`.")
        if re.search(r'!\[\s*\]\(', line):
            err(n, "alt-text", "Image has no alt text. Describe what the image shows.")
        for match in re.finditer(r'<img\b[^>]*>', line):
            if 'alt=' not in match.group(0):
                err(n, "alt-text", "`<img>` has no `alt` attribute.")

    if in_fence:
        err(fence_line, "code-fence", "Code block is never closed.")

    return errors


def main(argv):
    paths = [Path(a) for a in argv[1:]] or sorted(Path(".").rglob("*.mdx"))
    paths = [p for p in paths if p.suffix == ".mdx" and p.exists()]
    errors = []
    for path in paths:
        errors.extend(check(path))

    for path, line_no, rule, message in errors:
        print(f"{path}:{line_no}: error [{rule}] {message}")

    print(f"\n{len(errors)} error(s) in {len(paths)} file(s). See {GUIDE}.", file=sys.stderr)
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
