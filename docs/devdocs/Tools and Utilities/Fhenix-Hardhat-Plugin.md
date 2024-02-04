# 👷 Fhenix Hardhat Plugin 

Fhenix Hardhat Plugin is designed to extend your Hardhat environment with additional capabilities focused on Fhenix. It integrates seamlessly with your Hardhat projects to provide a local Fhenix environment, including customized network configuration and utilities for managing funds and permits within your blockchain applications.

## Features

- **Local Fhenix Environment:** Automatically sets up a local Fhenix network configuration within Hardhat, allowing for easy deployment and interaction with Fhenix contracts.
- **Faucet Integration:** Enables developers to easily obtain funds for testing purposes through a simple API call to a local faucet.
- **Permit Management:** Simplifies the process of creating and storing permit signatures required for transactions, reducing the complexity of interacting with contracts that require permissions.

If you want to see a full example in action, check out our [Hardhat Example Template](https://github.com/FhenixProtocol/fhenix-hardhat-example)!

## Installation

To use FhenixJS in your Hardhat project, first install the plugin via npm (or your favorite package manager):

```sh
pnpm install fhenix-hardhat-plugin
```

If you wish to run your own local dev environment, please install the [fhenix-hardhat-docker](https://github.com/fhenixprotocol/fhenix-hardhat-docker) plugin as well.

```sh
pnpm install fhenix-hardhat-docker
```

## Setup

After installation, import the plugin in your Hardhat configuration file (e.g., `hardhat.config.js`):

```javascript
require("fhenix-hardhat-plugin");
// if using the docker plugin
require("fhenix-hardhat-docker");
```

or if you are using TypeScript, in your `hardhat.config.ts`:

```typescript
import "fhenix-hardhat-plugin";
// if using the docker plugin
import "fhenix-hardhat-docker";
```

## Configuration

### Network Configuration

The plugin automatically adds a `localfhenix` network configuration to your Hardhat project. This configuration is designed for local development and includes settings such as gas estimates, accounts, and the local network URL.

To target this network, simply add `--network localfhenix` to your hardhat commands, or set it as the default.

If you want to use Fhenix Frontier (or a custom Fhenix network), you can add a new network configuration to your `hardhat.config.js` file:

```typescript
const config: HardhatUserConfig = {
    networks: {
        fhenix: {
            url: "https://test01.fhenix.zone/evm",
            chainId: 412346,
            accounts: mnemonic,
        },
    },
};

export default config;
```

### Using FhenixJS from Hardhat Runtime Environment

After importing `fhenix-hardhat-plugin` hardhat will automatically extend the Hardhat Runtime Environment (HRE) with a `fhenixjs` object, providing access to Fhenix-specific functionality:

- Use the `fhenixjs` object directly to encrypt, unseal or manage permits.
- **`getFunds(address: string)`**: Request funds from the local faucet for the specified address.
- **`createPermit(contractAddress: string, provider?: SupportedProvider)`**: Create and store a permit for interacting with a contract.

## Usage

### Local Dev Environment

To set up a localfhenix instance, simply import `fhenix-hardhat-docker`. This will add two new hardhat tasks:

- **`localfhenix:start`** To start a local dev environment using docker. By default, the instance will listen for rpc connections on port `42069`
- **`localfhenix:stop`** Stops the docker container

To start the container:

```sh
pnpm hardhat localfhenix:start
```

If starting the instance was successful, you should see the message: `Started LocalFhenix successfully at 127.0.0.1:42069`.

To stop the running container:

```sh
pnpm hardhat localfhenix:stop
```

Which will result in `Successfully shut down LocalFhenix`

### Requesting Funds

To request funds from the local faucet for an address, use the `getFunds` method:

```javascript
await hre.fhenixjs.getFunds("your_wallet_address");
```

### Encryption

```javascript
const encyrptedAmount = await fhenixjs.encrypt_uint32(15);
```

### Creating a Permit

To create a permit for a contract, use the `createPermit` method:

```javascript
const permit = await hre.fhenixjs.createPermit("contract_address");
```

## Support

For issues, suggestions, or contributions, please open an issue or pull request in the [Hardhat Fhenix Plugin GitHub repository](https://github.com/fhenixprotocol/fhenix-hardhat-plugin).
