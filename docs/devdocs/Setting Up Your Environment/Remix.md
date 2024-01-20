# 🎧 Remix

To get up and running with Remix, all you need is to include the TFHE.sol solidity files to your project so the compiler knows what to do. You can do so by importing TFHE.sol from your contract directly -

```solidity
import "@fhenixprotocol/contracts/FHE.sol";
```

We also provide an example contract that can be loaded into Remix, using the "Load From Github"

[//]: # (Todo: Add images)

Which is available from [https://github.com/FhenixProtocol/devnet-contracts/blob/main/EncryptedERC20.sol](https://github.com/FhenixProtocol/devnet-contracts/blob/main/EncryptedERC20.sol).

To connect Remix to Fhenix devnet, you can use the injected provider option after [adding to Metamask](../overview/connecting-to-the-devnet.md).
