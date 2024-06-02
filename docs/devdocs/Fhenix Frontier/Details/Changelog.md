## Changelog

Here you can find a list of changes between different versions of the Fhenix Testnet(s) as we evolve and grow.


### Helium - Latest Version

* Added `eaddress` as a native type that can be found in FHE.sol directly
* Added support for large integer sizes: `euint64`, `euint128`, `euint256`. Not all operations are supported for each type
at this time. See [Types and Operators](../../Writing%20Smart%20Contracts/Types-and-Operators.md) for more information.
* Added support for solidity compiler version 0.8.25 and up
* Performance has been greatly increased for all data types
* Performance has been greatly increased for select operations
* All client-side libraries and toolkits have been upgraded and will require an update to version 0.2 to work with Helium - FhenixJS, Remix plugin & hardhat plugins.
* Refactored gas prices for FHE operations to better reflect the operational cost of the operation. See [Gas and Benchmarks](../../Writing%20Smart%20Contracts/Gas-and-Benchmarks.md) for more information.
* Blocks are now posted to the Sepolia Testnet with support for EIP-4844 blobs.
* Refactored gas cost for transaction data to be more in line with Ethereum.
* LocalFhenix - Added support for `Console.log` functionality to allow debug logs during contract execution. 
* Many bug fixes and other improvements.

### Frontier

Initial limited release!