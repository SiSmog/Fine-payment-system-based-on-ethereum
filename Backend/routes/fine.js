import express from 'express'
import getFineData from '../controllers/getFineData.js'
import register from '../controllers/register.js'
import alchemyProvider from '../models/provider.js'
const router=express.Router()
router.get('/',(req,res)=>{
    const data=getFineData(req.data.hash)
    res.send(data)
})
router.post('/',(req,res)=>{
    const transaction=register(req.body)
    transaction.then((result)=>{
        alchemyProvider.waitForTransaction(result.hash).then((result)=>{
            res.send({mined:result.status && result.confirmations>0})
        })
    })
})

export default router