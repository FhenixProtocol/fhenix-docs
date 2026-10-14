# Working on the Fhenix docs

This repo is the Mintlify site behind docs.fhenix.io. Each product lives in its own folder (`cofhe/`, `wallet/`) and has its own `AGENTS.md` with product facts. Read both: the rules here apply to every product.

- `/` is the landing page (`index.mdx`), with one card per product.
- Product pages live under their folder and their URL prefix: `cofhe/...` is served at `/cofhe/...`.

## The one rule that matters

STYLE.md is binding for all content. Each product adds its own terms and diagram rules in its folder (for CoFHE: `cofhe/STYLE-cofhe.md`). Read it before writing or editing any page. If a page you touch conflicts with STYLE.md, fix the page.

## Mechanics

- Navigation lives in `docs.json`, under `navigation.products`: one product per folder. A page not referenced there is invisible; check it when adding, renaming, or removing pages.
- Renaming or removing a page requires a redirect entry.
- Diagrams are Mermaid blocks in the page (see STYLE.md, Diagrams). Each product sets its diagram lanes and colors in its own style file (for CoFHE: `cofhe/STYLE-cofhe.md`, "Sequence diagram lanes"). Do not add or edit SVGs; designed SVGs come from the design pass and keep their Mermaid source in the repo.
- Code samples must compile or run against the currently published versions before they ship.
- Product CI runs only on its folder: a workflow for one product filters on `paths: <product>/**`. Shared checks (`Docs style`, `Mint check`) run on every product.
- Mintlify renders the page H1 from the frontmatter `title`. Body headings start at `##` and never skip a level.
- Internal links are root-relative: `/cofhe/fhe-library/core-concepts/access-control`, never `../` and never the full site URL.

## Linters

Two linters enforce the mechanical half of STYLE.md. Run both on what you changed before opening a pull request:

```bash
FILES=$(git diff --name-only --diff-filter=d origin/main...HEAD -- '*.mdx')
python3 scripts/lint-docs.py $FILES
vale $FILES
```

- `vale` covers prose: em dashes, decorative Unicode, filler, marketing adjectives, "simply" and "easy", idioms, terminology, Title Case headings. Rules live in `styles/Fhenix/`.
- `scripts/lint-docs.py` covers structure: frontmatter, manual H1 headings, skipped heading levels, code blocks with no language tag, link paths, alt text.

The `Docs style` action runs both on the `.mdx` files a pull request touches. Errors block the merge, warnings do not. Pages written before the linters existed still contain violations, so the action ignores files your branch did not touch. Fix a legacy page when you are already editing it, not in a sweep.

Neither linter can tell whether a claim is true. That stays your job.

## Workflow

- Each product says in its own `AGENTS.md` where its docs work is tracked.
- Commit messages: single line, `[DOCS] <area>/<page-slug>: summary`.
- One page per commit on rewrite branches, so commits can be cherry-picked individually.
