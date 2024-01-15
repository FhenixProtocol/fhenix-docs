---
sidebar_position: 99
title: Comparisons and Booleans
description: Comparisons on FHE data 
---

# Comparisons and Booleans

## Comparisons

Unlike other operations in FHE.sol, comparison operations do not support their respective operators (e.g. `>`, `<` etc.). 
This is because solidity expects these operators to return a boolean value, which is not possible with FHE. Intuitively, this is because returning a boolean value would leak information about the encrypted data.

Instead, comparison operations are implemented as functions that return an `ebool` type. 

> Note: The `ebool` type is not a real boolean type. It is implemented as a `euint8`

## ebool

Not sure what we want to say here yet.
