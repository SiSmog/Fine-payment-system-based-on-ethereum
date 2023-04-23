import express from 'express'
import getTicket from '../controllers/getTicket.js'
import { getTicketById,getTicketByDriverLicense,getTicketByLicensePlate } from '../controllers/queryTicket.js'
import registerTicket from '../controllers/registerTicket.js'
import alchemyProvider from '../models/provider.js'
import contract from '../models/contract.js'
import { h } from 'vue'
const router=express.Router()
router.get('/:hash',(req,res)=>{
    getTicket(req.params.hash).then((result)=>{
        res.send({ticket:result[0].payload.value,value:result[1].toNumber()})
    })
})
router.get('/ticket/id/:id',(req,res)=>{
    getTicketById(req.params.id).then((result)=>{
        res.send(result)
    })
})
router.get('/ticket/driverlicense/:driverlicense',async(req,res)=>{
    const params = new URLSearchParams(req.params.driverlicense);
    await getTicketByDriverLicense(params.get("driverLicense")).then((result)=>{
        res.send(result)
    })
})
router.get('/ticket/licenseplate/:licenseplate',async(req,res)=>{
    const params = new URLSearchParams(req.params.licenseplate);
    await getTicketByLicensePlate(params.get("licensePlate")).then((result)=>{
        res.send(result)
    })
})

router.post('/',(req,res)=>{
    
    registerTicket(req.body,res)
    
})

export default router