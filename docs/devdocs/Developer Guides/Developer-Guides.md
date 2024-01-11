# Developer Guides

Here we'll explain everything about how to use Fhenix and how to use FHE to create privacy-preserving Web3 applications. We include an extension to the Ethereum Virtual Machine (EVM) that introduces operations on encrypted data using Fully Homomorphic Encryption (FHE). We've added special precompiles to the EVM that allow computations on encrypted data without the need for decryption.

> Did You Know? Fhenix uses a special type of FHE called TFHE (FHE over the Torus) that is especially suited for Blockchain. We may use TFHE and FHE interchangeably
>


The integration of the FHE with Solidity means you can continue to write your smart contracts with familiar syntax while leveraging the capabilities of FHE.

In this documentation, you'll find guidance on operating on encrypted data, understanding patterns in FHE-friendly code writing, and access control in FHE-based smart contracts. Let's get started.