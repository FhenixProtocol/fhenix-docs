---
sidebar_position: 3
title: 🤲 3rd party Integrations
---

Are you a developer looking to integrate Fhenix into your project, or support Fhenix with your app? This section is for you!

## Things to Know

### APIs, RPCs and general compatibility

Fhenix is based on Arbitrum, with the Nitrogen Testnet based on Arbitrum Nitro version 3.2.0 (ArbOS 31). This means that everything that is natively supported
by Arbitrum Nitro is also supported by Fhenix (rpc calls, ABI, etc).

Please refer to the [Arbitrum documentation](https://docs.arbitrum.io/build-decentralized-apps/arbitrum-vs-ethereum/comparison-overview) for more information and specifics.

### EVM Compatibility

Fhenix is fully EVM compatible, up to and including the Cancun Upgrade.
This means that any contract that runs on Ethereum should run on Fhenix as well. We support Solidity compiler 0.8.26.

### Public Endpoints

We have public endpoints available for the Nitrogen Testnet, which can be used:

<table>
   <thead>
      <tr>
         <th width="222">Type</th>
         <th>API</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>JSON-RPC</td>
         <td><a href="https://api.nitrogen.fhenix.zone"><strong>https://api.nitrogen.fhenix.zone</strong></a></td>
      </tr>
      <tr>
         <td>Chain ID</td>
         <td>8008148</td>
      </tr>
      <tr>
         <td>Websocket</td>
         <td>wss://api.nitrogen.fhenix.zone:8548</td>
      </tr>
   </tbody>
</table>

If you require specialized endpoints, or higher rate limits than the default please reach out to us on [Discord](https://discord.gg/FuVgxrvJMY) or [email](mailto://info@fhenix.io).

## Cross Chain Messaging Contracts

The following contracts are deployed on Ethereum Sepolia and may be used by developers that wish to interact with Fhenix in a similar way to Arbitrum

<table>
    <tr>
        <td>
            Delayed Inbox
        </td>
        <td>
            0xf993E10C83Fe26DddFc6cb5E82444C44201e8a9C
        </td>
    </tr>
    <tr>
        <td>
            Bridge
        </td>
        <td>
            0xBAE4d0f2b685452450bfC29a920A82e1DBdcFdD1
        </td>
    </tr>
    <tr>
        <td>
            Outbox
        </td>
        <td>
            0x2635a570f9ae308618D0A340DCd1118fBF73B2E8
        </td>
    </tr>
</table>
