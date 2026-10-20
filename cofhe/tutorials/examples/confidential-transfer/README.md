# Send a confidential payment

Alice sends Bob 100 tokens. Everyone can see that a transfer happened. Only Alice and Bob can see the amount and their balances.

This is the example project for the tutorial at [docs.fhenix.io/cofhe/tutorials/confidential-payment](https://docs.fhenix.io/cofhe/tutorials/confidential-payment).

## Run it on local mocks

Tested with Node.js 22. No wallet, no testnet.

```bash
npm install
npm test
```

## Run it on Sepolia

Needs one Sepolia test account for Alice, with some Sepolia ETH. Bob only signs, so the script creates a fresh wallet for him.

```bash
cp .env.example .env   # then fill in ALICE_PRIVATE_KEY
npm run sepolia
```

## Files

- `contracts/ConfidentialToken.sol`: the token, built on FHERC20 from `fhenix-confidential-contracts`.
- `test/alice-to-bob.test.ts`: the story on local mocks.
- `scripts/alice-to-bob.ts`: the same story on Sepolia.
