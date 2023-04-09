import express from "express";
import dotenv from "dotenv"
import cors from 'cors'
import fine from './routes/fine.js'
dotenv.config()
const app=express()
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json())
app.use('/',fine)
app.listen(process.env.PORT,()=> console.log("server started"))