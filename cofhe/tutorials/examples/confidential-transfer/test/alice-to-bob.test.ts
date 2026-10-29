import hre from 'hardhat';
import { expect } from 'chai';
import { Encryptable, FheTypes } from '@cofhe/sdk';

describe('Alice sends Bob a confidential payment', () => {
  it('moves 100 tokens that only Alice and Bob can read', async () => {
    // #region setup
    const [alice, bob, eve] = await hre.ethers.getSigners();

    // Alice deploys the token. The constructor mints 1,000 tokens to her.
    const token = await hre.ethers.deployContract('ConfidentialToken', [], alice);
    const tokenAddress = await token.getAddress();

    // One CoFHE client per person. In tests, the plugin creates it connected.
    const aliceClient = await hre.cofhe.createClientWithBatteries(alice);
    const bobClient = await hre.cofhe.createClientWithBatteries(bob);
    const eveClient = await hre.cofhe.createClientWithBatteries(eve);
    // #endregion setup

    // #region encrypt
    // Alice encrypts the amount on her machine, for this token contract only.
    const [amount, proof] = await aliceClient
      .encryptInputs([Encryptable.uint64(100n)])
      .setConsumingContract(tokenAddress)
      .execute();
    // #endregion encrypt

    // #region transfer
    // The amount goes onchain encrypted. Everyone sees the transfer, nobody sees how much.
    await token.connect(alice)['confidentialTransfer(address,bytes32,bytes)'](bob.address, amount, proof);
    // #endregion transfer

    // #region bob-reads
    // Bob reads his balance: an encrypted handle, decrypted for his eyes only.
    const bobBalance = await bobClient
      .decryptForView(await token.confidentialBalanceOf(bob.address), FheTypes.Uint64)
      .execute();
    expect(bobBalance).to.equal(100n);

    const aliceBalance = await aliceClient
      .decryptForView(await token.confidentialBalanceOf(alice.address), FheTypes.Uint64)
      .execute();
    expect(aliceBalance).to.equal(900n);
    // #endregion bob-reads

    // #region eve-fails
    // Eve can fetch Bob's handle, but the ACL refuses to decrypt it for her.
    const bobHandle = await token.confidentialBalanceOf(bob.address);
    await expect(eveClient.decryptForView(bobHandle, FheTypes.Uint64).execute()).to.be.rejectedWith(/NotAllowed/);
    // #endregion eve-fails
  });

  it('moves nothing when the sender does not have enough', async () => {
    const [alice, bob] = await hre.ethers.getSigners();
    const token = await hre.ethers.deployContract('ConfidentialToken', [], alice);
    const tokenAddress = await token.getAddress();
    const aliceClient = await hre.cofhe.createClientWithBatteries(alice);

    // #region overdraw
    // Alice has 1,000 and tries to send 5,000. The transfer does not revert:
    // a revert would tell everyone her balance is below 5,000. It moves 0 instead.
    const [tooMuch, proof] = await aliceClient
      .encryptInputs([Encryptable.uint64(5_000n)])
      .setConsumingContract(tokenAddress)
      .execute();
    await token.connect(alice)['confidentialTransfer(address,bytes32,bytes)'](bob.address, tooMuch, proof);

    const aliceBalance = await aliceClient
      .decryptForView(await token.confidentialBalanceOf(alice.address), FheTypes.Uint64)
      .execute();
    expect(aliceBalance).to.equal(1_000n);
    // #endregion overdraw
  });
});
