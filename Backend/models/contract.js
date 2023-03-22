import contractABI from "./contractABI.js"
import dotenv from 'dotenv';
import ethers from 'ethers';

dotenv.config();

const alchemyProvider = new ethers.providers.AlchemyProvider("goerli", process.env.API_KEY);

const signer = new ethers.Wallet(process.env.PRIVATE_KEY, alchemyProvider);

const Contract = new ethers.Contract(contractABI.address, contractABI.ABI, signer);

export default Contract