import contract from "../models/contract.js";
import db from "../models/database.js";
import moment from "moment/moment.js";
import sendEmail from "../models/email.js"
import { base58ToHex } from "../models/hashConversion.js";
const getValue=(speedLimit,speed)=>{
    return (speed-speedLimit)**4
}
const register=async(fineDetails,res)=>{
    const {firstName:firstName,lastName:lastName,id:id,driverLicense:driverLicense,email:email,phoneNumber:phoneNumber,licensePlate:licensePlate,licensePlateType:licensePlateType,speedLimit:speedLimit,speed:speed}=fineDetails
    const hash= await db.add({time:moment().format(),firstName:firstName,lastName:lastName,id:id,driverLicense:driverLicense,email:email,phoneNumber:phoneNumber,licensePlate:licensePlate,licensePlateType:licensePlateType,speedLimit:speedLimit,speed:speed})
    const hexHash=base58ToHex(hash)
    console.log(hexHash)
    const value= getValue(speedLimit,speed)
    sendEmail(email,"localhost:3000/"+hash)
    await contract.registerTicket(hexHash,value)

    const sendResult=(hash,value)=>{
        console.log("registered")
        if(hash==hexHash){
            res.send({hash:hash,value:value.toNumber(),registered:true})
            contract.off("registered",sendResult)
        }
    }
    contract.on("registered",sendResult)
    
}
export default register