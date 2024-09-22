todo: add "random" function to the list of operations under "Writing Smart Contracts/Types and operations"
and specify it's available for all types except ebool and eaddress.

# Randomness
// todo (eshel)
Randomness was introduced in Todo !
Contracts in Fhenix can get random numbers by calling one of the randomness functions in `FHE.sol`.
These functions are:
```solidity
import {
    FHE, euint8, euint16, euint32, euint64, euint128, euint256
} from "@fhenixprotocol/contracts/FHE.sol";

euint8 randomValue = FHE.randomEuint8();
euint16 randomValue = FHE.randomEuint16();
euint32 randomValue = FHE.randomEuint32();
euint64 randomValue = FHE.randomEuint64();
euint128 randomValue = FHE.randomEuint128();
euint256 randomValue = FHE.randomEuint256();
```

Note that the random values are returned encrypted.
This is a fundamental quality of randomness generation, because if the returned value
was plaintext, then it would be possible to simulate the execution and predict the random value.

### Best practice: Ensure caller is not a Contract
When acting upon the resulting random numbers, it is important to keep the following
scenario in mind.

Suppose we have a simple game contract that you can send funds to, and with a probability of half,
you will receive double the funds back.

```solidity
contract RandomLucky {
    function play() external payable {
        require(msg.value > 0, "You need to send some FHE");

        // Generate a random encrypted number
        euint8 outcome = FHE.randomEuint8();
        uint8 outcomeDecrypted = outcome.decrypt();

        // If the outcome is even, send double the value back to the sender
        if (outcomeDecrypted % 2 == 0) {
            uint prize = msg.value * 2;
            require(address(this).balance >= prize, "Contract does not have enough balance");
            payable(msg.sender).transfer(prize);
        }
        // If the outcome is odd, the contract keeps the value
    }

    // Fallback function to receive FHE
    receive() external payable {}
}
```
An adversary could could call the randomness consumer function, check the result of the random,
and revert the transaction if that result were not favorable.

In this case:
```solidity
contract Adversary {
    RandomLucky game;

    constructor(address gameAddress) {
        game = RandomLucky(gameAddress);
    }

    // Function to attack the RandomLucky contract
    function attack() public payable {
        require(msg.value > 0, "Must send some FHE to attack");

        // Store the initial balance of the contract
        uint256 initialBalance = address(this).balance;

        // Call the play function of the RandomLucky contract
        game.play{value: msg.value}();

        // Check if the balance did not increase
        if (address(this).balance <= initialBalance) {
            revert("Did not win, reverting transaction");
        }
    }
}
```

To prevent this kind of attacks, it is recommended to not allow contracts
to call functions that act upon random numbers, like so:
```solidity
modifier callerIsUser() {
  require(tx.origin == msg.sender, "The caller is another contract");
  _;
}

function play() callerIsUser {
  ...
}
```

# Randomness in View functions
As it is currently implemented, Randomness depends on the state of the chain. This means the `eth_calls` will not receive new
random numbers. When calling `random()` from a view function, then you will receive the previous random that was generated in a transaction that was committed to the state.