import contract from "../models/contract.js";
import db from "../models/database.js";
import moment from "moment/moment.js";
import sendEmail from "../models/email.js"
import { base58ToHex } from "../models/hashConversion.js";
const getValue=(speedLimit,speed)=>{
    return (speed-speedLimit)**2
}
const register=async(fineDetails)=>{
    const {firstName:firstName,lastName:lastName,id:id,driverLicense:driverLicense,email:email,phoneNumber:phoneNumber,licensePlate:licensePlate,licensePlateType:licensePlateType,speedLimit:speedLimit,speed:speed}=fineDetails
    const hash= await db.add({time:moment().format(),firstName:firstName,lastName:lastName,id:id,driverLicense:driverLicense,email:email,phoneNumber:phoneNumber,licensePlate:licensePlate,licensePlateType:licensePlateType,speedLimit:speedLimit,speed:speed})
    const value= getValue(speedLimit,speed)
    console.log(value)
    console.log(hash)
    sendEmail(email,"localhost:3000/"+hash)
    return await contract.register(base58ToHex(hash),value)

    
}
export default register