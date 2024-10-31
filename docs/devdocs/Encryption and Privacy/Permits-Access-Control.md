# 📜 Permits & Access Control


In a Fully Homomorphic Encryption (FHE) framework, all data stored in a contract's storage is encrypted. Access control involves granting selective access to data by authorized parties while restricting access to unauthorized users.

Solidity contracts generally expose their data using `view` functions. However, permissioned data is a challenge, since Solidity `view` functions do not come with any in-built mechanism to allow the contract to verify cryptographically that callers are who they say they are (for transactions, this is done by verifying the signature on the data).
Fhenix handles this issue by implementing a `seal` function, which seals the data in a manner that only the intended recipient can decrypt and view (Fhenix uses the `decrypt` function for less sensitive data). This approach ensures that encrypted data remains confidential and only accessible to authorized users.

## Permits and Access Control

Fhenix Solidity libraries (specifically, fhenix.js) are equipped with an in-built access control scheme. 
This access control scheme enables contracts to perform a basic check of account ownership by adding authentication and authorization features to specific view functions. 
(An added benefit of the Fhenix Solidity libraries is that developers save coding effort each time a project has cryptographic access control requirements.)

#### What is a Permit?

A permit is a mechanism that allows the contract to verify cryptographically the identity of callers, ensuring that they are who they claim to be.

In Fhenix, a permit is a signed message that contains the caller's public key, which the contract can use to verify the caller. The permit is a signed JSON object that follows the EIP-712 standard. 
The permit contains the necessary information, including a public key, which allows data re-sealing in a smart contract environment. 
The inclusion of this public key into the permit enables a secure process of data re-sealing within a smart contract after the JSON object is signed by the user.

#### How to Generate a Permit

Permits are generated using the `generatePermit` method in `fhenix.js`. This method receives the following parameters:

* `contractAddress` (required, string): The address of the contract.
* `provider` (optional): An `ethers` (or compatible) object that can sign EIP-712 formatted data. (Note that if you want to unseal data using your wallet's encryption key you can't use "JsonRpcProvider")
* `signer` (optional): Another `ethers` (or compatible) signer if you want to use a different signer than the one in the provider (chain-id requests are still made via the provider)

```javascript
const permit = await generatePermit(contractAddress);

// passing a custom signer
let permit = await fhenixjs.generatePermit(
    contractAddress,
    undefined,         // use the internal provider
    signer,            // created from, e.g. `ethers.getSigners()[0]`
);
```

#### What is a Permission?

In Fhenix, a permission is that part of a permit that supplies proof that callers are who they say they are. 
A permission contains the signature and corresponding public key. 
In order to see how to verify a permission in a Solidity contract, please refer to our [Permissioned](../Solidity%20API/Permissioned.md).

#### How to Generate a Permission

The following is the syntax for generating a permission:

```javascript
const permission = client.extractPermitPermissions(permit);
```

#### Using a Permission

Once generated, the permission can be used and sent to the contract. It can also be used to unseal the output of the `sealoutput` function, assuming it was sealed using that same permission.

The following code snippet shows how to implement the added cryptographic functionality of Fhenix (specifically, permits and permissions) on Ethereum using the Fhenix library.

```javascript
import { BrowserProvider } from "ethers";
import { FhenixClient, getPermit } from "fhenixjs";

const provider = new BrowserProvider(window.ethereum);
const client = new FhenixClient({ provider });
const permit = await generatePermit(contractAddress, provider);
const permission = client.extractPemitPermissions(permit);
const response = await contract.connect(owner).getValue(permission); // Calling "getValue" which is a view function in "contract"
const plaintext = await client.unseal(contractAddress, response);
```
