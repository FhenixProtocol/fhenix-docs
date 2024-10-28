---
sidebar_position: 900
title: 💯 Useful Tips
description: Tidbits of wisdom for working with FHE
---

## Trivial Encryption

Casting a plaintext number to an encrypted one in a contract (i.e. `FHE.asEuintX(plaintext_number)`) is called Trivial Encryption. Unlike [normal FHE encryption](../FhenixJS/Encryption.md), trivial encryption is deterministic. This means that if you perform it more than once, the resulting ciphertext will be the same every time.

Despite being obviously weaker than normal FHE encrypted numbers, Trivial Encryption can often be very useful. For example, when you're tallying votes in a contract; the tally for the option "Yes" may be encrypted, but everyone knows that you need to increment it by `1` for every incoming vote. Meaning, you can do `tally = tally + FHE.asEuint32(1)`.

Using trivially encrypted numbers is more efficient and will result in faster and cheaper execution - so it's beneficial to use them whenever possible **while being careful to not compromise your apps's security**.

**Note:** to prevent improper use, Trivial Encryption is only available in contracts.

## Default Value of a Euint

When the `euintx` variable is not initialized, it is considered to be 0. Every FHE function that receives an uninitialized `euintx` assumes that it is `FHE.asEuintX(0)`.

`FHE.asEuintX(0)` is actually used quite often. Fhenix takes this frequent use into consideration and pre-calculates the values of `FHE.asEuintX(0)` during node initialization. Therefore, when `FHE.asEuintX(0)` is used during operation, the pre-calculated values are returned (which saves computing resources and gas).

## Re-encrypting a Value

Re-encrypting a value is sometimes necessary in smart contracts. For example, consider a confidential voting system with four candidates. Each vote increases the respective tally (using FHE addition, which is a cryptographic operation). If one monitors the (public!) database keys representing these tallies, even though a tally value is encrypted, it's enough to notice a change in the value to deduce which option got voted for. One solution is to change all the values, regardless of the vote cast - so anyone monitoring would not be able to tell which option got voted for. But how do we do that?

FHE encryption is non-deterministic, meaning that encrypting the same number twice (using non-trivial encryption) results in two different encrypted outputs. Similarly, a computation on an encrypted number, **even if the computations does not change the underlying plaintext value**, changes the ciphertext. Without decrypting the number, one would not be able to tell if it actually changed or not. We leverage this feature and cryptographically add 0 to all tallies that should not be changed using FHE.add. This operation re-encrypts those values (or - changes the ciphertext), resulting in new encrypted outputs in the database, effectively updating all keys without changing the actual tallies.

Example (simplified pseudo code):
```solidity
// This is bad
t = getTallyToIncrement(userInput);
tallies[t] = FHE.add(tallies[t], FHE.asEuint32(1));

// This is good
for (int i = 0; i < len(tallies); i++) {
    ebool b = toIncrement(userInput, i);
    tallies[t] = FHE.add(tallies[t], b); // if `b` is true, this will translate to `tally + 1`, otherwise `tally + 0`
}
```

## FHE.req()

All `FHE.req` operations are supported in both transactions (TXs) and queries. However, we strongly advise careful consideration before using these operations inside a transaction, because `FHE.req` might expose the value of encrypted data. For example, if we send a transaction and monitor its gas usage, we can likely determine whether a `FHE.req` condition was met and infer much about what the encrypted values represent.

Consider the following code:
```solidity
function f(euint8 a, euint8 b) public {
    FHE.req(a.eq(b));
    // Do some heavy logic
}
```

If `a` and `b` are not equal, the function will fail immediately and consumes much less gas compared to a situation in which `a` and `b` are equal. This means that monitoring gas usage can easily determine whether a and b are equal, potentially leaking confidential information without revealing the actual values.

**Best Practice:** use `FHE.req` only in view functions. For transactions, `FHE.req` logic can be implemented using `FHE.select`. This approach helps preserve confidentiality while achieving the desired functionality.


## FHE.decrypt()

The Fhenix implementation of Fully Homomorphic Encryption (FHE) intends to keep data encrypted throughout its entire lifecycle, while providing the capability to operate on the encrypted data. However, despite the inherent encrypted nature of FHE, there are risks, especially in situations where `FHE.decrypt` is used. To maximize security, consider the following:

### Vulnerability
During the initial development of the Fhenix mainnet (and Fhenix testnet), the decryption process will be performed on a threshold network. Thus, operation may not be fully deterministic (the reason is potential network issues in the early development phase). Given this situation, there is a risk that a malicious node runner can gain direct memory access (DMA) or utilize other means to read a process's memory. Thus, a decrypted value might be viewed during execution and exploited by a malicious actor using Maximal Extractable Value (MEV) techniques. Therefore, it is best to implement best practices.

### Decryption – Best Practice
Follow these guidelines to maintain data security and integrity when using FHE.decrypt:
- **View functions**: Decrypt in view functions only when the data is being accessed for read-only purposes.
- **Transactions**: Decrypt in transactions only when absolutely certain that the data is no longer confidential. For instance, in a poker game application, during the roundup transaction, cards can be revealed without data leakage risk.


## Performance and Gas Usage

Currently, Fhenix supports a large number of FHE operations. Some operations take much time to compute. Good examples of time-intensive operations are: Div (5 seconds for euint32), Mul and  Rem. Time increases depending on the value types being used.
When writing FHE code, Fhenix encourages using operations wisely, especially when choosing which operation to use. 

For example, instead of `ENCRYPTED_UINT_32 * FHE.asEuint32(2)`, it is preferable to use `FHE.shl(ENCRYPTED_UINT_32, FHE.asEuint32(1))`. 
In other cases, `FHE.div(ENCRYPTED_UINT_32, FHE.asEuint32(2))` can be replaced by `FHE.shr(ENCRYPTED_UINT_32, FHE.asEuint32(1))`.

For more detailed benchmarks, refer to: [Gas and Benchmarks](./Gas-and-Benchmarks).

## Randomness

Confidentiality is crucial to achieving on-chain randomness. The Fhenix blockchain puts high priority on confidentiality and is a great space to implement and use on-chain random numbers. In fact, this feature is part of our roadmap. We know that there are some #BUIDLers that already want to implement dApps that leverage both confidentiality and random numbers. So, until we have on-chain true random, we suggest using the following implementation as a mockup.

### Vulnerability

:::danger
The random number generated by the following code is very predictable. Do not use it in production.
:::

```solidity
library RandomMock {
    function getFakeRandom() internal returns (uint256) {
        uint blockNumber = block.number;
        uint256 blockHash = uint256(blockhash(blockNumber));

        return blockHash;
    }

    function getFakeRandomU8() public view returns (euint8) {
        uint8 blockHash = uint8(getFakeRandom());
        return FHE.asEuint8(blockHash);
    }

    function getFakeRandomU16() public view returns (euint16) {
        uint16 blockHash = uint16(getFakeRandom());
        return FHE.asEuint16(blockHash);
    }

    function getFakeRandomU32() public view returns (euint32) {
        uint32 blockHash = uint32(getFakeRandom());
        return FHE.asEuint32(blockHash);
    }
}
```
