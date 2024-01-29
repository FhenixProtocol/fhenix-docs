---
sidebar_position: 3
title: 👈 Outputs
description: Sealing & Decryption - how data from a contract is returned 
---

# Decryption & Sealing

When an app wants to read some piece of encrypted data from a Fhenix smart contract, that data must be converted from its encrypted form on chain to an encryption that the app can read and the user can decrypt.

There are two ways to return encrypted data to the user:

1. **Sealed Box Encryption**

    The data is returned to the user using [sealed box encryption](https://bitbeans.gitbooks.io/libsodium-net/content/public-key\_cryptography/sealed\_boxes.html) from NaCL. The gist of it is that the user provides a public key to the contract during a view function call, which the contract then uses to encrypt the data in such a way that only the owner of the private key associated with the provided public key can decrypt and read the data.

    From a contract perspective, this is done by using the `FHE.sealoutput` function, which takes the data to be sealed and the public key of the user, and returns an encrypted blob.

    This data can then be decrypted using fhenix.js, or manually by using the caller's private key.

2. **Standard Decryption**

    Alternatively, Fhenix supports standard decryption as well. If some data needs to be decrypted for public access, that can be done as well and a plaintext value is returned to the caller.
    This can be done using the `FHE.decrypt` function.

## Examples

### Sealed Box Encryption

```solidity
import {FHE} from "@fhenixprotocol/contracts";

function sealoutputExample(bytes32 pubkey) public pure returns (bytes memory reencrypted) {
    euint8 memory foo = asEuint8(100);
    return FHE.sealoutput(foo, pubkey);
}
```

### Decryption

```Javascript
import {FHE} from "@fhenixprotocol/contracts";

function sealoutputExample() public pure returns (uint8 decrypted) {
    euint8 memory foo = asEuint8(100);
    return FHE.decrypt(foo);
}
```

You can see full examples of how to use these functions in our [examples and dApps](../Examples%20and%20References/Examples-fheDapps.md) section.
