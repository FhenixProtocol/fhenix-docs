# Handling Encrypted Inputs

Fully Homomorphic Encryption (FHE) contracts handle encrypted data differently from standard Solidity contracts. Developers can receive encrypted inputs primarily in two ways:

1. **Using `inEuintXX` Structs:**
    ```Javascript
    function transferEncryptedToAccount(address to, inEuint32 calldata encryptedBalance) public {
        _updateAccountBalance(to, FHE.asEuint32(encryptedBalance));
    }
    ```

2. **Using Raw Bytes:**
    ```Javascript
    function transferEncryptedData(address to, bytes calldata encryptedData) public {
        _storeEncryptedData(to, FHE.asEuint32(encryptedData));
    }
    ```

## Encrypted Data Structures
Different types of encrypted data can be defined:

- `inEbool`: Encrypted boolean.
- `inEuint8`: Encrypted unsigned 8-bit integer.
- `inEuint16`: Encrypted unsigned 16-bit integer.
- `inEuint32`: Encrypted unsigned 32-bit integer.

## Advantages of `inEuint` Over Raw Bytes
Using `inEuint` over raw bytes ensures type safety and readability. 
It also provides a structured approach that integrates well with the FHE.sol library's functions.

### Examples

1. **Voting in a Poll:**
    ```Javascript
    function castEncryptedVote(address poll, inEbool calldata encryptedVote) public {
        _submitVote(poll, FHE.asEbool(encryptedVote));
    }
    ```

2. **Setting Encrypted User Preferences:**
    ```Javascript
    function updateUserSetting(address user, inEuint8 calldata encryptedSetting) public {
        _applyUserSetting(user, FHE.asEuint8(encryptedSetting));
    }
    ```

### `inEuint` vs. `euint` Types
- `inEuint` types are used for handling incoming encrypted data.
- `euint` types are used for data already processed and in use within the contract.

### Conversion Necessity
Conversion from `inEuint` to `euint` is necessary for the data to be compatible with FHE operations. This ensures that only correctly formatted and expected encrypted data is processed.

This is done using the `FHE.asEuintXX` function, where `XX` is the bit size of the encrypted data.

### Gas Cost Implications
Attempting to store `inEuint` types directly in storage can lead to prohibitively high gas costs due to the large size of encrypted data. It's generally recommended to avoid storing these directly and instead process them as needed.

### Best Practices
When handling encrypted inputs, always ensure the data integrity and security of your contract's operations. Use the structured `inEuint` types for clearer and safer code, and be mindful of gas costs when designing your contract's data handling strategies. Thorough testing and consideration of security implications are essential in maintaining the robustness and reliability of your FHE-based smart contracts.