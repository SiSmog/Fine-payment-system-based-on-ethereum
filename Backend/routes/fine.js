import express from 'express'
import getFineData from '../controllers/getFineData.js'
import register from '../controllers/register.js'
const router=express.Router()
router.get('/',(req,res)=>{
    const data=getFineData(req.data.hash)
    res.send(data)
})
router.post('/',(req,res)=>{
    console.log(req.body)
    register(req.body).then((result)=>{res.send(result)})
})

export default router