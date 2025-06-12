import express from "express";
import mongoose from "mongoose";
import dataRoute from "./routes/dataRoute.js";
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();
const port=process.env.PORT;
const app=express()
app.use(express.json());
app.use(cors())
// mongoose.connect(MONGO_URL)
const mongoURI = process.env.MONGODB_URL;
mongoose.connect(mongoURI)
.then(()=>{
    console.log("mongodb connected successfully")
})
.catch(err=>{
    console.log(err)
})

app.use("/api",dataRoute)
app.listen(port,()=>{
    console.log(`Server is running on the port ${port}`)
})