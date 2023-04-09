import ethers from 'ethers';
import dotenv from 'dotenv';
dotenv.config();
const alchemyProvider = new ethers.providers.AlchemyProvider("goerli", process.env.API_KEY);
export default alchemyProvider