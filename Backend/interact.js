import {test} from "./contracts.js"
import dotenv from 'dotenv';
import {ethers} from 'ethers';

dotenv.config();
var provider = ethers.getDefaultProvider("https://eth-sepolia.g.alchemy.com/v2/MPY2H1oaWmXk0nIUxewusX9z1KPxit7Z");
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const Contract = new ethers.Contract(contractABI.address, contractABI.ABI, signer);
console.log(provider)