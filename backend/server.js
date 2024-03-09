const express= require('express');
const dotenv= require('dotenv');
dotenv.config();
const connectDB= require('./config/database');
//import express from 'express';
const port = process.env.PORT || 8080; // just in case our actual port is down we can use a default 8080
connectDB();
const app = express();


app.get('/',(req,res)=>{
res.send("server testing");
});

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})
