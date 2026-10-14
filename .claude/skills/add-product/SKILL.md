---
name: add-product
description: Add a new Fhenix product to the docs site - its folder, landing-page card, navigation entry, agent docs, and optional product CI. Use when someone asks to add, create, or set up docs for a new product (for example "add the X product", "new product line", "a docs section for Y").
---

# Add a product to the Fhenix docs

Each product is one folder at the repo root, served under its own URL prefix: `wallet/` is served at `docs.fhenix.io/wallet`. A product needs no Mintlify, DNS, or domain change. Everything is in this repo, in one pull request.

The Wallet Module is the reference. When a step is unclear, copy what `wallet/` does.

## 1. Collect the inputs

Ask for any value the request does not give. Do not invent them.

| Input | Example | Used in |
|---|---|---|
| Display name | `Wallet Module` | navigation, card, page titles |
| Slug | `wallet` | folder and URL. Lowercase, one word or kebab-case. Must not clash with an existing folder or redirect source in `docs.json`. |
| Icon | `wallet` | a Font Awesome name, as the other products use |
| One-line description | "The FHE coprocessor. Write Solidity contracts…" | the landing card and the `description` of `<slug>/index.mdx` |
| Status | `Live` or `Coming soon` | the card badge and the first page |
| Reviewers | `Yonatan and Alex` | `<slug>/AGENTS.md` |
| Where work is tracked | a Jira project | `<slug>/AGENTS.md`, optional |

## 2. Create the product folder

Create `<slug>/index.mdx`. For a product with no content yet, copy `wallet/index.mdx` and change the name:

```mdx
---
title: "<Display name>"
sidebarTitle: "Overview"
description: "<One-line description>"
---

## Coming soon

The <Display name> documentation is in progress.

For encrypted computation on Fhenix today, see the [CoFHE documentation](/cofhe).
```

Fix the article for the name. "The Fhenix Wallet Module" needs "the", but "Fhenix Trading" does not. Check every sentence that names the product, here and in `AGENTS.md`.

Create `<slug>/AGENTS.md` from `wallet/AGENTS.md`: change the heading, the folder, the URL prefix, the reviewers, and the status line. Keep the "Facts" rules as they are. Add a "Workflow" section when the product has a tracker: the root `AGENTS.md` says each product names its own.

Copy it to `<slug>/CLAUDE.md`. The two files are identical, as at the root and in every product.

When the product has its own terms or diagram lanes, add `<slug>/STYLE-<slug>.md` in the shape of `cofhe/STYLE-cofhe.md`. Do not create it empty.

## 3. Add the product to `docs.json`

Append the product to `navigation.products`, after the existing products. "All products" stays first, because it holds the landing page.

```json
{
  "product": "<Display name>",
  "icon": "<icon>",
  "groups": [
    {
      "group": "<Display name>",
      "pages": ["<slug>/index"]
    }
  ]
}
```

The group carries the product name, and the first page shows as "Overview" (its `sidebarTitle`). Do not repeat the product name in the sidebar.

A product with sections uses `tabs` instead of `groups`, like CoFHE. Every page path carries the `<slug>/` prefix.

## 4. Add the landing-page card

In `index.mdx`, add an `<a>` card inside the grid. Copy the Wallet Module card for "Coming soon", or the CoFHE card for "Live", then change:

- `href` to `/<slug>`
- the `Icon` name
- the title and the description
- the badge and the link text: "Live" with "Read the docs", or "Coming soon" with "See what is coming"

Keep the order of `navigation.products`. Pick the grid columns so that no card is alone on its last row:

- 2 or 4 cards: `sm:grid-cols-2`
- 3, 5, or 6 cards: `sm:grid-cols-2 lg:grid-cols-3`

Keep all cards equal: no larger card for a live product. The grid stays until it gets crowded, at about 7 products. Then ask the docs owner about a list layout.

When the product is a document, not a product (a litepaper, a whitepaper), rewrite the template sentences. "Documentation for the Fhenix Litepaper" is wrong: write "The Fhenix Litepaper is coming soon."

## 5. Update the shared docs

- `README.md`: add the product to the product list at the top and to the "Project Structure" tree.
- Root `AGENTS.md` and `CLAUDE.md`: add the folder to the list in the first paragraph ("Each product lives in its own folder (`cofhe/`, `wallet/`, …)"). Keep the two files identical.

## 6. Add product CI, only when the product needs it

`Docs style` and `Mint check` already run on every product. Add a workflow only for a check that is specific to the product, such as compiling its code samples.

- Put its scripts in `<slug>/scripts/`, and add `<slug>/scripts/` to `.mintignore`.
- Filter the workflow on the product folder, as `sample-compile.yml` does:

```yaml
on:
  pull_request:
    paths:
      - '<slug>/**/*.mdx'
      - '<slug>/scripts/<script>.py'
      - '.github/workflows/<workflow>.yml'
```

- Pin every tool version in `env`, as the existing workflows do.

## 7. Verify

Run all of these from the repo root. Each one must pass before you commit.

```bash
FILES=$(git ls-files --others --modified --exclude-standard -- '*.mdx')
python3 scripts/lint-docs.py $(echo $FILES)
vale $(echo $FILES)
PUPPETEER_SKIP_DOWNLOAD=true npx -y mint@4.2.819 validate
PUPPETEER_SKIP_DOWNLOAD=true npx -y mint@4.2.819 broken-links --check-anchors --check-redirects
```

Then check `docs.json` and the card:

- `python3 -c "import json; json.load(open('docs.json'))"` passes.
- Each page in the new product entry exists as `<path>.mdx`.
- The card `href` matches the slug.

After you push, open the Mintlify preview from the pull request checks. Check the landing page, the card link, and `/<slug>`. Check that the product switcher shows the new product, and that its pages do not show the CoFHE tabs.

## 8. Commit and open the pull request

- One commit: `[FEAT] Add <Display name> product`. Commit messages are one line, with no AI attribution.
- Request review from the reviewers named in step 1.
- The site goes live on merge. There is nothing to do in Mintlify or DNS.

## Do not

- Do not create a new repo, a new Mintlify project, or a new domain. All products share `docs.fhenix.io`.
- Do not put product facts in the root `AGENTS.md` or `STYLE.md`. They hold only rules for every product.
- Do not add redirects for a new product: no old URLs exist yet.
