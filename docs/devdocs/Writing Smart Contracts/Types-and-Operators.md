# Supported Types and Operations

The library exposes utility functions for FHE operations. The goal of the library is to provide a seamless developer experience for writing smart contracts that can operate on confidential data.

## Types

The library provides a type system that is checked both at compile time and at run time. The structure and operations related to these types are described in this sections.

We currently support encrypted integers of bit length up to 32 bits.

These encrypted integers behave as much as possible as Solidity's integer types. However, behaviour such as "revert on overflow" is not supported as this would leak some information of the encrypted integers. Therefore, arithmetic on `euint` types is [unchecked](https://docs.soliditylang.org/en/latest/control-structures.html#checked-or-unchecked-arithmetic), i.e. there is wrap-around on overlow.

In the back-end, encrypted integers are FHE ciphertexts. The library abstracts away the ciphertexts and presents pointers to ciphertexts, or ciphertext handles, to the smart contract developer. The `euint` types are _wrappers_ over these handles.

| name    | Bit Size | 
|---------|----------|
| euint8  | 8        |
| euint16 | 16       |
| euint32 | 32       |

## Operations

Fhenix exposes utility functions for operations on FHE ciphertexts. The list of supported operations is presented below.

| name                  | FHE.sol function | Operator |
|-----------------------|------------------|----------|
| Addition              | add              | +        |
| Subtraction           | sub              | -        |
| Multiplication        | mul              | *        |
| Bitwise And           | and              | &        |
| Bitwise Or            | or               | \|       |
| Bitwise Xor           | xor              | ^        |
| Shift Right           | shr              | &gt;&gt; |
| Shift Left            | shl              | &lt;&lt; |
| Equal                 | eq               | n/a      |
| Not equal             | ne               | n/a      |
| Greater than or equal | gte              | n/a      |
| Greater than          | gt               | n/a      |
| Less than or equal    | lte              | n/a      |
| Less than             | lt               | n/a      |
| Min                   | min              | n/a      |
| Max                   | max              | n/a      |
| Negative              | neg              | n/a      |
| Not                   | not              | n/a      |

