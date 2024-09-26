---
sidebar_position: 100
title: 🧑‍⚕️ Types and Operations
description: List of supported types and different operations
---

# Supported Types and Operations

The Fhenix library provides utility functions for implementing FHE operations. The intention is to provide a seamless developer experience for writing smart contracts that can operate on confidential data.

## Types

The library provides a type system that is checked both at compile time and at run time. Fhenix currently supports encrypted integers up to 256 bits and special types such as `ebool` and `eaddress`.

The encrypted integers behave as closely as possible to Solidity's integer types. However, behavior such as "revert on overflow" is not supported as this would leak some information about the encrypted integers. Therefore, arithmetic performed on `euint` types is unchecked, meaning there is wrap-around on overflow. In other words, if a calculation exceeds the maximum value that can be stored, it will start again from the minimum value, and vice versa.

In the backend, encrypted integers are FHE ciphertexts. The library abstracts away the ciphertexts and presents pointers to ciphertexts, or ciphertext handles, to the smart contract developer. The `euint`, `ebool` and `eaddress` types are wrappers over these handles.
<table>
<tr><th colspan="2"> Supported types </th></tr>
<tr><td>    

| name       | Bit Size | Usage   |
|------------|----------| ------- |
| `euint8`   | 8        | Compute |
| `euint16`  | 16       | Compute |
| `euint32`  | 32       | Compute |
| `euint64`  | 64       | Compute |
| `euint128` | 128      | Compute |
| `euint256` | 256      | Compute |
| `ebool`    | 8        | Compute |
| `eaddress` | 160      | Compute |
</td><td>    

| name         | Bit Size | Usage   |
|--------------|----------| ------- |
| `inEuint8`   | 8        | Input   |
| `inEuint16`  | 16       | Input   |
| `inEuint32`  | 32       | Input   |
| `inEuint64`  | 64       | Input   |
| `inEuint128` | 128      | Input   |
| `inEuint256` | 256      | Input   |
| `inEbool`    | 8        | Input   |
| `inEaddress` | 160      | Input   |
</td></tr> </table>

## Operations

There are three ways to perform operations with FHE.sol:

### Using Direct Function Calls

Direct function calls are the most straightforward way to perform operations with FHE.sol. For example, to add two encrypted 8-bit integers (euint8), do the following:

```javascript
euint8 result = FHE.add(lhs, rhs);
```

Here, lhs and rhs are the relevant euint8 variables, and the result will store the outcome of the addition.

### Using Library Bindings

FHE.sol also provides library bindings, allowing for a more natural syntax. To use library bindings, include the library for your specific data type. For euint8, the syntax would be as follows:

```javascript
euint8 result = lhs.add(rhs);
```

In this example, lhs.add(rhs) implicitly performs the addition using the library function.

### Utilizing Operator Overloading

For an even more intuitive approach, FHE.sol supports operator overloading. This means you can use standard arithmetic operators such as `+`, `-`, `*`, etc., directly on encrypted types. The following snippet shows how to add two `euint8` values:

```javascript
euint8 result = lhs + rhs;
```

Operator overloading enables the addition of lhs + rhs to be seamlessly performed.

## Comparisons

Unlike other operations in FHE.sol, comparison operations do not support their respective operators (e.g., `>`, `<`, etc.). The reason is that Solidity expects these operators to return a Boolean value, which is not possible with FHE (because returning a Boolean value would leak information about the encrypted data).

Instead, comparison operations are implemented as functions that return an `ebool` type.

:::tip
The `ebool` type is not a real boolean type. It is implemented as a `euint8`
:::

## Supported Operations


:::tip
Documentation of all FHE.sol functions (including inputs and outputs) can be found in [FHE.sol](../Solidity%20API/FHE.md).
:::

A comprehensive list of operations supported by FHE.sol are listed in the table below. For performance reasons, not all operations are supported for all types. This list will evolve as the Fhenix network matures.

Note that all functions are supported in both direct function calls and library bindings. However, operator overloading is only supported for the operations listed in the table (We are requesting that Solidity support operator overloading for Boolean return types!).



| Name                  | FHE.sol function  | Operator  |  euint8  | euint16  | euint32  |  euint64  |  euint128   |   euint256    |  ebool   |  eaddress   |
|-----------------------|-------------------|:---------:|:--------:|:--------:|:--------:|:---------:|:-----------:|:-------------:|:--------:|:-----------:|
| Addition              | `add`             |    `+`    | <g>✔</g> | <g>✔</g> | <g>✔</g> | <g>✔</g>  |  <g>✔</g>   |   <r>✘</r>    |   n/a    |     n/a     |
| Subtraction           | `sub`             |    `-`    | <g>✔</g> | <g>✔</g> | <g>✔</g> | <g>✔</g>  |  <g>✔</g>   |   <r>✘</r>    |   n/a    |     n/a     |
| Multiplication        | `mul`             |    `*`    | <g>✔</g> | <g>✔</g> | <g>✔</g> | <g>✔</g>  |  <r>✘</r>   |   <r>✘</r>    |   n/a    |     n/a     |
| Bitwise And           | `and`             |    `&`    | <g>✔</g> | <g>✔</g> | <g>✔</g> | <g>✔</g>  |  <g>✔</g>   |   <r>✘</r>    | <g>✔</g> |     n/a     |
| Bitwise Or            | `or`              |   `\|`    | <g>✔</g> | <g>✔</g> | <g>✔</g> | <g>✔</g>  |  <g>✔</g>   |   <r>✘</r>    | <g>✔</g> |     n/a     |
| Bitwise Xor           | `xor`             |    `^`    | <g>✔</g> | <g>✔</g> | <g>✔</g> | <g>✔</g>  |  <g>✔</g>   |   <r>✘</r>    | <g>✔</g> |     n/a     |
| Division              | `div`             |    `/`    | <g>✔</g> | <g>✔</g> | <g>✔</g> | <r>✘</r>  |  <r>✘</r>   |   <r>✘</r>    |   n/a    |     n/a     |
| Remainder             | `rem`             |    `%`    | <g>✔</g> | <g>✔</g> | <g>✔</g> | <r>✘</r>  |  <r>✘</r>   |   <r>✘</r>    |   n/a    |     n/a     |
| Shift Right           | `shr`             |    n/a    | <g>✔</g> | <g>✔</g> | <g>✔</g> | <g>✔</g>  |  <g>✔</g>   |   <r>✘</r>    |   n/a    |     n/a     |
| Shift Left            | `shl`             |    n/a    | <g>✔</g> | <g>✔</g> | <g>✔</g> | <g>✔</g>  |  <g>✔</g>   |   <r>✘</r>    |   n/a    |     n/a     |
| Equal                 | `eq`              |    n/a    | <g>✔</g> | <g>✔</g> | <g>✔</g> | <g>✔</g>  |  <g>✔</g>   |   <g>✔</g>    | <g>✔</g> |  <g>✔</g>   |
| Not equal             | `ne`              |    n/a    | <g>✔</g> | <g>✔</g> | <g>✔</g> | <g>✔</g>  |  <g>✔</g>   |   <g>✔</g>    | <g>✔</g> |  <g>✔</g>   |
| Greater than or equal | `gte`             |    n/a    | <g>✔</g> | <g>✔</g> | <g>✔</g> | <g>✔</g>  |  <g>✔</g>   |   <r>✘</r>    |   n/a    |     n/a     |
| Greater than          | `gt`              |    n/a    | <g>✔</g> | <g>✔</g> | <g>✔</g> | <g>✔</g>  |  <g>✔</g>   |   <r>✘</r>    |   n/a    |     n/a     |
| Less than or equal    | `lte`             |    n/a    | <g>✔</g> | <g>✔</g> | <g>✔</g> | <g>✔</g>  |  <g>✔</g>   |   <r>✘</r>    |   n/a    |     n/a     |
| Less than             | `lt`              |    n/a    | <g>✔</g> | <g>✔</g> | <g>✔</g> | <g>✔</g>  |  <g>✔</g>   |   <r>✘</r>    |   n/a    |     n/a     |
| Min                   | `min`             |    n/a    | <g>✔</g> | <g>✔</g> | <g>✔</g> | <g>✔</g>  |  <g>✔</g>   |   <r>✘</r>    |   n/a    |     n/a     |
| Max                   | `max`             |    n/a    | <g>✔</g> | <g>✔</g> | <g>✔</g> | <g>✔</g>  |  <g>✔</g>   |   <r>✘</r>    |   n/a    |     n/a     |
| Not                   | `not`             |    n/a    | <g>✔</g> | <g>✔</g> | <g>✔</g> | <g>✔</g>  |  <g>✔</g>   |   <r>✘</r>    | <g>✔</g> |     n/a     |
| Select                | `select`          |    n/a    | <g>✔</g> | <g>✔</g> | <g>✔</g> | <g>✔</g>  |  <g>✔</g>   |   <g>✔</g>    | <g>✔</g> |  <g>✔</g>   |
| Require               | `req`             |    n/a    | <g>✔</g> | <g>✔</g> | <g>✔</g> | <g>✔</g>  |  <g>✔</g>   |   <g>✔</g>    | <g>✔</g> |  <g>✔</g>   |
| Decrypt               | `decrypt`         |    n/a    | <g>✔</g> | <g>✔</g> | <g>✔</g> | <g>✔</g>  |  <g>✔</g>   |   <g>✔</g>    | <g>✔</g> |  <g>✔</g>   |
| Seal Output           | `sealOutput`      |    n/a    | <g>✔</g> | <g>✔</g> | <g>✔</g> | <g>✔</g>  |  <g>✔</g>   |   <g>✔</g>    | <g>✔</g> |  <g>✔</g>   |

:::danger[Caveat]
As mentioned, it is currently not possible to perform `ebool result = (lhs == rhs)` and other operations that return a Boolean result. This is because FHE.sol expects `ebool`, while Solidity only allows overloading to return a regular Boolean. Instead, we recommend `ebool result = lhs.eq(rhs)`.
:::

:::Vulnerability
Using require and decrypt in a transaction (TX) involves risk as data confidentiality can be compromised. Please refer to [Useful-Tips](./Useful-Tips.md) for more on privacy issues.
:::

:::tip
Dividing by `0` produces a result that is an encrypted version of the maximum value for the given uint type (e.g., encrypted 255 for `euint8`).
:::