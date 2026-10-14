# CoFHE docs

Pages under `cofhe/` document CoFHE, served at `/cofhe/...`. The root `AGENTS.md` and `STYLE.md` apply here too. `cofhe/STYLE-cofhe.md` adds the CoFHE terms and diagram rules.

## Facts

- Never write a technical claim you have not verified against the current source of the relevant repo (cofhe, cofhesdk, teecryptor, zee-k-verifier, fhenix-confidential-contracts) or the published packages. Docs drift is the failure mode this project exists to fix.
- For the confidential token contracts (FHERC20, ERC20Confidential, the wrappers), verify against the Solidity under `contracts/` at the tag matching the version on the compatibility page, or the published npm package. The repo README lags the code; do not take API shapes from it.
- Current behavior and future plans never mix. Future work lives in `cofhe/deep-dive/research/future-plans.mdx`, labeled as such.
- The TEE (Teecryptor) is the current decryption architecture. The Threshold Network is a future plan only.
- No internal names: hostnames, cloud project names, environment names, deployment bundle names, feature flags.

## Samples

The `Sample compile` action compiles every ```solidity block on the pages a pull request touches, with forge, against the `@fhenixprotocol/cofhe-contracts` and `fhenix-confidential-contracts` versions pinned in `.github/workflows/sample-compile.yml`. A complete contract that fails blocks the merge; a fragment that fails only warns. Run it locally before opening a pull request:

```bash
npm install --no-save @fhenixprotocol/cofhe-contracts@1.0.0 fhenix-confidential-contracts@0.4.0
python3 cofhe/scripts/compile-samples.py $FILES
```

Those pins must match `COFHE_CONTRACTS_VERSION` and `CONFIDENTIAL_CONTRACTS_VERSION` in `.github/workflows/sample-compile.yml`, which follow the compatibility page. When it changes, move them too; `python3 cofhe/scripts/check-versions.py --docs` fails until you do. The action does not deploy or run anything, so a sample that compiles can still be wrong. Library linking, for example, only fails at deploy time.

## Workflow

- CoFHE docs work is tracked in the Jira DOC project, one epic per site tab. Ticket summaries start with `[page-slug]`.
