import hre from 'hardhat';
import { ethers } from 'ethers';
import { Encryptable, FheTypes } from '@cofhe/sdk';
import { createCofheConfig, createCofheClient } from '@cofhe/sdk/node';
import { Ethers6Adapter } from '@cofhe/sdk/adapters';
import { chains } from '@cofhe/sdk/chains';

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing ${name}. Copy .env.example to .env and fill it in.`);
  }
  return value;
}

// #region sepolia
async function connectedClient(wallet: ethers.Wallet) {
  const client = createCofheClient(createCofheConfig({ supportedChains: [chains.sepolia] }));
  const { publicClient, walletClient } = await Ethers6Adapter(wallet.provider!, wallet);
  await client.connect(publicClient, walletClient);
  // Signing an ACP once lets this wallet decrypt the values it is allowed to see.
  await client.acp.getOrCreateSelfACP();
  return client;
}
// #endregion sepolia

async function main() {
  const provider = new ethers.JsonRpcProvider(requireEnv('SEPOLIA_RPC_URL'));
  const alice = new ethers.Wallet(requireEnv('ALICE_PRIVATE_KEY'), provider);
  const bob = new ethers.Wallet(requireEnv('BOB_PRIVATE_KEY'), provider);

  console.log('Alice deploys the token...');
  const token = await hre.ethers.deployContract('ConfidentialToken', [], alice);
  await token.waitForDeployment();
  const tokenAddress = await token.getAddress();
  console.log(`Token: https://sepolia.etherscan.io/address/${tokenAddress}`);

  const aliceClient = await connectedClient(alice);
  const bobClient = await connectedClient(bob);

  const [amount, proof] = await aliceClient
    .encryptInputs([Encryptable.uint64(100n)])
    .setConsumingContract(tokenAddress)
    .execute();

  const tx = await token.connect(alice)['confidentialTransfer(address,bytes32,bytes)'](bob.address, amount, proof);
  await tx.wait();
  console.log(`Transfer: https://sepolia.etherscan.io/tx/${tx.hash}`);

  const bobBalance = await bobClient
    .decryptForView(await token.confidentialBalanceOf(bob.address), FheTypes.Uint64)
    .execute();
  const aliceBalance = await aliceClient
    .decryptForView(await token.confidentialBalanceOf(alice.address), FheTypes.Uint64)
    .execute();
  console.log(`Bob's balance: ${bobBalance}`);
  console.log(`Alice's balance: ${aliceBalance}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
