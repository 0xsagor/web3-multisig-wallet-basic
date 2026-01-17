import { connectWallet } from "./web3.js";
import { createTx, approveTx, executeTx, getTxStatus } from "./multisig.js";

document.getElementById("connectBtn").onclick = async () => {
  await connectWallet();
  const status = await getTxStatus();
  document.getElementById("status").innerText = "Wallet connected. Tx: " + status;
};

document.getElementById("createBtn").onclick = async () => {
  const to = document.getElementById("toInput").value;
  const amount = document.getElementById("amountInput").value;
  await createTx(to, amount);
  alert("Transaction created");
};

document.getElementById("approveBtn").onclick = async () => {
  await approveTx(0);
  alert("Transaction approved");
};

document.getElementById("executeBtn").onclick = async () => {
  await executeTx(0);
  alert("Transaction executed");
};
