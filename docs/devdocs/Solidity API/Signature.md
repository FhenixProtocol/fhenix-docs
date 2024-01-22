# Permission Struct

Used to pass both the public key and signature data within transactions

Should be used with Signature-based modifiers for access control

```solidity
struct Permission {
    bytes32 publicKey;
    bytes signature;
}
```
