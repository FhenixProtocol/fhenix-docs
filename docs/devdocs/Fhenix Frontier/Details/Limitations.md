---
sidebar_position: 1
title: 🛑 Limitations
---

## Decryption Key

Decryption key is stored locally on the machine - until the addition of a key management system which will be a part of 
future versions, the decryption keys are stored locally on the node. This means that (obviously), you shouldn't store any 
real sensitive data or private keys on the testnet. 

## Security

The current iteration of the network does not include multiple components (such as input knowledge proofs, threshold decryption, execution proofs, etc.) that are critical for the security of data and network keys.
These features will be added iteratively as we move towards full release.

## Randomness

Randomness as a service is planned as a future addition. Until we can guarantee a secure source of randomness, we do not 
want to make such a function available as a network service. For demos and development that require a source of randomness, we encourage 
the use of external oracles, or usage of a [mock random number generator](../../Writing%20Smart%20Contracts/Useful-Tips.md#randomness).

## Gas Costs

All gas costs are subject to change, and are being evalutated for optimization. The current gas costs are not final, and may change.

## L1 and Bridging

Interacting with the L1 is not available in the current iteration of the network for the Denver Hackathon. This is expected to be included in the full testnet release.

Currently, the network runs on a private L1 and not on a publicly available Ethereum testnet.

## Stability

The network is still in a beta phase, and may be subject to instability. Please do not rely on the network to store your contracts or data forever, or for any period of time.
Expect that we might have to reboot the network and wipe everything on it at any time.

## Integer Bit Sizes

At the moment, only 8, 16, 32, bit integers are supported. When we move to full public testnet, this will be expanded to include larger bit sizes.