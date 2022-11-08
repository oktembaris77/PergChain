const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('ea50ae71419e7e6c65db2972ecd75970ae0ddeee65b30e632dbfe35ba68950a7');
const myWalletAddress = myKey.getPublic('hex');

let pergChain = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
pergChain.addTransaction(tx1);



console.log("\nStarting the miner.");
pergChain.minePendingTransactions(myWalletAddress);
console.log("\nBalance of gorson is", pergChain.getBalanceOfAddress(myWalletAddress));

pergChain.chain[1].transactions[0].amount = 1;

console.log("Is chain valid? ", pergChain.isChainValid());