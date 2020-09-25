var express = require('express');
var router = express.Router();
const mongoose=require('mongoose');
const bcrypt = require('bcrypt-nodejs');

var users = require('../models/userModel');

//Register endpoint
router.post('/',(req,res)=>{
    const {email,name,password}=req.body;
    const hash = bcrypt.hashSync(password);
    const user = {
        name : name,
        email : email,
        password : hash
    }
    users.create(user)
    .then(user=>res.json(user))
    .catch(err=>console.log(err))
})

module.exports = router;
