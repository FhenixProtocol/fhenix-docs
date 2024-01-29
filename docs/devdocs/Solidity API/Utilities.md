# Utility Contracts

#### Encrypted Address

Encrypting address is not an easy task as we currently only support encrypted uint32s (4 bytes) and address are formed out of 20 bytes.
We created a tool that implements `Eaddress` which is formed by 5 uint32s.
This utility allows you to do some operations on encrypted addresses.
The tool can be imported from: TBD
An example of how to use the tool can be found it: TBD

#### Random Number

Confidentiality is a crucial step in order to achieve on-chain randomness. Fhenix, as a chain that implements confidentiality, is a great space to implement and use on-chain random numbers and this is part of our roadmap.
We know that there are some #BUIDLers that are planning to implement dapps that leverage both confidentiality and random numbers so until we will have on-chain true random we are suggesting to use the following implementation as a MOCKUP.
PLEASE NOTE THAT THIS RANDOM NUMBER IS VERY PREDICTABLE AND CAN'T BE REALLY TRUSTED

```javascript
library RandomMock {
    function getFakeRandom() internal returns (uint256) {
        uint blockNumber = block.number;
        uint256 blockHash = uint256(blockhash(blockNumber));

        return blockHash;
    }

    function getFakeRandomU8() public view returns (euint8) {
        uint8 blockHash = uint8(getFakeRandom());
        return FHE.asEuint8(blockHash);
    }

    function getFakeRandomU16() public view returns (euint16) {
        uint16 blockHash = uint16(getFakeRandom());
        return FHE.asEuint16(blockHash);
    }

    function getFakeRandomU32() public view returns (euint32) {
        uint32 blockHash = uint32(getFakeRandom());
        return FHE.asEuint32(blockHash);
    }
}
```
