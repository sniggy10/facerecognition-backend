var express = require('express');
var router = express.Router();
const mongoose=require('mongoose');

var users = require('../models/userModel');

//Update entry count endpoint
router.put('/',(req,res)=>{

    users.updateOne({email : req.body.email},{ $inc: { entries : 1 }},
        (err, user) => { 
        if(!user)
        res.status(400).json("User does not exist");
    })  
    users.findOne({email : req.body.email},(err, user) => { 
        if(!user)
        res.status(400).json("User does not exist");
        else
        res.json(user.entries);
    })
})

module.exports = router;