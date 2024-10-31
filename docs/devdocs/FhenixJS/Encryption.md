---
sidebar_position: 2
---

# Encryption

fhenix.js provides an easy-to-use function to encrypt your inputs before sending them to the Fhenix blockchain.

:::tip
Encryption in Fhenix is done using the global chain key. This key is loaded when you create a fhenix.js client automatically
:::

When we perform encryption, we specify the type of `euint` (Encrypted Integer) we want to create. This should match the expected type in the Solidity contract we are working with.

First, initialize the library:

```Typescript
import { FhenixClient } from 'fhenixjs';
import { BrowserProvider } from "ethers";

const provider = new BrowserProvider(window.ethereum);

const client = new FhenixClient({provider});
```
Then, you can use the created client to encrypt

```Typescript

import { FhenixClient, EncryptedType, EncryptedUint8 } from 'fhenixjs';

let result: EncryptedUint8 = await client.encrypt(number, EncryptionTypes.uint8);
let result: EncryptedUint16 = await client.encrypt(number, EncryptionTypes.uint16);
let result: EncryptedUint32 = await client.encrypt(number, EncryptionTypes.uint32);
let result: EncryptedUint64 = await client.encrypt(number, EncryptionTypes.uint64);
let result: EncryptedUint128 = await client.encrypt(number, EncryptionTypes.uint128);
let result: EncryptedUint256 = await client.encrypt(number, EncryptionTypes.uint256);
let result: EncryptedAddress = await client.encrypt(address, EncryptionTypes.address);

```

Or, we can use the lower-level type specific functions

```javascript
const resultUint8 = await client.encrypt_uint8(number);
const resultUint16 = await client.encrypt_uint16(number);
const resultUint32 = await client.encrypt_uint32(number);
const resultUint64 = await client.encrypt_uint64(number);
const resultUint128 = await client.encrypt_uint128(number);
const resultUint256 = await client.encrypt_uint256(number);
const resultAddress = await client.encrypt_address(address);
```

The returned types from the encrypt function will be of the type `EncryptedUint8`, `EncryptedUint16` or `EncryptedUint32` (or 64/128/256 etc.) depending on the type you specified.

The `EncryptedUint` types sound scary, but are actually pretty simple. It's just a

```typescript
export interface EncryptedNumber {
  data: Uint8Array;
  securityZone: number; // defaults to 0
}

export interface EncryptedUint8 extends EncryptedNumber {}
```

These types exist in order to enable type checking when interacting with Solidity contracts, and to make it easier to work with encrypted data.
However, feel free to use the `data` field directly if you prefer.
