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

## Sealed Data Format

If you are using `fhenixjs`, you don't have to worry about parsing the raw sealed data that is returned from `sealoutput` or `seal`.

However, developers have the option to unseal this data manually. As we described above, the data is encrypted using [sealed box encryption](https://bitbeans.gitbooks.io/libsodium-net/content/public-key\_cryptography/sealed\_boxes.html).

The data itself is encoded in the following format:

```json
{
  "version": "x25519-xsalsa20-poly1305",
  "nonce": "<base64 bytes of a nonce used for encrypted>",
  "ephemPublicKey": "<base64 bytes of the target public key>",
  "ciphertext": "<base64 string of a big-endian number>"
}
```

### Metamask Compatability

The encryption schema and structure matches the one used by Metamask's [`eth_decrypt`](https://docs.metamask.io/wallet/reference/eth_decrypt/) function. This means that we can consume sealed data 
directly from metamask, which can provide a more engaging experience for the user of a dApp - You can fetch an address's public key using the `eth_getencryptionpublickey` method,
and seal data for that specific public key (either as a permit or by using the public key directly), and then use Metamask's `eth_decrypt` call to provided a
guided decryption experience.

:::danger[Warning]
Metamask's `eth_getencryptionpublickey` and `eth_decrypt` methods are deprecated. We provide this compatability to demonstrate compatability with native wallet encryption/decryption.
We aim to maintain compatability as new standards for Encryption on Ethereum emerge 
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

Taken from the [encryption & unsealing tool](https://github.com/FhenixProtocol/fhenix-enc-tool/blob/master/src/App.vue)
