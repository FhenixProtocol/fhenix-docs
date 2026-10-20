# CoFHE docs pass per release

Every release of cofhe, cofhe-contracts, cofhesdk, teecryptor, or zee-k-verifier requires this pass before the release announcement. The release owner opens one DOC ticket per release and links it to the release.

## Checklist

1. Read the release changelog. List every change to a public surface: contract API, SDK API, wire fields, endpoints, error names, component names.
2. Map each change to its pages. Start from the Deep Dive component page, then the data flows, then guides and tutorials that name the surface.
3. Update the pages. Verify every claim against the released source, not the changelog text.
4. Update `cofhe/get-started/introduction/compatibility.mdx` when a package version changed.
5. Run the checks: `vale <changed pages>` and `python3 scripts/lint-docs.py <changed pages>`. CI runs link and sample checks on the PR.
6. Diagrams: when a component or flow changed, update the page `.mmd` source and re-run the archify build for that diagram.
7. Tutorial examples: move the pins in each `cofhe/tutorials/examples/*/package.json` (CI runs their tests), then run `npm run sepolia` in `cofhe/tutorials/examples/confidential-transfer` once with a funded test key.
8. Open one PR per release, one page per commit. Merge before the release announcement goes out.

## Rules

- Never announce a feature the docs do not cover.
- Never leave a removed API documented as current. Add a redirect when a page is removed or renamed.
- When a change cannot be documented before the announcement, say so on the DOC ticket and set a date.
