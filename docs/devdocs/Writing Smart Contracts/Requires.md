---
sidebar_position: 5
title: 🚦Require Statements
description: How to perform assertions on Encrypted data
---

# Require Statement

Encrypted require statements (`req`) are analogous to standard Solidity require statements. Given an encrypted Boolean predicate, the statement forces the transaction execution to halt if the predicate evaluates to false. Evaluating the encrypted Boolean predicate implies a (threshold) decryption.

### Example

In the following code, the function failingRequire is intended to revert the transaction if the equality condition between val and val2 is not met.

```Javascript
// A transcation calling this function will revert.
function failingRequire(euint8 a) public {
    euint8 val = FHE.asEuint8(4);
    euint8 val2 = FHE.asEuint8(5);
    FHE.req(FHE.eq(val, val2));
}
```
