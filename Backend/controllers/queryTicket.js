import { getTicketDataById,getTicketDataByDriverLicense,getTicketDataByLicensePlate } from "../models/ticket.js";
import { base58ToHex } from "../models/hashConversion.js";
import contract from '../models/contract.js'

export const getTicketById = async (Id) => {
    const res = await getTicketDataById(Id);
    if(res.length>0){
    const keys = res.map((element) => base58ToHex(element.hash));
    const values =await contract.getTicketValues(keys)
    for (let i = 0; i < res.length; i++) {
      res[i].value = values[i].toNumber();
    }
    }
    return res;
};

export const getTicketByDriverLicense = async (DriverLicense) => {
    const res = await getTicketDataByDriverLicense(DriverLicense);
    if(res.length>0){
        const keys = res.map((element) => base58ToHex(element.hash));
        const values =await contract.getTicketValues(keys)
        for (let i = 0; i < res.length; i++) {
          res[i].value = values[i].toNumber();
        }
    }
    return res;
};
  
export const getTicketByLicensePlate = async (LicensePlate) => {
    const res = await getTicketDataByLicensePlate(LicensePlate);
    if(res.length>0){
    const keys = res.map((element) => base58ToHex(element.hash));
    const values =await contract.getTicketValues(keys)
    for (let i = 0; i < res.length; i++) {
      res[i].value = values[i].toNumber();
    }
    }
    return res;
};
  

  
