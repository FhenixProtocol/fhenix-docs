# 🤫 Development Tips – Ensuring Privacy

Fhenix provides a secure and decentralized way to execute smart contracts on encrypted data; transactions and computations are fully encrypted. As such, Fhenix offers superior on-chain privacy. However, developers still need to be vigilant, because all blockchain privacy platforms have their idiosyncrasies and potential privacy risks.

##### Implement Best Practices
Fhenix ensures end-to-end encryption, but developers should be careful not to become complacent on matters of privacy. Developers should always prioritize best practices to ensure privacy and confidentiality.

##### Analyze Your Privacy Model
We recommend that Fhenix developers carefully analyze their smart contract privacy model (this applies to any blockchain platform with privacy features). Distinguish between the type of information that, if “leaked,” can affect contract privacy on the one hand, and the type of information that, if compromised, will not affect contract operation and user privacy on the other. Special attention should be given to the type of information that must remain confidential.

As a result of this analysis and the insights gained, structure your smart contracts in a way that safeguards the aspects that affect privacy, while ensuring that the smart contract continues to operate efficiently.

##### A Simple Example
A simple example of metadata leakage is gas usage. Consider a smart contract coded in Solidity that contains a conditional statement. In this case, the path taken by the condition, though encrypted, may still reveal information. A typical scenario is a conditional branch based on the value of a private variable, where gas usage, events, or other metadata could reveal the branch taken.

```JavaScript
function performActionBasedOnBalance(uint256 amount) public {
    if (balance[msg.sender] >= amount) {
        // perform some operation
    } else {
        // perform another operation
    }
}
```

In the above Solidity example, someone observing the transaction could potentially infer the chosen branch based on gas usage, events, or metadata, which would, in turn, indirectly reveal whether the sender's balance was greater than or equal to the specified amount.

This example might seem insignificant, but it is important to remember that transactions can often be cheaply simulated with different input parameters. In the above example, performing a logarithmic search would reveal the exact balance fairly quickly.

##### Add Access Controls
It is important to provide access controls to functions that handle sensitive data. For instance, a function revealing a user’s balance should only be accessible to that specific user. We discuss this issue further in the [section on access control](./Permits-Access-Control.md)

##### In Conclusion
Despite the embedded encryption protection provided by FHE, it is essential to understand and address potential risk areas that can compromise privacy. We will be updating this section and our other documentation as our product matures, so be sure to check back from time to time.