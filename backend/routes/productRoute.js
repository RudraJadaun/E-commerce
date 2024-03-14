const express= require('express');
const router=express.Router();
//const mongoose=require('mongoose');
const Product =require('../models/products'); // later we will use the data in mongoDb this just for test
const wrapAsync =require('../middleware/errorHandling'); // our custom error handler
// const dotenv =require ('dotenv');
// const connectDB =require('../config/database.js');

// dotenv.config();

// connectDB();


router.get('/api/products', wrapAsync(async (req,res)=>{
    const products =  await Product.find({});// passing empty object to get all product
    //res.send("hello");
    res.json(products);
}));

router.get('/api/products/work',(req,res)=>{
    res.send("work please");
})


router.get('/api/products/:id', wrapAsync(async(req,res)=>{
    const product= await Product.findById(req.params.id);
    if(product){
return res.json(product);
    }
        res.status(404).json({message:"Product not available"});
      
}));

module.exports=router;