---
sidebar_position: 2
---

# Writing the Contract (WIP)

Let's get started with writing our contract.

We'll start by looking around the template, and noticing that we have a `Counter.sol` file in the `contracts/` folder. 

Let's create a copy of that file, and call that `WrappingERC20.sol`:

```shell
cp contracts/Counter.sol contracts/WrappingERC20.sol
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

#### Wrap and Unwrap

The wrap and unwrap functions are unique to this contract.

* `wrap(uint32 amount)` allows users to convert (wrap) their tokens into encrypted form. The function burns the specified amount from the user's balance and adds the same amount to their encrypted balance. Note the usage of TFHE.add() to perform addition between two encrypted numbers, which returns an encrypted response.

```javascript
function wrap(uint32 amount) public {
    require(balanceOf(msg.sender) >= amount);
    _burn(msg.sender, amount);

    _encBalances[msg.sender] = TFHE.add(_encBalances[msg.sender], amount);
}
```

* `unwrap(uint32 amount)` allows users to convert (unwrap) their encrypted tokens back into regular tokens. The function removes the specified amount from the user's encrypted balance and mints the same amount of regular tokens. 

At this point, before performing the unwrapping we need to make sure that the caller has enough encrypted tokens to unwrap the requested amount. To do this, we use the special TFHE.req (require) functionality.

```javascript
function unwrap(uint32 amount) public { 
    TFHE.req(TFHE.gt(_encBalances[msg.sender], amount));
    _encBalances[msg.sender] = TFHE.sub(_encBalances[msg.sender], amount);
    _mint(msg.sender, amount);
}
```

#### Encrypted Transfers

`transferEncrypted(address to, bytes calldata encryptedAmount)` is a public function that transfers encrypted tokens from the function caller to the to address. It converts the encrypted amount into the encrypted integer form `euint32` using the `FHE.asEuint32(encryptedAmount)` function and then calls `_transferEncrypted`.
The function `_transferEncrypted(address to, euint32 amount)` is an internal function that just calls _transferImpl.
`_transferImpl(address from, address to, euint32 amount)` performs the actual transfer. It checks if the sender has enough tokens, then adds the amount to the to address encrypted balance and subtracts the same amount from the from address encrypted balance.

```javascript
function transferEncrypted(address to, inEuint32 calldata encryptedAmount) public {
    _transferEncrypted(to, FHE.asEuint32(encryptedAmount));
}

// Transfers an amount from the message sender address to the `to` address.
function _transferEncrypted(address to, euint32 amount) internal {
    _transferImpl(msg.sender, to, amount);
}

    // Transfers an encrypted amount.
function _transferImpl(address from, address to, euint32 amount) internal {
    // Make sure the sender has enough tokens.
    FHE.req(amount.le(_encBalances[from]));

    // Add to the balance of `to` and subract from the balance of `from`.
    _encBalances[to] = _encBalances[to] + amount;
    _encBalances[from] = _encBalances[from] - amount;
}
```

