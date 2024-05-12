# 🔥 Gas and Benchmarks

This section will list the gas costs for every operation based on it's inputs.
The gas prices are a subject to change based on usage and performance.

:::tip
The current gas limit for a transaction is set to be 50 million
:::

New for Fhenix Kimchi Testnet we changed the calculation of TX data, which previously was heavily discounted artificially.
The new calculation should be similar to default EVM for most transactions.

The new formula offers a discount of 75% for any data over 64KB, with default EVM costs per byte otherwise (64 gas units per non-zero byte, or 4 gas for zero).

The gas costs for the FHE operations are as follows:

<table>
    <thead>
        <tr>
            <th>FHE.sol function</th>
            <th>Input</th>
            <th>Gas Units </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="3">add</td>
            <td>euint8</td>
            <td>7,315</td>
        </tr>
        <tr>
            <td>euint16</td>
            <td>15,275</td>
        </tr>
        <tr>
            <td>euint32</td>
            <td>34,067</td>
        </tr>
        <tr>
            <td rowspan="3">asEuint</td>
            <td>inEuint</td>
            <td>9,196</td>
        </tr>
        <tr>
            <td>euint</td>
            <td>1,045</td>
        </tr>
        <tr>
            <td>uint</td>
            <td>1,045</td>
        </tr>
        <tr>
            <td>sealOutput</td>
            <td>*</td>
            <td>2,507</td>
        </tr>
        <tr>
            <td>decrypt</td>
            <td>*</td>
            <td>3,762</td>
        </tr>
        <tr>
            <td rowspan="3">lte</td>
            <td>euint8</td>
            <td>3,762</td>
        </tr>
        <tr>
            <td>euint16</td>
            <td>6,061</td>
        </tr>
        <tr>
            <td>euint32</td>
            <td>8,987</td>
        </tr>
         <tr>
            <td rowspan="3">sub</td>
            <td>euint8</td>
            <td>7,315</td>
        </tr>
        <tr>
            <td>euint16</td>
            <td>15,275</td>
        </tr>
        <tr>
            <td>euint32</td>
            <td>34,067</td>
        </tr>
        <tr>
            <td rowspan="3">mul</td>
            <td>euint8</td>
            <td>19,646</td>
        </tr>
        <tr>
            <td>euint16</td>
            <td>64,999</td>
        </tr>
        <tr>
            <td>euint32</td>
            <td>235,543</td>
        </tr>
        <tr>
            <td rowspan="3">lt</td>
            <td>euint8</td>
            <td>4,598</td>
        </tr>
        <tr>
            <td>euint16</td>
            <td>7,524</td>
        </tr>
        <tr>
            <td>euint32</td>
            <td>12,540</td>
        </tr>
          <tr>
            <td rowspan="3">select</td>
            <td>euint8</td>
            <td>44,726</td>
        </tr>
        <tr>
            <td>euint16</td>
            <td>66,044</td>
        </tr>
        <tr>
            <td>euint32</td>
            <td>114,741</td>
        </tr>
         <tr>
            <td>require</td>
            <td>*</td>
            <td>13,585</td>
        </tr>
            <tr>
            <td rowspan="3">div</td>
            <td>euint8</td>
            <td>93,423</td>
        </tr>
        <tr>
            <td>euint16</td>
            <td>273,790</td>
        </tr>
        <tr>
            <td>euint32</td>
            <td>1,003,200</td>
        </tr>
        <tr>
            <td rowspan="3">gt</td>
            <td>euint8</td>
            <td>4,389</td>
        </tr>
        <tr>
            <td>euint16</td>
            <td>6,061</td>
        </tr>
        <tr>
            <td>euint32</td>
            <td>9,405</td>
        </tr>
          <tr>
            <td rowspan="3">gte</td>
            <td>euint8</td>
            <td>4,389</td>
        </tr>
        <tr>
            <td>euint16</td>
            <td>6,061</td>
        </tr>
        <tr>
            <td>euint32</td>
            <td>9,405</td>
        </tr>
          <tr>
            <td rowspan="3">rem</td>
            <td>euint8</td>
            <td>93,423</td>
        </tr>
        <tr>
            <td>euint16</td>
            <td>273,790</td>
        </tr>
        <tr>
            <td>euint32</td>
            <td>1,003,200</td>
        </tr>
         <tr>
            <td rowspan="3">or</td>
            <td>euint8</td>
            <td>2,717</td>
        </tr>
        <tr>
            <td>euint16</td>
            <td>4,389</td>
        </tr>
        <tr>
            <td>euint32</td>
            <td>7,942</td>
        </tr>
            <tr>
            <td rowspan="3">xor</td>
            <td>euint8</td>
            <td>2,717</td>
        </tr>
        <tr>
            <td>euint16</td>
            <td>4,389</td>
        </tr>
        <tr>
            <td>euint32</td>
            <td>7,942</td>
        </tr>
            <tr>
            <td rowspan="3">eq</td>
            <td>euint8</td>
            <td>3,762</td>
        </tr>
        <tr>
            <td>euint16</td>
            <td>5,225</td>
        </tr>
        <tr>
            <td>euint32</td>
            <td>10,450</td>
        </tr>
                <tr>
            <td rowspan="3">ne</td>
            <td>euint8</td>
            <td>3,762</td>
        </tr>
        <tr>
            <td>euint16</td>
            <td>5,225</td>
        </tr>
        <tr>
            <td>euint32</td>
            <td>10,450</td>
        </tr>
                <tr>
            <td rowspan="3">min</td>
            <td>euint8</td>
            <td>8,569</td>
        </tr>
        <tr>
            <td>euint16</td>
            <td>15,675</td>
        </tr>
        <tr>
            <td>euint32</td>
            <td>28,215</td>
        </tr>
                     <tr>
            <td rowspan="3">max</td>
            <td>euint8</td>
            <td>8,569</td>
        </tr>
        <tr>
            <td>euint16</td>
            <td>15,675</td>
        </tr>
        <tr>
            <td>euint32</td>
            <td>28,215</td>
        </tr>
                     <tr>
            <td rowspan="3">shl</td>
            <td>euint8</td>
            <td>17,138</td>
        </tr>
        <tr>
            <td>euint16</td>
            <td>39,710</td>
        </tr>
        <tr>
            <td>euint32</td>
            <td>88,198</td>
        </tr>
              <tr>
            <td rowspan="3">shr</td>
            <td>euint8</td>
            <td>17,138</td>
        </tr>
        <tr>
            <td>euint16</td>
            <td>39,710</td>
        </tr>
        <tr>
            <td>euint32</td>
            <td>88,198</td>
        </tr>
              <tr>
            <td rowspan="3">not</td>
            <td>euint8</td>
            <td>2,508</td>
        </tr>
        <tr>
            <td>euint16</td>
            <td>4,598</td>
        </tr>
        <tr>
            <td>euint32</td>
            <td>7,524</td>
        </tr>
    </tbody>
</table>
