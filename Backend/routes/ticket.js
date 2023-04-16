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
router.get('/ticket/id',async(req,res)=>{
    await getTicketById(req.body.id).then((result)=>{
        res.send(result)
    })
})
router.get('/ticket/driverlicense',async(req,res)=>{
    await getTicketByDriverLicense(req.body.driverLicense).then((result)=>{
        res.send(result)
    })
})
router.get('/ticket/licenseplate',async(req,res)=>{
    await getTicketByLicensePlate(req.body.licensePlate).then((result)=>{
        res.send(result)
    })
})

router.post('/',(req,res)=>{
    
    registerTicket(req.body,res)
    
})

export default router