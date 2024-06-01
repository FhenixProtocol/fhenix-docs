---
sidebar_position: 1
displayed_sidebar: tutorialSidebar
---

# Overview

In this guide, we'll be creating a shielded ERC20 token using Solidity. Our token will be unique in that it will offer encrypted token balances, thereby enhancing privacy for token holders.

1. Define a view function in your contract. For example, to retrieve sensitive data:

    ```solidity
    function getSensitiveData(Permission calldata perm) public view onlySender(perm) returns (string memory) {
        // Logic to return sensitive data
    }
    ```
