var express = require('express');
var router = express.Router();
const mongoose=require('mongoose');
const bcrypt = require('bcrypt-nodejs');

var users = require('../models/userModel');

//Login endpoint
router.post('/',(req,res)=>{
    users.findOne({email : req.body.email},
        (err, user) => { 
        if(!user)
        res.status(400).json("User does not exist");
        else
        {
            const isValid = bcrypt.compareSync(req.body.password, user.password)
                if (isValid) {
                    res.json(user);
                } else {
                 res.status(400).json("Error");
                }
        }
    })
})

module.exports = router;