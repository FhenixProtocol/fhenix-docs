---
sidebar_position: 5
title: 🚦Require Statements
description: How to perform assertions on Encrypted data
---

# Requires

Encrypted require statements (`req`) are analogous the usual Solidity `require` statements: given an encrypted boolean predicate `b`, the statement will force the transaction execution to halt if `b` evaluates to false. Evaluating the encrypted boolean predicate implies a (threshold) decryption.

### Examples

```Javascript
// A transcation calling this function will revert.
function failingRequire(euint8 a) public {
    euint8 val = FHE.asEuint8(4);
    euint8 val2 = FHE.asEuint8(5);
    FHE.req(FHE.eq(val, val2));
}
```
