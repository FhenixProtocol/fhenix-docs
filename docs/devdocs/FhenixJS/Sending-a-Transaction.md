---
sidebar_position: 4
---

# End-to-End Example

In this section, we'll explore how to use fhenixjs to send transactions on the Fhenix blockchain.

To send transactions with fhenixjs, we'll first establish a connection to the blockchain, then interact with it using a contract method. For this process, we'll also need to encrypt the transaction data.

Here's a step-by-step explanation, using `ethers`, though other libraries like `web3`can also be used in a similar way.&#x20;

Let's assume we have a deployed ERC20 contract, only this one uses encrypted inputs and outputs (you can find the solidity code [here](../../examples/reference-dapps/encrypted-erc20/)). Let's see how we can transfer some of our tokens to another address, while keeping the amount hidden.

1. **Import fhenixjs and ethers**

:::danger
OUTDATED
:::

```javascript
import * as fhenixjs from 'fhenixjs';
import ethers from 'ethers';
```

2. **Define the Smart Contract Address and Provider:** The smart contract address is the Ethereum address of the deployed contract. `provider` is an instance of the ethers.js library's `Web3Provider` which allows you to interact with the Ethereum blockchain.

```javascript
const CONTRACT_ADDRESS = '0x1c786b8ca49D932AFaDCEc00827352B503edf16c';
const provider = new ethers.providers.Web3Provider(window.ethereum);
```

3. **Create an Instance of the fhenixjs:** The `createInstance` function is used to create an instance of fhenixjs with the current blockchain parameters (chainId and publicKey).

```javascript
const getInstance = async () => {
  // if you want to use a singleton pattern
  if (_instance) return _instance;
  
  // Get chain id
  const chainId = await provider.getNetwork()
  console.log(`what dis: ${chainId.chainId}`)

  // Get blockchain public key
  const publicKey = await provider.call({ 
    to: '0x0000000000000000000000000000000000000044' 
  });

  // Create instance
  _instance = createInstance({ chainId, publicKey });
  return _instance;
};
```

4. **Create the Transfer Function:** The `transfer` function is used to send a transaction on the blockchain. It requires the recipient address and the amount to be sent as parameters.

```javascript
const transfer = async (to, amount) => {
  // Initialize contract
  const contract = new Contract(abi, CONTRACT_ADDRESS);

  // Get instance to encrypt amount parameter
  const instance = await getInstance();
  const encryptedAmount = instance.encrypt32(amount);

  const transaction = await contract.methods.transfer(address, encryptedAmount);
  return transaction;
};
```

In the `transfer` function:

* First, an instance of the contract is initialized using the ABI and the contract address.
* The `getInstance` function is called to get an instance of fhenixjs. The instance is then used to encrypt the transaction amount. The `encrypt32` function of fhenixjs is used to encrypt a 32-byte value. The encrypted value is passed as a parameter to the transfer method of the contract.
* The transaction is sent using the `contract.methods.transfer` function. The `transfer` method of the contract requires the recipient address and the encrypted amount as parameters. The function returns the transaction.

#### Putting it all together

```javascript
const { createInstance } = require('fhenixjs');
const { Wallet, JsonRpcProvider, Contract } = require('ethers');

const contractInfo = require('./EncryptedERC20.json');

const CONTRACT_ADDRESS = '0x309cf2aae85ad8a1db70ca88cfd4225bf17a7482';

const provider = new JsonRpcProvider(`https://devnet.zama.ai/`);

const signer = new Wallet('0x92293977156de6e03b20b26708cb4496b523116190b5c32d77cee8286d0c41f6', provider);

let _instance;

const getInstance = async () => {
  if (_instance) return _instance;

  // 1. Get chain id
  const network = await provider.getNetwork();
  const chainId = +network.chainId.toString(); // Need to be a number

  // Get global public key
  const publicKey = await provider.call({ to: '0x0000000000000000000000000000000000000044' });

  // Create instance
  _instance = createInstance({ chainId, publicKey });
  return _instance;
};

const transfer = async (to, amount) => {
  // Initialize contract with ethers
  const contract = new Contract(CONTRACT_ADDRESS, contractInfo.abi, signer);
  // Get instance to encrypt amount parameter
  const instance = await getInstance();
  const encryptedAmount = instance.encrypt32(amount);

  const transaction = await contract['transfer(address,bytes)'](to, encryptedAmount);
  return transaction;
};

transfer('0xa83a498Eee26f9594E3A784f204e507a5Fae3210', 10);
```
