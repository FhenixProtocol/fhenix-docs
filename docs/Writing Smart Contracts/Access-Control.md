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


#### Basic Access Control Using EIP712

Out-of-the-box, Fhenix Solidity libraries come with a basic access control scheme. This helps contracts perform a basic check for ownership of an account.

To confirm whether the recipient is authorized, EIP712 signatures are employed. EIP712 is a standard for Ethereum signed messages that makes it easier to understand the information being signed. This allows us to verify that the signer of a given piece of data is the owner of the account they claim to be.

:::tip[Did You Know?]
When signing EIP712 typed data, wallets such as MetaMask provide a more transparent, safe interface for users to understand what they are signing
:::

Let's see this concept in action using an example. In an encrypted ERC20 token contract, a user would want to query their token balance. Since the balance is stored as encrypted data, the contract must first verify that the query is indeed from the token owner before revealing the information. This is where the EIP712 signatures step in.

Below is a function from an EncryptedERC20 contract:

```solidity
function balanceOf(
    bytes32 publicKey,
    bytes calldata signature
)
    public
    view
    onlySignedPublicKey(publicKey, signature)
    returns (bytes memory)
{
    return TFHE.reencrypt(balances[msg.sender], publicKey);
}
```

In this function, `onlySignedPublicKey` is a modifier that verifies if the EIP712 signature is valid. If the signature corresponds to the account that is making the call (`msg.sender`), then the function will execute. If not, it will revert.

Here's what the `onlySignedPublicKey` modifier looks like:

```solidity
modifier onlySignedPublicKey(bytes32 publicKey, bytes memory signature) {
    bytes32 digest = _hashTypedDataV4(
        keccak256(
            abi.encode(keccak256("Reencrypt(bytes32 publicKey)"), publicKey)
        )
    );
    address signer = ECDSA.recover(digest, signature);
    require(
        signer == msg.sender,
        "EIP712 signer and transaction signer do not match"
    );
    _;
}
```

The `onlySignedPublicKey` modifier takes a `publicKey` and `signature`. It then calculates the `digest` from the `publicKey`. The signer's address is recovered from the `digest` using the `ECDSA.recover` function. If the recovered address matches `msg.sender`, it means that the caller is indeed the owner of the account and is allowed to access the data.

fhEVM solidity library comes with a helper contract [EIP712WithModifier.sol](https://github.com/zama-ai/fhevm-solidity/blob/main/abstracts/EIP712WithModifier.sol) which includes the snippet above and can be easily imported to integrate into your contracts. See [EncryptedERC20.sol](https://github.com/FhenixProtocol/devnet-contracts/blob/main/EncryptedERC20.sol) for a full example how this is done.

#### Advanced Access Control

While the above-mentioned access control scheme leveraging EIP712 signatures provides a robust mechanism for verifying the identity of users querying encrypted data, it does have some limitations. One of the primary missing pieces is the absence of roles and permissions associated with those roles. The scheme as described validates that a user querying a balance, for example, is indeed the owner of that account, but it doesn't provide a mechanism for defining different levels of access or permissions.

For instance, in more complex scenarios, you might want to allow certain users to only view specific pieces of data, or perhaps perform certain actions based on their role (admin, user, auditor, etc.). Moreover, there's no provision for dynamic access control in which permissions could be granted or revoked at runtime.

Additionally, this scheme doesn't cover collective authority, where, for example, an action might require the approval of multiple participants to be executed. Such advanced access control mechanisms are not built into this scheme and would need to be implemented separately based on specific application needs.

Lastly, the EIP-712 standard mostly considers messages targeted at a single smart contract. Some use-cases, however, benefit from allowing the user to provide access to multiple contracts concurrently. For example, consider a DeX (decentralized exchange). Allowing such an app to be able to display the balances of all the user's different tokens would be a UX challenge if the user had to approve each one individually.  &#x20;

### Standardization

While we recommend and provide Permits as a basic access control mechanism, we do not enforce any particular standard for them.
We feel that as the ecosystem evolves, different standards will emerge and we do not want to limit the ecosystem by enforcing a particular standard at this stage.

In other words, if you think there is a better way to do it, feel free to do so!
