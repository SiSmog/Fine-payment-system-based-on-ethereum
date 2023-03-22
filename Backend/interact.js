import {test} from "./contracts.js"
import dotenv from 'dotenv';
import ethers from 'ethers';

dotenv.config();

const alchemyProvider = new ethers.providers.AlchemyProvider("goerli", process.env.API_KEY);

const signer = new ethers.Wallet(process.env.PRIVATE_KEY, alchemyProvider);

const Contract = new ethers.Contract(test.address, test.abi, signer);

export const save=async(address,value)=>{

    var res=await Contract.save(address,value);

    return res  
}

export const pay=async(address,value)=>{

    var res=await Contract.pay(address,{value:value});

    return res  
}