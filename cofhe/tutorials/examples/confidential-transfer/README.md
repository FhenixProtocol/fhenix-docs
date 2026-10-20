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

Needs two Sepolia accounts: one for Alice, one for Bob. Only Alice's account needs Sepolia ETH, to deploy and transfer. Bob only signs.

```bash
cp .env.example .env   # then fill in the RPC URL and the two private keys
npm run sepolia
```

## Files

- `contracts/ConfidentialToken.sol`: the token, built on FHERC20 from `fhenix-confidential-contracts`.
- `test/alice-to-bob.test.ts`: the story on local mocks.
- `scripts/alice-to-bob.ts`: the same story on Sepolia.
