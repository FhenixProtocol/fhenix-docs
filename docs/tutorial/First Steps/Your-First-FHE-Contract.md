# Encrypting Plaintext to Ciphertext Using FHE with Fhenix

In this short guide, we'll demonstrate how simple it is to enable confidentiality in your smart contracts using Fhenix.

*Link to Smart Contract*

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@fhenixprotocol/contracts/FHE.sol";

contract EarlyWin {
    uint8 _plaintext;
    euint8 public _cipherText;

    function setCipherText(inEuint8 calldata _encryptedNumber) public {
        // convert inEuint8 type structure to euint8
        _cipherText = FHE.asEuint8(_encryptedNumber);
    }

    function setPlainText(uint8 _number) public {
        // set standard plaintext
        _plaintext = _number;
    }

    function decrypt() public view returns (uint8) {
        return FHE.decrypt(_cipherText);
    }
}
```

## Code Walkthrough

First, FHE is imported directly into your contract with a single line of code. Next, we establish two unsigned integers, with `_cipherText` being encrypted. This means it will not be publicly accessible by anyone other than the intended viewer. The standard `_plaintext` `uint8` represents a number that is public for all to view.

### Step By Step

1. **Importing FHE**

   ```solidity
   import "@fhenixprotocol/contracts/FHE.sol";
   ```

   We can import the FHE precompiles directly into the smart contract with a single line of code. The power of FHE in one single line of copy-paste.

2. **Declaring Variables**

   ```solidity
   uint8 _plaintext;
   euint8 public _cipherText;
   ```

   Line 8 is a familiar way of setting a number in Solidity. However, this unsigned integer will be publicly queryable by everyone with access to the network. The number set on line 9 as the encrypted unsigned integer will not be.

3. **Setting the Encrypted Number**

   ```solidity
   function setCipherText(inEuint8 calldata _encryptedNumber) public {
       // convert inEuint8 type structure to euint8
       _cipherText = FHE.asEuint8(_encryptedNumber);
   }
   ```

   Here, we set the encrypted number via the setter function. We pass an `inEuint8` as the ciphertext, which represents the number we want to set.

4. **Setting the Plaintext Number**

   ```solidity
   function setPlainText(uint8 _number) public {
       // set standard plaintext
       _plaintext = _number;
   }
   ```

   This is the standard way of setting a number via a function call in plaintext Solidity.

5. **Decrypting the Encrypted Number**

   ```solidity
   function decrypt() public view returns (uint8) {
       return FHE.decrypt(_cipherText);
   }
   ```

   Finally, we call the decrypt function to convert the private number to a public one. The method on line 21 represents an example of synchronous decryption. Fhenix will eventually move to an asynchronous decryption call. Don't worry, it will still be possible, and we will update you when the implementation is ready.

## Next Steps

If you want to learn more about working with Fhenix, please check out our [docs for a development tutorial](#). Here, you will learn how to set up your local dev environment and create an encrypted ERC-20 token!

Or, [click here to check out part 2 of our easy win guide](#), where we go over Fhenix principles 101 on Remix. Learn how to handle operations, conditional logic, and permissions (viewing encrypted fields).

### Have Questions?

Hop into our [Discord](#) and ask questions in the #dev-general or #tech-questions channels!