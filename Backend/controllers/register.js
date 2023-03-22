import contract from "../models/contract.js";
import db from "../models/database.js";
import moment from "moment/moment.js";
const getValue=(speedLimit,speed)=>{
    return (speed-speedLimit)**2
}
const register=async(fineDetails)=>{
    const {firstName:firstName,lastName:lastName,id:id,driverLicense:driverLicense,email:email,phoneNumber:phoneNumber,licensePlate:licensePlate,speedLimit:speedLimit,speed:speed}=fineDetails
    const hash=db.add({time:moment().format(),firstName:firstName,lastName:lastName,id:id,driverLicense:driverLicense,email:email,phoneNumber:phoneNumber,licensePlate:licensePlate})
    const value= getValue(speedLimit,speed)
    return await contract.register(hash,value)
}
export default register