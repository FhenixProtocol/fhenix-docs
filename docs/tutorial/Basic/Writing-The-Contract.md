---
sidebar_position: 2
---

# Writing the Contract

Let's get started with writing our contract.

We'll start by looking around the template, and noticing that we have a `Counter.sol` file in the `contracts/` folder. 

Let's create a new file, and call that `WrappingERC20.sol`.

```shell
touch contracts/WrappingERC20.sol
```

Our goal is to create an ERC20 contract that supports shielded balances. 
Let's run through the different functions, step-by-step and show how we can implement each. We'll also link to more detailed explanations about custom functionality we make use of.

### Importing FHE Libraries

```javascript
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@fhenixprotocol/contracts/FHE.sol";
```

The OpenZeppelin ERC20 contract will provide the basic functionality of the ERC20 token, while `FHE.sol` is necessary to create and use FHE. 

We'll also have to install the OpenZeppelin contracts, since they are not part of the default template.

```shell
pnpm install @openzeppelin/contracts
```

### Creating the Contract

#### Inherit from ERC20

The contract WrappingERC20 is an ERC20 contract. It uses encryption from `FHE.sol` to keep balances private and only viewable by the holder of the correct decryption key.

```javascript
contract WrappingERC20 is ERC20 {

}
```

#### Create Encrypted Balances

An encrypted balance is initialized for each address, _encBalances, which will hold encrypted token balances for users. euints are encrypted data types that represent FHE-encrypted unsigned integers of various bit lengths.
```javascript
mapping(address => euint32) internal _encBalances;
```

#### Constructor

The constructor function sets the name and symbol of the token, and then mints an initial 100 tokens to the address that deploys the contract.

```javascript
constructor(string memory name, string memory symbol) ERC20(name, symbol) {
     _mint(msg.sender, 100 * 10 ** uint(decimals()));
}
```

#### Wrap

First, let's define a function `wrap(uint32 amount)` that allows users to convert (wrap) their tokens into encrypted form. 
The function will burn a specified amount from the user's balance and add the same amount to their encrypted balance.

```javascript
function wrap(uint32 amount) public {
    // Make sure that the sender has enough of the public balance
    require(balanceOf(msg.sender) >= amount);
    // Burn public balance
    _burn(msg.sender, amount);

    // convert public amount to shielded by encrypting it
    euint32 shieldedAmount = FHE.asEuint32(amount);
    // Add shielded balance to his current balance
    _encBalances[msg.sender] = _encBalances[msg.sender] + shieldedAmount;
}
```

Breaking this down, the following logic is performed:

1. Verify that the user has enough public tokens to wrap
2. Burn public tokens
3. Add shielded tokens to the caller's balance

There are two main FHE operations that happened here:

* `FHE.asEuint32(amount)` - this converted a standard, public `uint` to an FHE-encrypted number
* `_encBalances[msg.sender] + shieldedAmount` - this performs homomorphic addition between the two encrypted numbers `shieldedAmount` and `_encBalances[msg.sender]`

:::note
Even though we called `FHE.asEuint32()` on a public value and encrypted it we did not actually hide any information - the plaintext value was already known beforehand
:::

#### Unwrap

Next, let's define `unwrap(inEuint32 amount)`. This function will allow users to convert (unwrap) their encrypted tokens back into public tokens. 
The function will remove the specified amount from the user's encrypted balance and add the same amount to the user's public balance.  

```javascript
function unwrap(inEuint32 memory amount) public {
    euint32 _amount = FHE.asEuint32(amount)
    // verify that our shielded balance is greater or equal than the requested amount. (gte = greater-than-or-equal)
    FHE.req(_encBalances[msg.sender].gte(_amount));
    // subtract amount from shielded balance
    _encBalances[msg.sender] = _encBalances[msg.sender] - _amount;
    // add amount to caller's public balance by calling the `mint` function
    _mint(msg.sender, FHE.decrypt(_amount));
}
```

Here we can see a few interesting things:

* `FHE.req` (or FHE require) verifies that a statement is true, or reverts the function. We use this to verify that we have enough shielded amount.
* `_encBalances[msg.sender].gte(_amount)` checks that `_encBalances[msg.sender]` is **g**rea**t**er or **e**qual than `_amount`
* `inEuint32` is a data type specifically for input parameters. You can read more about it [here](../../devdocs/Writing%20Smart%20Contracts/User-Inputs.md).

#### Encrypted Transfers

`transferEncrypted(address to, bytes calldata encryptedAmount)` is a public function that transfers encrypted tokens from the function caller to the to address. It converts the encrypted amount into the encrypted integer form `euint32` using the `FHE.asEuint32(encryptedAmount)` function and then calls `_transferEncrypted`.
The function `_transferEncrypted(address to, euint32 amount)` is an internal function that just calls _transferImpl.
`_transferImpl(address from, address to, euint32 amount)` performs the actual transfer. It checks if the sender has enough tokens, then adds the amount to the to address encrypted balance and subtracts the same amount from the from address encrypted balance.

```javascript
function transferEncrypted(address to, inEuint32 calldata encryptedAmount) public {
    euint32 amount = FHE.asEuint32(encryptedAmount);
    // Make sure the sender has enough tokens. (lte = less-then-or-equal)
    FHE.req(amount.lte(_encBalances[msg.sender]));

    // Add to the balance of `to` and subract from the balance of `msg.sender`.
    _encBalances[to] = _encBalances[to] + amount;
    _encBalances[msg.sender] = _encBalances[msg.sender] - amount;
}
```

And that's it! To recap, we just created a contract that allows users to wrap and unwrap their tokens, and transfer them in encrypted form.

Let's see what the entire code looks like:

```javascript
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@fhenixprotocol/contracts/FHE.sol";

contract WrappingERC20 is ERC20 {

    mapping(address => euint32) internal _encBalances;

    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        _mint(msg.sender, 100 * 10 ** uint(decimals()));
    }

    function wrap(uint32 amount) public {
        // Make sure that the sender has enough of the public balance
        require(balanceOf(msg.sender) >= amount);
        // Burn public balance
        _burn(msg.sender, amount);

        // convert public amount to shielded by encrypting it
        euint32 shieldedAmount = FHE.asEuint32(amount);
        // Add shielded balance to his current balance
        _encBalances[msg.sender] = _encBalances[msg.sender] + shieldedAmount;
    }

    function unwrap(inEuint32 memory amount) public {
        euint32 _amount = FHE.asEuint32(amount);
        // verify that our shielded balance is greater or equal than the requested amount 
        FHE.req(_encBalances[msg.sender].gte(_amount));
        // subtract amount from shielded balance
        _encBalances[msg.sender] = _encBalances[msg.sender] - _amount;
        // add amount to caller's public balance by calling the `mint` function
        _mint(msg.sender, FHE.decrypt(_amount));
    }

    function transferEncrypted(address to, inEuint32 calldata encryptedAmount) public {
        euint32 amount = FHE.asEuint32(encryptedAmount);
        // Make sure the sender has enough tokens.
        FHE.req(amount.lte(_encBalances[msg.sender]));

        // Add to the balance of `to` and subract from the balance of `from`.
        _encBalances[to] = _encBalances[to] + amount;
        _encBalances[msg.sender] = _encBalances[msg.sender] - amount;
    }
}
```

Note that in a real use case the actual code would include more functionality, and structure things a bit differently.
If you want to see what such a contract looks like, you can check out the [FHERC20](https://github.com/FhenixProtocol/fhenix-contracts/blob/main/contracts/experimental/token/FHERC20/FHERC20.sol) contract in the Fhenix contracts repository.

### Wait a second...

But what about viewing the encrypted balances? Well, we'll cover that in the next section, where we'll be adding viewing 
functionality to our contract, and see how we can utilize `Permissions` to manage access to encrypted data.
