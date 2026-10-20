// #region contract
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import { FHE } from "@fhenixprotocol/cofhe-contracts/FHE.sol";
import { FHERC20 } from "fhenix-confidential-contracts/contracts/FHERC20/FHERC20.sol";

/// A token whose balances and transfer amounts are encrypted.
contract ConfidentialToken is FHERC20 {
    constructor() FHERC20("Confidential Token", "CTK", 0, "") {
        // 0 decimals: whole tokens keep the numbers in this example simple.
        _mint(msg.sender, FHE.asEuint64(1_000));
    }
}
// #endregion contract
