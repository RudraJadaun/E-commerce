const express= require('express');
const dotenv= require('dotenv');
dotenv.config();
const connectDB= require('./config/database');

//import express from 'express';
const product=require('./models/products');
const ProductRoutes= require('./routes/productRoute');
const { notFound, errorHandler }=require('./middleware/errorType');
const port = process.env.PORT || 8080; // just in case our actual port is down we can use a default 8080
connectDB();
const app = express();



app.get('/',(req,res)=>{
res.send("server testing");
});


app.use('./api/products',ProductRoutes); // froms  the baseURL for all the routes in ProductRoutes file

app.use(notFound);
app.use(errorHandler);





app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})
