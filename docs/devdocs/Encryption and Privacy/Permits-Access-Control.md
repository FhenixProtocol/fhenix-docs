# Permits & Access Control

In a Fully Homomorphic Encryption (FHE) context, data stored in the contract's storage is encrypted.
Therefore, granting selective access to data becomes an essential part of access control.
This is done via the `sealoutput` function, which seals the data in a manner that only the intended
recipient can decrypt and view it (or the `decrypt` function, for less sensitive data). This approach ensures that
encrypted data remains confidential and only accessible to authorized users.

Usually, Solidity contracts will expose their data using View functions.
However, in the context of permissioned data this is challenging for us since view functions do not come
with any kind of mechanism to allow the contract to cryptographically verify that the caller is who he says he is -
in the case of transactions this is done by verifying the signature on the data.

This means that we have to create mechanisms that enable the contract to determine who can access the data and who can't.

## Permits

Permits are a mechanism that allows the contract to cryptographically verify that the caller is who he says he is.

Simply, they are a signed message that contains the caller's public key, which the contract can then use to verify that the caller is who he says he is.



------------------------------

# Permits & Access Control (EIP-712)

Out-of-the-box, Fhenix Solidity libraries come with a basic access control scheme. This helps contracts perform a basic check for ownership of an account.

This makes it easy for contracts to add authentication & authorization to specific view functions, without having to reinvent the wheel every time. To learn more about why this can be important, and what EIP712 is, refer to our [fundamentals section on Access Control](../fhevm-solidity/access-control.md).

This page will cover how access tokens are created and used in FhenixJS.

#### What is a Permit?

In the context of Fhenix and blockchain, an access token refers to a signed JSON object that follows the EIP-712 standard. This token contains the necessary information, including a public key, that allows data reencryption in a smart contract environment. The inclusion of this public key into the access token enables a secure process of data re-encryption within a smart contract once the JSON object is signed by the user.

#### How to Generate a Permit

Access tokens are generated using the `FhevmInstance.generateToken` method. This method requires a few parameters:

* `options` (required): An object containing the following properties:
    * `verifyingContract` (required, string): The address of the contract.
    * `name` (optional, string): The name used in the EIP712 token.
    * `version` (optional, string): The version used in the EIP712 token.

The `generateToken` method returns an object containing a keypair (publicKey and privateKey) and a token (EIP712 formatted).

```javascript
const instance = await createInstance({ chainId, publicKey });
const encryptedParam = instance.generateToken({
  name: 'Authentication',
  verifyingContract: '0x1c786b8ca49D932AFaDCEc00827352B503edf16c',
});
```

Behind the scenes, this function not only creates an access token, but also generates an ephemeral key that is used for decryption of the responses.&#x20;

#### Using an Access Token

Once generated, the access token can be used in a variety of ways, such as being signed for data re-encryption in a smart contract or to retrieve balance information of a contract. Here's an example of using an access token for getting balance:

```javascript
const instance = await createInstance({ chainId, publicKey });
const token = instance.generateToken({
  name: 'Authentication',
  verifyingContract: '0x1c786b8ca49D932AFaDCEc00827352B503edf16c',
});
const params = [userAddress, JSON.stringify(generatedToken.token)];
const sign = await window.ethereum.request({ method: 'eth_signTypedData_v4', params });
const response = await contract.balanceOf(token.publicKey, sign);
```

#### Storing and Loading Access Tokens

Tokens can be stored for later use by using the `FhevmInstance.setTokenSignature` method. This method allows you to store the signature of a public key for a specific contract. The `FhevmInstance.getTokenSignature` method can then be used to fetch the stored public key and signature later.

```javascript
// Store signature
instance.setTokenSignature(contractAddress, sign);

// Fetch public key and signature
const { publicKey, signature } = instance.getTokenSignature();
```

For batch operations or caching purposes, the `FhevmInstance.serializeKeypairs` method is useful as it allows you to store contract keypairs in the user's LocalStorage. The method returns a mapping of contract addresses to their associated keypairs and signatures.

```javascript
const keypairs = instance.serializeKeypairs();
console.log(keypairs);
```

This structure can then be used when reloading the instance

```javascript
const instance = await createInstance({ chainId, publicKey, keypairs });
```
