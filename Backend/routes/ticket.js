import express from 'express'
import getTicket from '../controllers/getTicket.js'
import { getTicketById } from '../controllers/queryTicket.js'
import registerTicket from '../controllers/registerTicket.js'
import alchemyProvider from '../models/provider.js'
import contract from '../models/contract.js'
const router=express.Router()
router.get('/:hash',(req,res)=>{
    getTicket(req.params.hash).then((result)=>{
        res.send({ticket:result[0].payload.value,value:result[1].toNumber()})
    })
})
router.get('/ticket/id/:id',(req,res)=>{
    console.log(req.params.id)
    getTicketById(req.params.id).then((result)=>{
        res.send(result)
    })
})

router.post('/',(req,res)=>{
    registerTicket(req.body)
    contract.once("registered",(hash,value)=>{
        res.send({hash:hash,value:value.toNumber(),registered:true})
    })
})

export default router