---
sidebar_position: 3
title: (Un)Sealing
---


When an app wants to read some piece of encrypted data from a Fhenix smart contract, that data must be converted from its encrypted form on chain to an encryption that the app or user can read.

The process of taking an FHE-encrypted ciphertext and converting it to standard encryption is called **sealing.**

The data is returned to the user using [sealed box encryption ](https://bitbeans.gitbooks.io/libsodium-net/content/public-key\_cryptography/sealed\_boxes.html)from NaCL. The gist of it is that the user provides a public key to the contract during a view function call, which the contract then uses to encrypt the data in such a way that only the owner of the private key associated with the provided public key can decrypt and read the data.

:::tip[Don't Want to Seal?]
Fhenix supports standard decryption as well. Mostly suited for public data, an unsealed plaintext value can be returned from a contract.
You can read more about how to do this [here](#../).
:::

### Encrypted Values & Permits

When reading encrypted values we can do one of two things. TBD: finish this

A `Permit` is a data structure that helps contracts know who is trying to call a specific function.

The fhenix.js Javascript library includes methods to support creating parameters for values that require [EIP-712 authentication](../fhevm-solidity/access-control.md). These methods can help creating ephemeral transaction keys, which are used by the smart contract to create a secure encryption channel to the caller.
Similarly to decryption, this usage can be implemented by any compliant library, but we include direct support in FhenixJS.&#x20;

This is done in 3 steps: generating a permit, querying the contract and unsealing the data.

#### 1. Creating a Permit

```javascript
const provider = new ethers.JsonRpcProvider('http://demo.fhenix.zone:8545');
const client = FhenixClient.Create({provider});

const permit = await client.getPermit(contractAddress);
```

:::tip[Did you know?]
When you create a permit it gets stored in `localstorage`. This makes permits easily reusable and transferable
:::

#### 2. Querying the Contract

We recommend that contracts implement the Permit/Permission interfaces (though this is not strictly required!).
In this case, we can easily inject our permit into the function call.

```javascript
const permission = client.getPermission(contractAddress);
const response = await contract.balanceOf(permission);
```

#### 3. Unsealing the Data

Now that we have the response data, we can use the `unseal` function to decipher the data

```javascript
client.unseal(contractAddress, response)
```

We have to provide the contract address so the fhenix client knows which permit to use for the unsealing function.

:::note
Permits are currently limited to support a single contract
:::

#### Putting it all Together

```typescript
import { FhenixClient } from 'fhenixjs';
import { JsonRpcProvider } from 'ethers';

const provider = new ethers.JsonRpcProvider('http://demo.fhenix.zone:8545');
const client = FhenixClient.Create({provider});

const permit = await client.getPermit(contractAddress);

const permission = client.getPermission(contractAddress);
const response = await contract.balanceOf(permission);

const plaintext: bigint = client.unseal(contractAddress, response)

console.log(`My Balance: ${plaintext.toString()}`)
```

#### Advanced: Without Using FhenixJS

Both the encryption and authentication standards here are not Fhenix-specific, so you can use a number of 3rd party libraries to achieve the same result. Some apps may want to avoid directly using FhenixJS in specific scenarios, so an example is provided here as well, using `ethers.js` and `libsodium`

```typescript
async function unseal(contract: ethers.Contract,
                      provider: BrowserProvider): bigint {
  // instantiate sodium library
  await _sodium.ready;
  const sodium = _sodium;
  
  // generate keys
  let keypair = sodium.crypto_box_keypair('hex');
  let publicKey = keypair.publicKey;

  let contractAddress = await contract.getAddress();
  const signer = await provider.getSigner()

  // create token
  let domain = {
    name: 'Authorization token',
    version: '1',
    chainId: 9000,
    verifyingContract: contractAddress
  };

  let typedData = {
    types: {
      Reencrypt: [{
        name: 'publicKey',
        type: 'bytes32'
      }]
    },
    domain: domain,
    primaryType: 'Reencrypt',
    message: {
      publicKey: `0x${publicKey}`
    }
  };

  // Sign token
  let msgSig = await signer.signTypedData(typedData.domain, typedData.types, typedData.message);

  // Query balance - assuming that the contract is already connected with the signer (wallet)
  let msg = await contract.balanceOf(`0x${publicKey}`, msgSig);

  // decrypt
  const plaintext = sodium.crypto_box_seal_open(fromHexString(msg), fromHexString(keypair.publicKey), fromHexString(keypair.privateKey));

  // todo: this is here from a previous library, need to check if this works
  if (!plaintext) {
    return ethers.toBigInt(0);
  }

  // big endian bytes to big int 
  return ethers.toBigInt(plaintext)
}

export const fromHexString = (hexString: string): Uint8Array => {
  const arr = hexString.replace(/^(0x)/, '').match(/.{1,2}/g);
  if (!arr) return new Uint8Array();
  return Uint8Array.from(arr.map((byte) => parseInt(byte, 16)));
};
```
