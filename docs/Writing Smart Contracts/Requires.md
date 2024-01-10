# Requires

Encrypted require statements (`req`) are analogous the usual Solidity `require` statements: given an encrypted boolean predicate `b`, the statement will force the transaction execution to halt if `b` evaluates to false. Evaluating the encrypted boolean predicate implies a (threshold) decryption.

### Examples

```Javascript
// A transcation calling this function will revert.
function failingRequire(euint8 a) public {
    euint8 val = TFHE.asEuint8(4);
    euint8 val2 = TFHE.asEuint8(5);
    TFHE.req(TFHE.eq(val, val2));
}
```