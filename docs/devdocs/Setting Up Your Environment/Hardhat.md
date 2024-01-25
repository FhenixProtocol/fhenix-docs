# 👷 Hardhat

## Prerequisites

* [Docker](https://www.docker.com/)
* [pnpm](https://pnpm.io/installation)

LocalFhenix is a complete Fhenix local testnet and ecosystem containerized with Docker. It simplifies the way contract developers test their contracts in a sandbox before they deploy them on a testnet or mainnet - similar to Ganache, or other local network environments.

LocalFhenix comes preconfigured with opinionated, sensible (hopefully) defaults for standard testing environments.

## Clone Hardhat Template

We provide a hardhat template available that comes "batteries included", with everything you need to hit the ground running. The template is [available here](https://github.com/fhenixprotocol/hardhat-template). You can create a new repository, or clone it locally:

```
git clone https://github.com/fhenixprotocol/hardhat-template
```

You'll also probably want to set an .env file with your mnemonics:

```
cp .env.example .env
```

### Start LocalFhenix

Start the local dev environment in a separate tab using:

```
docker run [-d] -p 8547:8547 -p 3000:3000 -it ghcr.io/fhenixprotocol/nitro/localfhenix:latest
```

You can choose if you want to use the `-d` for detached run or not


:::note
In this example port 8547 will be exposed as the JSON-RPC port, and port 3000 is used for fauct.
:::

You've now officially created a local Fhenix testnet with chain-id `412346`. 🎉

### Faucet

To start developing on LocalFhenix, we'll need to send some FHE to a new address. For this, we can use the built-in faucet.

You can use it by accessing the following url:
```
http://localhost:3000/faucet?address={YOUR_WALLET_ADDRESS}
```

You can also use curl:
```bash
curl "http://localhost:3000/faucet?address={YOUR_WALLET_ADDRESS}"
```