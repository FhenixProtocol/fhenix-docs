# Useful Tips

This section will list some useful tips and good practices for you to be able to use them.

#### Trivial Encryption

When we are using `FHE.asEuint*(PLAINTEXT_NUMBER)` we are actually using a trivial encryption of our FHE scheme. Unlike normal FHE encryption trivial encryption is a deterministic encryption. The meaning is that if you will do it twice you will still get the same result

#### Default Value of a Euint

When having a `euint*` variable uninitialized it will be considered as 0. Every FHE function that will receive an uninitialized euint* will assume it is `FHE.asEuint*(0)`.
You can assume now that `FHE.asEuint*(0)`is used quite often - Luckily we realized this and decided to have the values of`FHE.asEuint*(0)`pre-calculated on node initialization so when you use`FHE.asEuint\*(0)` we will just return those values.

#### Re-encrypting a Value

To explain this tip we will use an example. Let's assume we want to develop a confidential voting and let's say we have 4 candidates.
Assuming that on each vote we increase (cryptographically with FHE.add) the tally, one can just monitor the key in the DB that represents this specific tally and once the key was changes he will know who we voted for.
An ideal solution for this issue is to change all keys no matter who we voted for, but how?!

In order to understand how we will first need to understand that FHE encryption is a non-deterministic encryption means that encrypting (non-trivial encryption) a number twice will result with 2 different encrypted outputs.

Now that we know that, we can add 0 (cryptographically with FHE.add) to all of those tallies that shouldn't be changed and they will be changed in the DB!

#### FHE.req() in TXs

All of the operations are supported both in TXs and in Queries. That being said we strongly advise to think twice before you use those operations inside a TX. FHE.req() is actually exposing the value of your encrypted data. Assuming we will send the transaction and monitor the gas usage we can probably identify whether the FHE.req() condition met or not and understand a lot about what the encrypted values represent.

#### Performance and Gas Usage

Currently we support many FHE operations. Some of them might take a lot of time to compute, some good examples are: Div (5 seconds for euint32), Mul, Rem, and the time will grow depends on the value types you are using.

When writing FHE code we encourage you to use the operations wisely and choose what operation should be used.
Example: Instead of `FHE.mul(ENCRYPTED_UINT_32, FHE.asEuint32(2))` you can use `FHE.shl(ENCRYPTED_UINT_32, FHE.asEuint32(1))` in some cases `FHE.div(ENCRYPTED_UINT_32, FHE.asEuint32(2))` can be replaced by `FHE.shr(ENCRYPTED_UINT_32, FHE.asEuint32(1))`

For more detailed benchmarks please refer to: TBD
