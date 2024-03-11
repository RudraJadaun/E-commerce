const express= require('express');
const router=express.Router();
const User =require('../models/user'); // later we will use the data in mongoDb this just for test
const wrapAsync =require('../middleware/errorHandling');

//router.get('/',)


module.exports=router;