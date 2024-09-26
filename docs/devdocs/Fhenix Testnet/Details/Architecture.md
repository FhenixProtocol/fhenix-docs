---
sidebar_position: 2
title: 📐 Fhenix Architecture
---

hello I am yonatan
Our goal with Fhenix is not only to provide the first FHE-based L2 solution, but also to create a platform that is modular, flexible, and can easily be changed, extended or improved as we see
traffic, use-cases and requirements evolve.

The Fhenix Protocol is composed of several components that work together to provide a secure and private environment for smart contracts. The main components are:

* Core Chain (based on Arbitrum Nitro)
* FheOS
* Warp-Drive

These components are layered together to provide a modular approach, that allows for a flexible architecture 

![](/img/fhenix-stack.webp)

### Core Chain

The Core Blockchain is the base layer of the Fhenix Protocol. It is based on Arbitrum Nitro, which is a Layer 2 scaling solution for Ethereum. Arbitrum Nitro is a rollup chain that uses a combination of fraud proofs and optimistic rollups to provide a scalable and secure environment for smart contracts.

The Core Blockchain is responsible for processing transactions, executing smart contracts, and maintaining the state of the blockchain.

### FheOS

FheOS is the heart of the FHE operations. Its goal is to be a modular & extendable component that can plug into the underlying blockchain and provide FHE capabilities to smart contracts. 

It includes the relevant FHE function calls (precompiles), as well as the Solidity functions & ciphertext management that is required to interact with the FHE layer.

### Warp-Drive

Warp-Drive is responsible for managing the FHE keys and the FHE operations. It includes multiple components - key management, FHE operation interfaces, encryption/decryption functions, and more.

The integration of Warp Drive as a separate component creates a separation of responsibilities, where the chain itself does not need to be aware of the FHE operations, nor depend on specific functionality. 
This allows us to support multiple variants of FHE schemes, which can be used by developers according to their specific needs.

Warp Drive includes multiple components, which work together using shared interfaces to be easy to use and extend.

![](/img/warp-drive-schema.webp)

