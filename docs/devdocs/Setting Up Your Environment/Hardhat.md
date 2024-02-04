# 👷 Hardhat

## Prerequisites

* [Docker](https://www.docker.com/)
* [pnpm](https://pnpm.io/installation)


## Clone Hardhat Template

We provide a hardhat template available that comes "batteries included", with everything you need to hit the ground running. The template is [available here](https://github.com/fhenixprotocol/hardhat-template). You can create a new repository, or clone it locally:

```
git clone https://github.com/fhenixprotocol/fhenix-hardhat-example
```

You'll also probably want to set an .env file with your mnemonics:

```
cp .env.example .env
```

## Install Dependencies

Once you've cloned the repository, you can install the dependencies with pnpm:

```sh
pnpm install
```

### Start LocalFhenix

LocalFhenix is a complete Fhenix local testnet and ecosystem containerized with Docker. It simplifies the way contract developers test their contracts in a sandbox before they deploy them on a testnet or mainnet - similar to Ganache, or other local network environments.

To start a LocalFhenix instance, run the following command:

```sh
pnpm localfhenix:start
```

This will start a LocalFhenix instance in a docker container, managed by the `fhenix-hardhat-docker` plugin for Hardhat. 
If this worked you should see a `LocalFhenix started` message in your console.

You've now officially created a LocalFhenix testnet. 🎉

After you're done, you can stop the LocalFhenix instance with:

```sh
pnpm localfhenix:stop
```

### Deploy the contracts

To deploy the contracts to LocalFhenix, run the following command:

```sh
pnpm hardhat deploy
```

This will compile the contracts in the `contracts` directory and deploy them to the LocalFhenix network.

(note: if you want to deploy to a different network, you can specify the network with the `--network` flag)

### Tasks

We've included a few tasks in the `tasks` directory to help you get started. You can run them with the `pnpm task` command.

```sh
pnpm task:getCount # => 0
pnpm task:addCount
pnpm task:getCount # => 1
pnpm task:addCount --amount 5
pnpm task:getCount # => 6
```
