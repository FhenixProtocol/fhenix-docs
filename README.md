# Fhenix Developer Documentation

The documentation for Fhenix products, served at [docs.fhenix.io](https://docs.fhenix.io).

- **CoFHE** (`cofhe/`): the FHE coprocessor. Write Solidity contracts that compute on encrypted data. Covers Get Started, the Client SDK, the FHE library, Tutorials, and the Deep Dive.
- **Wallet Module** (`wallet/`): coming soon.
- **Trading** (`trading/`): coming soon.
- **Litepaper** (`litepaper/`): coming soon.

## Development

This documentation is built using [Mintlify](https://mintlify.com/). To preview the documentation locally:

### Prerequisites

Install the [Mintlify CLI](https://www.npmjs.com/package/mint):

```bash
npm i -g mint
```

### Running Locally

Run the following command at the root of the documentation directory:

```bash
mint dev
```

The documentation will be available at `http://localhost:3000`.

## Project Structure

```
fhenix-docs/
├── index.mdx             # Landing page, one card per product
├── cofhe/                # CoFHE docs, served at /cofhe
│   ├── get-started/  client-sdk/  fhe-library/  tutorials/  deep-dive/
│   ├── images/
│   ├── scripts/          # CoFHE checks: versions, sample compile
│   ├── AGENTS.md         # CoFHE facts for contributors and agents
│   └── STYLE-cofhe.md    # CoFHE terms and diagram rules
├── wallet/               # Wallet Module docs, served at /wallet
├── trading/              # Trading docs, served at /trading
├── litepaper/            # Fhenix Litepaper, served at /litepaper
├── scripts/              # Shared structure linter (lint-docs.py)
├── styles/               # Shared Vale prose rules
├── STYLE.md              # Writing style guide, binding for all pages
├── AGENTS.md             # Shared rules for contributors and agents
└── docs.json             # Mintlify configuration: products, navigation, redirects
```

To add a product, create its folder, add it to `navigation.products` in `docs.json`, and add a card to `index.mdx`.

## Publishing Changes

Changes pushed to the default branch are automatically deployed to production through the Mintlify GitHub app integration.

## Contributing

We welcome contributions to improve the documentation. When making changes:

1. Read `STYLE.md` before writing; it is binding for all pages
2. Test locally using `mint dev`
3. Run the linters on the pages you changed: `python3 scripts/lint-docs.py <files>` and `vale <files>`
4. Ensure all links and navigation work correctly
5. Submit a pull request with a clear description of your changes

## Links

- [Fhenix Website](https://www.fhenix.io/)
- [Fhenix Blog](https://www.fhenix.io/blog)
- [GitHub Organization](https://github.com/fhenixprotocol/)
- [Discord Community](https://discord.com/invite/FuVgxrvJMY)
- [Twitter/X](https://x.com/fhenix)

## Troubleshooting

- If your dev environment isn't running: Run `mint update` to ensure you have the most recent version of the CLI
- If a page loads as a 404: Make sure you are running in the folder with `docs.json`

## Resources

- [Mintlify Documentation](https://mintlify.com/docs)
- [Fhenix documentation live site](https://docs.fhenix.io)

## Support

For questions and support:
- Join our [Telegram Support Channel](https://t.me/+OEO4CItQYh8xYzNh)
- Visit our [Discord](https://discord.com/invite/FuVgxrvJMY)
- Check the [Support and Feedback](cofhe/get-started/introduction/support-and-feedback.mdx) documentation
