import { ethers } from "ethers";
import { getProvider } from "./web3.js";

const multisigAddress = "0xYourMultiSigContract";
const abi = [];

export async function createTx(to, amount) {
  const provider = getProvider();
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(multisigAddress, abi, signer);
  await contract.createTransaction(to, amount);
}

export async function approveTx(index) {
  const provider = getProvider();
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(multisigAddress, abi, signer);
  await contract.approveTransaction(index);
}

export async function executeTx(index) {
  const provider = getProvider();
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(multisigAddress, abi, signer);
  await contract.executeTransaction(index);
}

export async function getTxStatus() {
  const provider = getProvider();
  const contract = new ethers.Contract(multisigAddress, abi, provider);
  return await contract.getStatus(0);
}
