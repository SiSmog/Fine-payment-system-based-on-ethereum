import express from 'express'
import test from '../controllers/test.js'
import query from '../controllers/query.js'
import register from '../controllers/register.js'
const router=express.Router()
router.get('/',(req,res)=>{
    var obj=register().then((result)=>{res.send(result);});
})

export default router