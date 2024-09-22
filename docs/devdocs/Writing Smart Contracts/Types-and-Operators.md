---
sidebar_position: 100
title: 🧑‍⚕️ Types and Operations
description: List of supported types and different operations
---

# Supported Types and Operations

The library exposes utility functions for FHE operations. The goal of the library is to provide a seamless developer experience for writing smart contracts that can operate on confidential data.

## Types

The library provides a type system that is checked both at compile time and at run time. The structure and operations related to these types are described in this sections.

We currently support encrypted integers of bit length up to 256 bits and special types such as `ebool` and `eaddress`.

The encrypted integers behave as much as possible as Solidity's integer types. However, behaviour such as "revert on overflow" is not supported as this would leak some information of the encrypted integers. Therefore, arithmetic on `euint` types is [unchecked](https://docs.soliditylang.org/en/latest/control-structures.html#checked-or-unchecked-arithmetic), i.e. there is wrap-around on overlow.

In the back-end, encrypted integers are FHE ciphertexts. The library abstracts away the ciphertexts and presents pointers to ciphertexts, or ciphertext handles, to the smart contract developer. The `euint`, `ebool` and `eaddress` types are _wrappers_ over these handles.
<table>
<tr><th colspan="2"> Supported types </th></tr>
<tr><td>    

| name     | Bit Size | Usage   |
|----------|----------| ------- |
| euint8   | 8        | Compute |
| euint16  | 16       | Compute |
| euint32  | 32       | Compute |
| euint64  | 64       | Compute |
| euint128 | 128      | Compute |
| euint256 | 256      | Compute |
| ebool    | 8        | Compute |
| eaddress | 160      | Compute |
</td><td>    

| name       | Bit Size | Usage   |
|------------|----------| ------- |
| inEuint8   | 8        | Input   |
| inEuint16  | 16       | Input   |
| inEuint32  | 32       | Input   |
| inEuint64  | 64       | Input   |
| inEuint128 | 128      | Input   |
| inEuint256 | 256      | Input   |
| inEbool    | 8        | Input   |
| inEaddress | 160      | Input   |
</td></tr> </table>

## Operations

There are three ways to perform operations with FHE.sol:

### Using Direct Function Calls

Direct function calls are the most straightforward way to perform operations with FHE.sol. For example, if you want to add two encrypted 8-bit integers (euint8), you can do so as follows:

```javascript
euint8 result = FHE.add(lhs, rhs);
```

Here, lhs and rhs are your euint8 variables, and result will store the outcome of the addition.

### Using Library Bindings

FHE.sol also provides library bindings, allowing for a more natural syntax. To use this, you first need to include the library for your specific data type. For euint8, the usage would look like this:

```javascript
euint8 result = lhs.add(rhs);
```

In this example, lhs.add(rhs) performs the addition, using the library function implicitly.

### Utilizing Operator Overloading

For an even more intuitive approach, FHE.sol supports operator overloading. This means you can use standard arithmetic operators like +, -, \*, etc., directly on encrypted types. Here's how you can use it for adding two euint8 values:

```javascript
euint8 result = lhs + rhs;
```

With operator overloading, lhs + rhs performs the addition seamlessly.

## Comparisons

Unlike other operations in FHE.sol, comparison operations do not support their respective operators (e.g. `>`, `<` etc.).
This is because solidity expects these operators to return a boolean value, which is not possible with FHE.
Intuitively, this is because returning a boolean value would leak information about the encrypted data.

Instead, comparison operations are implemented as functions that return an `ebool` type.

:::tip
The `ebool` type is not a real boolean type. It is implemented as a `euint8`
:::

## Supported Operations


:::tip
A documented documentation of each and every function in FHE.sol (including inputs and outputs) can be found in [FHE.sol](../Solidity%20API/FHE.md)
:::

All operations supported by FHE.sol are listed in the table below. For performance reasons, not all operations are supported for all types.

Please refer to the table below for a comprehensive list of supported operations. This list will evolve as the network matures.

Note that all functions are supported in both direct function calls and library bindings. However, operator overloading is only supported for the operations listed in the table (solidity please support operator overloading for boolean return types!).

<style>
r { color: Red }
o { color: Orange }
g { color: Green }
</style>

| Name                  | FHE.sol function | Operator | euint8 | euint16 | euint32 | euint64 | euint128 | euint256 | ebool | eaddress |
|-----------------------|------------------|:--------:|:------:|:-------:|:-------:|:-------:|:--------:|:--------:|:-----:|:--------:|
| Addition              | add              |    +     |  <g>✔  |  <g>✔   |  <g>✔   |  <g>✔   |   <g>✔   |   n/a    |  n/a  |   n/a    |
| Subtraction           | sub              |    -     |  <g>✔  |  <g>✔   |  <g>✔   |  <g>✔   |   <g>✔   |   n/a    |  n/a  |   n/a    |
| Multiplication        | mul              |    \*    |  <g>✔  |  <g>✔   |  <g>✔   |  <g>✔   |   <r>✘   |   n/a    |  n/a  |   n/a    |
| Bitwise And           | and              |    &     |  <g>✔  |  <g>✔   |  <g>✔   |  <g>✔   |   <g>✔   |   n/a    | <g>✔  |   n/a    |
| Bitwise Or            | or               |    \|    |  <g>✔  |  <g>✔   |  <g>✔   |  <g>✔   |   <g>✔   |   n/a    | <g>✔  |   n/a    |
| Bitwise Xor           | xor              |    ^     |  <g>✔  |  <g>✔   |  <g>✔   |  <g>✔   |   <g>✔   |   n/a    | <g>✔  |   n/a    |
| Division              | div              |    /     |  <g>✔  |  <g>✔   |  <g>✔   |  <r>✘   |   <r>✘   |   n/a    |  n/a  |   n/a    |
| Remainder             | rem              |    %     |  <g>✔  |  <g>✔   |  <g>✔   |  <r>✘   |   <r>✘   |   n/a    |  n/a  |   n/a    |
| Shift Right           | shr              |   n/a    |  <g>✔  |  <g>✔   |  <g>✔   |  <g>✔   |   <g>✔   |   n/a    |  n/a  |   n/a    |
| Shift Left            | shl              |   n/a    |  <g>✔  |  <g>✔   |  <g>✔   |  <g>✔   |   <g>✔   |   n/a    |  n/a  |   n/a    |
| Equal                 | eq               |   n/a    |  <g>✔  |  <g>✔   |  <g>✔   |  <g>✔   |   <g>✔   |   <g>✔   | <g>✔  |   <g>✔   |
| Not equal             | ne               |   n/a    |  <g>✔  |  <g>✔   |  <g>✔   |  <g>✔   |   <g>✔   |   <g>✔   | <g>✔  |   <g>✔   |
| Greater than or equal | gte              |   n/a    |  <g>✔  |  <g>✔   |  <g>✔   |  <g>✔   |   <g>✔   |   n/a    |  n/a  |   n/a    |
| Greater than          | gt               |   n/a    |  <g>✔  |  <g>✔   |  <g>✔   |  <g>✔   |   <g>✔   |   n/a    |  n/a  |   n/a    |
| Less than or equal    | lte              |   n/a    |  <g>✔  |  <g>✔   |  <g>✔   |  <g>✔   |   <g>✔   |   n/a    |  n/a  |   n/a    |
| Less than             | lt               |   n/a    |  <g>✔  |  <g>✔   |  <g>✔   |  <g>✔   |   <g>✔   |   n/a    |  n/a  |   n/a    |
| Min                   | min              |   n/a    |  <g>✔  |  <g>✔   |  <g>✔   |  <g>✔   |   <g>✔   |   n/a    |  n/a  |   n/a    |
| Max                   | max              |   n/a    |  <g>✔  |  <g>✔   |  <g>✔   |  <g>✔   |   <g>✔   |   n/a    |  n/a  |   n/a    |
| Not                   | not              |   n/a    |  <g>✔  |  <g>✔   |  <g>✔   |  <g>✔   |   <g>✔   |   n/a    | <g>✔  |   n/a    |
| Select                | select           |   n/a    |  <g>✔  |  <g>✔   |  <g>✔   |  <g>✔   |   <g>✔   |   <g>✔   | <g>✔  |   <g>✔   |
| Require               | req              |   n/a    |  <g>✔  |  <g>✔   |  <g>✔   |  <g>✔   |   <g>✔   |   <g>✔   | <g>✔  |   <g>✔   |
| Decrypt               | decrypt          |   n/a    |  <g>✔  |  <g>✔   |  <g>✔   |  <g>✔   |   <g>✔   |   <g>✔   | <g>✔  |   <g>✔   |
| Seal Output           | sealOutput       |   n/a    |  <g>✔  |  <g>✔   |  <g>✔   |  <g>✔   |   <g>✔   |   <g>✔   | <g>✔  |   <g>✔   |

:::danger
At the moment it is not possible to do `ebool result = (lhs == rhs)` and others that return a boolean result. This is because FHE.sol expects a `ebool`, while Solidity only allows overloading to return a regular boolean.
Instead, we recommend `ebool result = lhs.eq(rhs)`.
:::

:::danger
Using require and decrypt in a TX is dangerous as it can break the confidentiality of the data. Please refer to [Useful-Tips](./Useful-Tips.md) to read some more
:::

:::tip
Division and Remainder by `0` will output with an encrypted representation of the maximal value of the uint that is used (Ex. encrypted 255 for euint8)
:::