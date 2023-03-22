import express from "express";
import dotenv from "dotenv"
import test from './routes/test.js'
dotenv.config()
const app=express()
app.use(express.json())
app.use('/',test)
app.listen(process.env.PORT,()=> console.log("server started2"))