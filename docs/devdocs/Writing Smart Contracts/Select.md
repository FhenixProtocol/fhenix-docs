---
sidebar_position: 4
title: 🌴 Select vs If...else
description: Why if..else is not possible and what are the alternatives
---

Writing code with Fully Homomorphic Encryption (FHE) introduces a fundamental shift in how we generally handle conditional branching in code. Since FHE operates on encrypted data, typical `if...else` branching structures cannot be used, because actual values are not visible.

For example, the following code does not work:

```Javascript
euint32 a = FHE.asEuint32(10);
euint32 b = FHE.asEuint32(20);
if (a.lt(b)) {
   return FHE.decrypt(a);
} else {
   return FHE.decrypt(b);
}
```

When writing Solidity contracts for the Fhenix blockchain, it is necessary to consider all possible branches of a conditional at the same time. This is somewhat akin to writing constant-time cryptographic code, where the objective is to avoid timing attacks that could leak information about secret data.

To handle conditional branching, we use a special type of function called a "selector." A selector is a function that accepts a control and two branches, and returns the result of the branch that corresponds to the condition. A selector operates like a traffic signal that decides which traffic to let through based on the color of the traffic light (control signal).

In Fhenix this concept is implemented by calling a `select` function. The `select`function accepts a condition and two inputs and returns the input that corresponds to the state of the condition. It is like a ternary Boolean conditional (`condition ? "yes" : "no"`) but for encrypted data.

Consider the following `select` function example implemented in a Blind Auction Smart Contract: TBD(ADD LINK):

```Javascript
ebool isHigher = existingBid.lt(value);
bids[msg.sender] = FHE.select(isHigher, value, existingBid);
```

In this snippet, the bidder offers a new bid that is higher than the existing one. The `lt` function checks whether the existing bid is less than the new value and assigns the result to `isHigher` (the result is of type `ebool`).

Then, `FHE.select` takes control. If `isHigher` is true (remember, this is still an encrypted Boolean, not a plaintext one), it returns the `value` (the new bid). Otherwise, it returns `existingBid`. The returned value is assigned to bids[`msg.sender`], effectively replacing the old bid with the new one if the new one is higher.

The crucial point here is that after the initial comparison, all operations occur on encrypted data. This ensures that the actual values of bids and the comparison result (stored in `isHigher`) remain concealed. This powerful feature demonstrates conditional execution in the context of FHE data, which maintains privacy without sacrificing functionality.