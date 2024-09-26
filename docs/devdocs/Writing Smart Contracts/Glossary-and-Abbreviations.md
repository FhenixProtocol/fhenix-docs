---
sidebar_position: 12
title: Glossary of Special Terms and Abbreviations
description: The terms, expressions and abbreviations that appear in the Fhenix documentation have the meaning and significance as defined and explained in this Glossary
---

The terms, expressions and abbreviations that appear in the Fhenix documentation have the meaning and significance as defined and explained in this Glossary. Note that specific terms in this Glossary may have a slightly different meaning and usage than identical or similar terms used in the technical literature of other companies or organizations.

<table>
<tr><th colspan="2"> Supported types </th></tr>
<tr><td>    

| Term/Abbreviation       | Definition |
|------------|----------|
| Abstract contract | In Solidity, an abstract contract is a contract that cannot be directly deployed on the blockchain. It serves as a blueprint for other contracts to inherit its functionalities |
| Ciphertext | Encrypted data |
| EIP-712 | A standard for adding signing capabilities to Ethereum transactions |
| FHE | Fully Homomorphic Encryption |
| Fully deterministic | In a fully deterministic system, the same inputs will always produce the same outputs, making the system reliable and predictable. This is generally considered beneficial for security and consistency. In contrast, if the system is not fully deterministic, there can be variations in the output even with the same input, due to factors like network delays, node failures, or other disruptions |
| Fully Homomorphic Encryption (FHE) | A cryptographic technology that enables processing encrypted data without decrypting it |
| MEV | Maximal Extractable Value |
| Maximal Extractable Value | Maximal Extractable Value (MEV) techniques refer to strategies used by participants in blockchain networks, especially in decentralized finance (DeFi) systems, to extract the maximum possible profit from transaction ordering, inclusion, and exclusion within a block. MEV is essentially the profit that can be made by reordering, including, or excluding transactions in a block |
| NaCL | Networking and Cryptography library |
| Networking and Cryptography library (NaCl) | A public domain, high-speed software library for network communication, encryption, decryption, signatures, etc. developed by Daniel Bernstein |
| Permission | That part of a permit that supplies proof that callers are who they say they are. A permission contains the signature and its corresponding public key. |
| Permissioned contract | A permissioned contract is a sort of blueprint on which developers build to provide the core functionality of access control with EIP-712 signatures. Permissioned contracts lack specific implementations for functions. As such, a permissioned contract is a type of abstract contract |
| Permit | A mechanism that allows the contract to verify cryptographically the identity of callers, ensuring that they are who they claim to be. In Fhenix, a permit is a signed message that contains the caller's public key, which the contract can use to verify the caller |
| Plaintext | Unencrypted data |
| Sealed Box Encryption | A feature of NaCl. The user provides a public key to the contract during a view function call, which the contract then uses to encrypt the data so that only the owner of the private key associated with the provided public key can decrypt it |
| Select function (selector) | A selector is a function that accepts a control and two branches, and returns the result of the branch that corresponds to the condition. A selector operates like a traffic signal that decides which traffic to let through based on the color of the traffic light (control signal). In Fhenix this concept is implemented by calling a select function. The select function accepts a condition and two inputs and returns the input that corresponds to the state of the condition |
| Threshold network | A threshold network requires that a predefined number of nodes must collaborate to successfully decrypt the data |
| Trivial encryption | In the context of Fully Homomorphic Encryption (FHE), trivial encryption refers to a simplified and deterministic form of encryption. Trivial encryption always produces the same ciphertext for a given plaintext. This is in contrast to standard FHE, where the same plaintext encrypted multiple times typically results in different ciphertexts due to the incorporation of random elements for added security. The process is straightforward and involves a direct mapping of plaintext to ciphertext without the complex operations or randomness that characterize normal FHE encryption |