---
sidebar_position: 5
title: 🔒 Treshold Network
---

In principle, a Threshold Network is a cryptographic system designed to enhance security and trust by distributing control and decision-making across multiple parties. In such a network, sensitive operations, such as decryption or signing, require collaboration among a subset of participants, rather than relying on a single entity.

## Mechanism

In Fhenix’s Nitrogen testnet, the Threshold Network performs decryption operations. The Threshold Network is currently initialized by a Trusted Dealer (in the future, we plan to eliminate the Trusted Dealer). The Trusted Dealer initially generates a key. Then, the Dealer uses Shamir's Secret Sharing cryptographic algorithm to generate Secret Shares of the key to share among individual members. Each member holds exactly one secret share. To perform a decryption, a Threshold (MPC) Protocol is implemented. The protocol uses a T-out-f-N scheme, meaning that T parties out of a total of N existing parties need to agree and work together to perform a decryption. This mechanism reduces trust assumptions and thereby increases system trustworthiness from the end-users’ perspective. The Threshold Network in Nitrogen requires 3 out of 4 parties to decrypt ciphertexts.

## Authentication

A Test Network authentication mechanism is important to differentiate between valid and invalid (or malicious) decryption requests. The authentication mechanism ensures that no party can decrypt data that is not supposed to be decrypted.
Authentication is currently under development and not yet included in the testnet.  It will be added in future Fhenix versions.

## Threshold Network in Nitrogen 

In Nitrogen, the Threshold Network is used by [Security Zone](todo) 0 (which is the default).
