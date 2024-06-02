---
sidebar_position: 1
title: 🛑 Limitations
---

## Decryption Key

Decryption key is stored locally on each node - until the addition of a more complete solution which will be a part of 
future versions, the decryption keys are stored by the node for ease of use. This means that (obviously), you shouldn't store any 
real sensitive data or private keys on the testnet. 

## Security

The current iteration of the network does not include multiple components (such as input knowledge proofs, threshold decryption, execution proofs, etc.) that are critical for the security of data and network keys.
These features will be added iteratively as we move towards full release - this should be obvious, but please **do not store any valuable information on the network as long as it is in the testnet phase**.

## Randomness

Randomness as a service is planned as a future addition. Until we can guarantee a secure source of randomness, we do not 
want to make such a function available as a network service. For demos and development that require a source of randomness, we encourage 
the use of external oracles, or usage of a [mock random number generator](../../Writing%20Smart%20Contracts/Useful-Tips.md#randomness).

## Gas Costs

All gas costs are subject to change, and are being evaluated for optimization. The current gas costs are not final, and may change.

## Stability

The network is still in a beta phase, and may be subject to instability. Please do not rely on the network to store your contracts or data forever, or for any period of time.
Expect that we might have to reboot the network and wipe everything on it at any time.

## Integer Bit Sizes

At the moment all integer bit sizes are supported, as well as `eaddress`, a 160-bit size for addresses. However, the instruction set is limited to a subset of operations for performance reasons.
When we move to full public testnet and mainnet we expect to be able to support a wider range of operations. See [Types and Operators](../../Writing Smart Contracts/Types-and-Operators.md) for more information.