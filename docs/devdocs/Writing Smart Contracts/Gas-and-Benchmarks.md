# 🔥 Gas and Benchmarks

This section will list the gas costs for every operation based on it's inputs.
The gas prices are subject to change based on usage and performance.

:::tip
The current gas limit for a transaction is set to be 50 million
:::

New for Fhenix Kimchi Testnet we changed the calculation of TX data, which previously was heavily discounted artificially.
The new calculation should be similar to default EVM for most transactions.

The new formula offers a discount of 75% for any data over 64KB, with default EVM costs per byte otherwise (64 gas units per non-zero byte, or 4 gas for zero).

The gas costs for the FHE operations are as follows:

| FHE.sol function   | euint8  | euint16 | euint32   | euint64 | euint128 | euint256 | ebool   | eaddress |
|--------------------|---------|---------|-----------|---------|----------|----------|---------|----------|
| add, sub           | 50,000  | 65,000  | 120,000   | 175,000 | 290,000  | n/a      | n/a     | n/a      |
| asEuint (inEuint)  | 65,000  | 65,000  | 65,000    | 300,000 | 300,000  | 300,000  | n/a     | 300,000  |
| asEuint (euint)    | 75,000  | 85,000  | 105,000   | 120,000 | 140,000  | 175,000  | n/a     | 150,000  |
| asEuint (uint)     | 20,000  | 20,000  | 30,000    | 35,000  | 65,000   | 70,000   | n/a     | 70,000   |
| sealOutput         | 150,000 | 150,000 | 150,000   | 150,000 | 150,000  | 150,000  | 150,000 | 150,000  |
| decrypt            | 25,000  | 150,000 | 150,000   | 150,000 | 150,000  | 150,000  | 150,000 | 150,000  |
| mul, square        | 40,000  | 70,000  | 125,000   | 280,000 | n/a      | n/a      | n/a     | n/a      |
| lt, lte, gt, gte   | 40,000  | 50,000  | 75,000    | 125,000 | 190,000  | n/a      | n/a     | n/a      |
| select             | 55,000  | 55,000  | 85,000    | 125,000 | 225,000  | n/a      | 35,000  | n/a      |
| require            | 150,000 | 150,000 | 150,000   | 150,000 | 150,000  | 150,000  | 150,000 | 150,000  |
| div, rem           | 125,000 | 335,000 | 1,003,000 | n/a     | n/a      | n/a      | n/a     | n/a      |
| and, or, xor       | 40,000  | 50,000  | 70,000    | 130,000 | 200,000  | n/a      | 35,000  | n/a      |
| ne, eq             | 40,000  | 50,000  | 65,000    | 120,000 | 180,000  | 260,000  | 35,000  | 210,000  |
| min, max           | 45,000  | 55,000  | 100,000   | 145,000 | 250,000  | n/a      | n/a     | n/a      |
| shl, shr, rol, ror | 65,000  | 90,000  | 130,000   | 210,000 | 355,000  | n/a      | n/a     | n/a      |
| not                | 42,000  | 35,000  | 49,000    | 85,000  | 120,000  | n/a      | 28,000  | n/a      |
