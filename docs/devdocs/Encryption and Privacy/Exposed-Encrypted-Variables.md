# 🔎 Encrypted Variables - Preventing Exposure

Ensuring that encrypted data and variables are not leaked is important when working with Fhenix. A common oversight when working with encrypted variables is revealing them to other contracts. Lets take a look at a scenario that leaks encrypted data:

```solidity
contract UserBalanceVulnerable {
  mapping(address => euint64) public eUserBalances;

  function addBalance(inEuint64 calldata _inBalance) public {
    eUserBalances[msg.sender] = eUserBalances[msg.sender].add(
      FHE.asEuint64(_inBalance)
    );
  }
}
```

This seems secure enough and no decrypted data is directly exposed, however the `public` access to `eUserBalances` leaks sensitive data. A malicious contract is able to fetch this data and then decrypt it:

```solidity
contract UserBalanceAttack {
  address private vulnerableContract;

  function revealUserBalance(address _user) public view returns (uint64) {
    return UserBalanceVulnerable(vulnerableContract)
      .eUserBalances(_user)
      .decrypt();
  }
}
```

All contracts on the Fhenix network share an encryption key, therefore an encrypted variable in `ContractA` could be decrypted in `ContractB`.

This is not inherently wrong, and many operations will require encrypted variables to be shared between contracts, but care must be taken to prevent open access to encrypted variables.

### Hardhat Task

The `fhenix-hardhat-plugin` package contains a task that checks your contracts for any exposed encrypted variables. This task is run automatically when your contracts are compiled, but can also be run manually.

#### Task Example

The following contract exposes encrypted variables in 3 ways.

```solidity
pragma solidity >=0.8.13 <0.9.0;

import "@fhenixprotocol/contracts/FHE.sol";

contract ContractWithExposedVariables {
  // Example 1
  mapping(address => euint8) public eUserBalances;

  // Example 2
  mapping(address => euint8) private _eUserBalances;
  function getUserBalance(address _user) public view returns (euint8) {
    return _eUserBalances[_user];
  }

  // Example 3
  struct Player {
    address player;
    euint8[] eCards;
    uint256 chips;
    uint256 bet;
  }
  struct Dealer {
    uint256 pot;
    euint8[] eFlopCards;
  }
  struct HoldEmGameState {
    Player[] players;
    Dealer dealer;
  }

  HoldEmGameState private gameState;
  // Encrypted card values is the Player and Dealer structs are leaked and can be exploited
  function getGameState() public view returns (HoldEmGameState memory) {
    return gameState;
  }
}
```

#### Output

Below is the output of the task when analyzing the above `ContractWithExposedVariables.sol`

<pre>
<b>fhenix-hardhat-plugin:CheckExposedEncryptedVars</b> checking for exposed encrypted variables....

  <b style="color:orangered">contracts/ContractWithExposedVariables.sol:ContractWithExposedVariables</b>

    <b>eUserBalances(address)</b> exposes 1 encrypted variables:
      pos-0 - <b style="color:orangered">euint8</b>

    <b/>getUserBalance(address)</b> exposes 1 encrypted variables:
      pos-0 - <b style="color:orangered">euint8</b>

    <b/>getGameState()</b> exposes 1 encrypted variables:
      pos-0 - struct ContractWithExposedVariables.HoldEmGameState
        players - struct ContractWithExposedVariables.Player[]
          eCards - <b style="color:orangered">euint8[]</b>
        dealer - struct ContractWithExposedVariables.Dealer
          eFlopCards - <b style="color:orangered">euint8[]</b>
</pre>

#### Manual Task Execution

The task can be run manually with the command:

```
npx hardhat task:fhenix:checkExposedEncryptedVars
```

Or as a part of a hardhat compilation:

```
npx hardhat compile
```
