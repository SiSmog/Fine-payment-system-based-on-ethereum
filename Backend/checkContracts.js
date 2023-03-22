// Setup
import { Network, Alchemy } from 'alchemy-sdk';
import dotenv from 'dotenv';

dotenv.config();
const API_KEY=process.env.API_KEY;
const PUBLIC_KEY=process.env.PUBLIC_KEY;


const settings = {
    apiKey: API_KEY,
    network: Network.ETH_GOERLI,
};

const alchemy = new Alchemy(settings);

// Get the latest block
const latestBlock = alchemy.core.getBlockNumber();

// Get all outbound transfers for a provided address
alchemy.core
    .getTokenBalances(PUBLIC_KEY)
    .then(console.log);

