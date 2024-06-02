---
sidebar_position: 3
title: 🔐 Encryption Schema
---

In this section we will describe the encryption schema used in Fhenix. While the network itself is Schema agnostic - i.e. it can support any encryption schema - the current default schema is TFHE.

## FHE over the Torus (TFHE)

FHE over the Torus (TFHE) represents an advanced FHE method that offers notable improvements over traditional FHE technologies.

Blockchains basically deal with integer operations, whether handling large volumes of cryptocurrency transactions, managing smart contract states, or updating block indices. All these essential operations are based on integers. TFHE's efficient processing of computations is performed on integers in their encrypted form and thus provides significant added value.

Furthermore, most blockchains operate on a consensus mechanism that involves numerous complex integer-based computations. TFHE's ability to handle these operations quickly and efficiently increases overall blockchain performance and reduces computational bottlenecks. The benefit of this efficiency becomes even more crucial as blockchains scale, resulting in increased transaction volume and smart contract complexity.

TFHE offers an excellent, viable encryption solution for maintaining privacy and optimizing performance of blockchain technologies.

### Cheon-Kim-Kim-Song (CKKS)

The Cheon-Kim-Kim-Song (CKKS) encryption scheme is specially tailored for handling arithmetic on complex numbers, making it uniquely suited for applications requiring calculations on fractional numbers or dealing with large datasets that include non-integer values. This makes CKKS an excellent choice for blockchain applications that need to process statistical data or perform financial calculations involving decimals, such as automated pricing models or complex financial derivatives within smart contracts.

CKKS allows for approximate arithmetic on encrypted data, which can be a significant advantage when exact precision is not critical but speed and efficiency are. In the context of blockchains, this means that CKKS can be used to efficiently perform encrypted calculations on transaction amounts, exchange rates, and other financial metrics without decrypting them, thus preserving privacy while ensuring that the blockchain operates swiftly and scales effectively.

### Brakerski-Gentry-Vaikuntanathan (BGV)

The Brakerski-Gentry-Vaikuntanathan (BGV) scheme is known for its robustness and the ability to perform modular arithmetic operations on encrypted integers. BGV supports both addition and multiplication of ciphertexts, making it well-suited for blockchain technologies that depend heavily on these operations, such as calculating transaction hashes or validating complex smart contracts.

BGV also benefits from optimizations that can be tailored to specific blockchain requirements, enhancing performance and scalability. For instance, its use of polynomial rings can be adapted to improve efficiency, making it a robust solution for high-throughput environments. As blockchain networks grow and transaction volumes increase, BGV's ability to handle intensive computations efficiently helps maintain overall performance and reduces computational bottlenecks.