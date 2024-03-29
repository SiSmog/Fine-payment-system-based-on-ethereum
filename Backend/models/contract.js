import contractABI from "./contractABI.js"
import {ethers} from 'ethers';
import provider from "./provider.js";

const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const Contract = new ethers.Contract(contractABI.address, contractABI.ABI, signer);

export default Contract