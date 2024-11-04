---
sidebar_position: 3
title: 👈 Outputs
description: Sealing & Decryption - how data from a contract is returned 
---

# Sealing and Decrypting

When an application reads encrypted data from a Fhenix smart contract, that data must first be converted from its encrypted on-chain form to an encrypted form that the application can read and the user can decrypt.

There are two ways to return encrypted data to the user:

1. **Sealed Box Encryption**

    The data is returned to the user using [sealed box encryption](https://bitbeans.gitbooks.io/libsodium-net/content/public-key\_cryptography/sealed\_boxes.html) from NaCL. The gist of it is that the user provides a public key to the contract during a view function call, which the contract then uses to encrypt the data in such a way that only the owner of the private key associated with the provided public key can decrypt and read the data.

    From a contract perspective, this is done by using the `FHE.sealoutput` (or `.seal`) function, which takes the data to be sealed and the public key of the user, and returns an encrypted blob.

    The encrypted data is then stored in a JSON structure, which is described in a [later section](#metamask-compatability).

    This data can then be decrypted using fhenix.js, manually by using the caller's private key or using Metamask or compatible APIs.

2. **Standard Decryption**

    Alternatively, Fhenix supports standard decryption as well. If some data needs to be decrypted for public access, that can be done as well and a plaintext value is returned to the caller.
    This can be done using the `FHE.decrypt` function.

## Sealed Data Format

:::note
If using `fhenixjs`, parsing the raw sealed data that is returned from sealoutput or seal is unnecessary.
:::

The following JSON structure shows the components of the encrypted data returned by the `seal` function:

```json
{
  "version": "x25519-xsalsa20-poly1305",
  "nonce": "<base64 bytes of a nonce used for encrypted>",
  "ephemPublicKey": "<base64 bytes of the target public key>",
  "ciphertext": "<base64 string of a big-endian number>"
}
```

### Metamask Compatability

The encryption schema and structure match the one used by Metamask's eth_decrypt function. 
This means that we can consume sealed data directly from Metamask, which provides a more engaging experience for a dApp user. 

Fetch an address's public key using the `eth_getEncryptionPublicKey` method, seal the data for that specific public key (either as a permit or by using the public key directly), and then use Metamask's `eth_decrypt` call to provide a guided decryption experience.

:::warning[Warning]
Metamask's `eth_getEncryptionPublicKey` and `eth_decrypt` methods are deprecated. We provide these examples to demonstrate compatibility with native wallet encryption/decryption procedures. We aim to maintain compatibility as new standards emerge for encryption on Ethereum.
:::

## Examples

### Sealed Box Encryption

```solidity
import {FHE} from "@fhenixprotocol/contracts";

function sealoutputExample(bytes32 pubkey) public pure returns (bytes memory reencrypted) {
    euint8 memory foo = asEuint8(100);
    return foo.seal(pubkey);
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

### Metamask Unsealing

```Javascript
async getPub() {
    const provider = new BrowserProvider(window.ethereum);
    const client = new FhenixClient({provider});
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const keyResult = await provider.send('eth_getEncryptionPublicKey',[accounts[0]]);
    const pk = `0x${this.base64ToHex(keyResult)}`;
    this.showNotification(pk);
}
async unseal() {
    const provider = new BrowserProvider(window.ethereum);
    const client = new FhenixClient({provider});
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const result = await provider.send('eth_decrypt', [this.sealedInput, accounts[0]]);
    const plaintext = this.toString(result);
    this.showNotification(`Unsealed result: ${plaintext}`);
}
```

Taken from the [encryption & unsealing tool](https://encrypt.fhenix.zone/)
