---
sidebar_position: 6
title: 🕵️ Permissions
description: Managing access to sensitive data & Permissioned contracts 
---

## Overview

A `Permissioned` contract is an abstract Solidity contract that leverages EIP-712-standard signatures to enforce access controls. It is designed to be used by Solidity developers who require signature verification to restrict access to certain contract functions. `Permissioned` contracts can be used to restrict any kind of function. However, it is especially useful for creating an access-controlled view function, where data can only be visible to entities that present a verified signature.

## Use Cases

A typical use case of this access control mechanism arises when sensitive information that resides within a contract requires restricted public accessibility. For example, consider a contract managing private user data. This contract can implement view functions that require a signature to verify the requester’s identity. This approach ensures that only the authorized user or designated party can access that user's relevant data.

## Implementation​

Implementing a `Permissioned` contract enables integrating access control functionalities within an application. In terms of coding, this involves deriving a new contract from the Permissioned contract (inheritance). Subsequently, custom modifiers can be applied to specific functions within the derived contract to enforce access control. These modifiers verify the presence of a valid signature using EIP-712 standards before granting access to the protected functions.

To implement access-controlled view functions, do the following:

1. Define the view function in your contract. For example, the following code snippet retrieves sensitive data:

    ```javascript
    function getSensitiveData(Permission calldata perm) public view onlySender(perm) returns (string memory) {
        // Logic to return sensitive data
    }
    ```

2. Off-chain, users generate a signature for their requests through the EIP-712 protocol and signed with their private key. This process typically involves structured data that lists the types of variables involved and their values. The result is a signature that can prove that the user consents to the requested operation.

3. Call the view function with the generated signature as one of the parameters. The view function executes and returns the sensitive data only when the signature is verified and corresponds to `msg.sender`.

## Example Scenario 1

Consider a contract that holds medical records. The following code snippet creates a secure method for patients to view their records:

```javascript
pragma solidity ^0.8.20;

import "@fhenixprotocol/contracts/access/Permissioned.sol";

contract MedicalRecords is Permissioned {
    
    mapping(address => string) private records;

    function viewMedicalRecord(Permission calldata perm) public view onlySender(perm) returns (string memory) {
        return records[msg.sender];
    }
}
```

After obtaining the appropriate signature using their private key, the patient submits it together with their request to view their records. The contract verifies the signature against the caller's address, and if it matches, returns the patient’s medical record.

:::Vulnerability
We have provided this code snippet to illustrate how permissions are used. This is not a complete implementation. Note that in this code `string` and `address` are public data types and can be read directly from the chain! Therefore, a full implementation of the code would have to handle this vulnerability.
:::

## Example Scenario 2

```javascript
pragma solidity ^0.8.20;
import {FHE, euint8, inEuint8} from "@fhenixprotocol/contracts/FHE.sol";
contract Test {
    euint8 _output;

    function setOutput(inEuint8 calldata _encryptedNumber) public  {
        // convert inEuint8 type structure to euint8 
        _output = FHE.asEuint8(_encryptedNumber);
    }

    function getSealedOutput(Permission memory signature) public view  returns (string memory) {
        // Seal the output for a specific publicKey
        return FHE.sealoutput(_output, signature.publicKey);
    }
}
```

## Best Practices​

- Implement permissioned view functions to allow access upon successful signature verification to enhance contract data privacy.
- Emphasize that users need to protect the private keys that they use to generate EIP-712 signatures to maintain the integrity of the access control system.
- Developers must integrate off-chain EIP-712 compliant signing processes to ensure users can generate valid signatures for smart contract interactions.
- EIP-712 signatures provide strong assurances of user intention, making them ideal for sensitive operations.
