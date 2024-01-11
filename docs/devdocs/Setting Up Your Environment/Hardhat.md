# Hardhat

## Prerequisites

* [Docker](https://www.docker.com/)
* [pnpm](https://pnpm.io/installation)

LocalFhenix is a complete Fhenix devnet and ecosystem containerized with Docker. It simplifies the way contract developers test their contracts in a sandbox before they deploy them on a testnet or mainnet - similar to Ganache, or other local network environments.

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
pnpm start:localfhenix
```

Note that you can run LocalFhenix without using the template directly as a docker image using the command

#### Want to run LocalFhenix without the template?

```bash
docker run -it -p 8545:8545 -p 6000:6000 \
  --name localfhenix ghcr.io/fhenixprotocol/fhenix-devnet:0.1.6
```


:::note
In this example port 8545 will be exposed as the JSON-RPC port, and port 6000 is used for the built-in faucet
:::

You've now officially created a local Fhenix devnet with chain-id `5432`. 🎉

### Faucet

To start developing on LocalFhenix, we'll need to send some FHE to a new address. For this, we can use the built-in faucet.

```bash
pnpm faucet
```

#### Want to call the faucet manually?

The faucet sends 100 FHE every call. The pnpm command uses the mnemonics from your .env file. If you want to use a different address, you can directly call the faucet API:

```bash
curl "http://localhost:3000/faucet?address=${ADDRESS}"
```
