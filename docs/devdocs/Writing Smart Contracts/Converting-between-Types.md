---
sidebar_position: 7
title: 🧙 Type Conversions
description: Converting between different FHE types
---

# Converting Between Types

Conversion between various encrypted types or from plaintext to encrypted within contracts is frequently required. This section covers procedures for leveraging type conversion functions in `FHE.sol` to manipulate encrypted data effectively.

## Using Conversion Functions

1. **Converting Encrypted to Other Encrypted Types:**

The following code shows conversion of an encrypted Boolean vote to an encrypted integer before tallying in a voting smart contract.

- **Contract Example:**
    ```Javascript
    contract Voting { 
        function convertVote(ebool encryptedVote) public {
            // Convert the encrypted boolean vote to an encrypted 32-bit integer
            euint32 encryptedVoteInt = encryptedVote.toU32();
            // Further processing with encryptedVoteInt
        }
    }
    ```

2. **Converting from Plaintext to Encrypted Type:**

The following code shows initializing an encrypted counter in a smart contract, starting from a plaintext value that needs to be encrypted.

- **Contract Example:**
    ```Javascript
    contract Counter {
        euint32 private encryptedCount;

        function initializeCount(uint256 initialCount) public {
            // Convert a plaintext count to an encrypted count
            encryptedCount = FHE.asEuint32(initialCount);
        }
    }
    ```

### Vulnerability
Note that when converting from plaintext to encrypted, the value is still in plaintext and exposed to the contract, as well as on the public blockchain. This type of conversion should only be used when plaintext data is not sensitive, and it is safe to expose on a public blockchain.

## Best Practices​
- **Understand the Data Types**: Know the data types that you are working with and the implications of converting between them. Ensure that the conversion is logical and secure.
- **Monitor Gas Usage**: Be aware of the gas costs associated with specific types of conversions, especially when functions are frequently called.
- **Test Thoroughly**: Always test contracts with various scenarios to ensure that type conversions are behaving as expected.
