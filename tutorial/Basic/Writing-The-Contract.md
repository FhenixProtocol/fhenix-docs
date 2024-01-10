# Writing the Contract

Let's get started.

We'll start by creating our new contract. We'll use Counter.sol as a template. Let's copy this file and create a new solidity file which we'll call WrappingERC20.sol.

:::tip[Tip]
While we recommend development in an IDE, you can also use an environment like Remix and follow along!
:::

Our goal is to create an ERC20 that supports shielding balances. Let's run through the different functions, step-by-step and show how we can implement each. We'll also link to more detailed explainations about custom functionality we make use of.

1.  **Prerequisites**

    Start by importing the OpenZeppelin ERC20 contract, TFHE.sol, solidity version and a license:

    ```Javascript
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.17;

    import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
    import "fhevm/lib/TFHE.sol";
    ```

    The OpenZeppelin ERC20 contract will provide the basic functionality of the token, while the TFHE.sol is necessary for encryption purposes. We'll also have to install the openzeppelin contracts, since they are not part of the default template.

    <code class="lang-bash">pnpm install @openzeppelin/contracts</code>
    
2.  **Creating the Contract**

    The contract `WrappingERC20` is an ERC20 contract. It uses encryption from FHE.sol to keep balances private and only viewable by the holder of the correct decryption key.

    ```solidity
    contract WrappingERC20 is ERC20 {
    ...
    }
    ```
3.  **Initialize encrypted balance**

    An encrypted balance is initialized for each address, `_encBalances`, which will hold encrypted token balances for users. [euints](../fhevm-solidity/encrypted-types.md) are encrypted data types that represent FHE-encrypted unsigned integers of various bit lengths.

    ```solidity
    mapping(address => euint32) internal _encBalances;
    ```
4.  **The Constructor**

    The constructor function sets the name and symbol of the token, and then mints an initial 100 tokens to the address that deploys the contract.

    ```solidity
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
         _mint(msg.sender, 100 * 10 ** uint(decimals()));
    }
    ```
5.  **Wrap and Unwrap**

    The `wrap` and `unwrap` functions are unique to this contract.

    * `wrap(uint32 amount)` allows users to convert (wrap) their tokens into encrypted form. The function burns the specified amount from the user's balance and adds the same amount to their encrypted balance. Note the usage of [TFHE.add()](../../more-docs/developer-reference/fhevm-solidity/types-and-operations.md) to perform addition between two encrypted numbers, which returns an encrypted response.

    ```solidity
    function wrap(uint32 amount) public {
        require(balanceOf(msg.sender) >= amount);
        _burn(msg.sender, amount);

        _encBalances[msg.sender] = TFHE.add(_encBalances[msg.sender], amount);
    }
    ```



    * `unwrap(uint32 amount)` allows users to convert (unwrap) their encrypted tokens back into regular tokens. The function removes the specified amount from the user's encrypted balance and mints the same amount of regular tokens. \
      \
      At this point, before performing the unwrapping we need to make sure that the caller has enough encrypted tokens to unwrap the requested amount. To do this, we use the special [TFHE.req (require)](../fhevm-solidity/require-vs.-optimistic-require.md) functionality.



    ```solidity
    function unwrap(uint32 amount) public { 
        TFHE.req(TFHE.gt(_encBalances[msg.sender], amount));
        _encBalances[msg.sender] = TFHE.sub(_encBalances[msg.sender], amount);
        _mint(msg.sender, amount);
    }
    ```
6.  **Encrypted Transfers**

    `transferEncrypted(address to, bytes calldata encryptedAmount)` is a public function that transfers encrypted tokens from the function caller to the `to` address. It converts the encrypted amount into the encrypted integer form `euint32` using the [`TFHE.asEuint32(encryptedAmount)`](../fhevm-solidity/encrypted-types.md#sending-an-euint) function and then calls `_transferEncrypted`.

    The function `_transferEncrypted(address to, euint32 amount)` is an internal function that just calls `_transferImpl`.

    `_transferImpl(address from, address to, euint32 amount)` performs the actual transfer. It checks if the sender has enough tokens, then adds the amount to the `to` address encrypted balance and subtracts the same amount from the `from` address encrypted balance.

    ```solidity
    function transferEncrypted(address to, bytes calldata encryptedAmount) public {
        _transferEncrypted(to, TFHE.asEuint32(encryptedAmount));
    }

    // Transfers an amount from the message sender address to the `to` address.
    function _transferEncrypted(address to, euint32 amount) internal {
        _transferImpl(msg.sender, to, amount);
    }

        // Transfers an encrypted amount.
    function _transferImpl(address from, address to, euint32 amount) internal {
        // Make sure the sender has enough tokens.
        TFHE.req(TFHE.le(amount, _encBalances[from]));

        // Add to the balance of `to` and subract from the balance of `from`.
        _encBalances[to] = TFHE.add(_encBalances[to], amount);
        _encBalances[from] = TFHE.sub(_encBalances[from], amount);
    }
    ```
7.  **Encrypted Balance**\
    `balanceOfEncrypted(address sender, bytes32 publicKey)` allows users to check their own encrypted balance. It uses the `TFHE.reencrypt(_encBalances[sender], publicKey)` function which reencrypts the balance with a new key so the original balance cannot be derived from the returned value.\


    ```solidity
    function balanceOfEncrypted(address sender, bytes32 publicKey) 
    public 
    view 
    returns (bytes memory)
    {
        return TFHE.reencrypt(_encBalances[sender], publicKey);
    }
    ```

:::tip[Did you notice?]
We specifically do not include any access-control to the `balanceOfEncrypted`view function to keep things simple. You can find guidance on EIP712-based schemas in our access control sections of [TFHE.sol](../fhevm-solidity/access-control.md) and [fhevmjs](../fhevm.js/access-control-eip-712.md).
:::

Putting it all together, you'll hopefully end up with a contract that looks something like this:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "fhevm/lib/TFHE.sol";

contract WrappingERC20 is ERC20 {

    // A mapping from address to an encrypted balance.
    mapping(address => euint32) internal _encBalances;

    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        _mint(msg.sender, 100 * 10 ** uint(decimals()));
    }

    function wrap(uint32 amount) public {
        require(balanceOf(msg.sender) >= amount);
        _burn(msg.sender, amount);

        _encBalances[msg.sender] = TFHE.add(_encBalances[msg.sender], amount);
    }

    function unwrap(uint32 amount) public {
        TFHE.req(TFHE.gt(_encBalances[msg.sender], amount));

        _encBalances[msg.sender] = TFHE.sub(_encBalances[msg.sender], amount);

        _mint(msg.sender, amount);
    }

    function transferEncrypted(address to, bytes calldata encryptedAmount) public {
        _transferEncrypted(to, TFHE.asEuint32(encryptedAmount));
    }

    // Transfers an amount from the message sender address to the `to` address.
    function _transferEncrypted(address to, euint32 amount) internal {
        _transferImpl(msg.sender, to, amount);
    }

        // Transfers an encrypted amount.
    function _transferImpl(address from, address to, euint32 amount) internal {
        // Make sure the sender has enough tokens.
        TFHE.req(TFHE.le(amount, _encBalances[from]));

        // Add to the balance of `to` and subract from the balance of `from`.
        _encBalances[to] = TFHE.add(_encBalances[to], amount);
        _encBalances[from] = TFHE.sub(_encBalances[from], amount);
    }

    function balanceOfEncrypted(address sender, bytes32 publicKey) 
    public 
    view 
    returns (bytes memory)
    {
        return TFHE.reencrypt(_encBalances[sender], publicKey);
    }
}
```

Now we can move on to the next stage - checking that the code actually works!
