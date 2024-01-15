---
sidebar_position: 1
title: Overview
description: Comparisons on FHE data 
---

# Overview

There are a few different ways to set up an environment for development on Fhenix. All the tools you know from Solidity are mostly supported, though the addition of FHE means that a few custom tools are needed. Here we'll describe the different ways you can set up your development environment.

For your main deployment (either after your code is ready or if you just want to develop there) you'll probably want to deploy to the public Devnet, which you can do by [connecting to the testnet](../overview/connecting-to-the-devnet.md).&#x20;

We support the following development environments:

Local, Gitpod or Remix based environment.

:::note[Note]
The main developer tools are all based on Javascript & Solidity, but we have open bounties to add support for Python & Vyper!
:::

## Gitpod


## Remix

To get up and running with Remix, all you need is to include the TFHE.sol solidity files to your project so the compiler knows what to do. You can do so by importing FHE.sol from your contract directly -

```javascript
import "@fhenixprotocol/contracts/FHE.sol";
```

We also provide an example contract that can be loaded into Remix, using the "Load From Github"

<img src="../.gitbook/assets/image (1).png" alt="" data-size="original" />

Which is available from [https://github.com/FhenixProtocol/devnet-contracts/blob/main/EncryptedERC20.sol](https://github.com/FhenixProtocol/devnet-contracts/blob/main/EncryptedERC20.sol).

To connect Remix to Fhenix testnet, you can use the injected provider option after [adding to Metamask](../overview/connecting-to-the-devnet.md).

Remix can also be connected to Hardhat and LocalFhenix, though the scope of that is beyond what I feel like writing now :smile:.

### Remix Plugin
