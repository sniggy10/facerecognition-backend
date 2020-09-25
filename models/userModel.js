const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
    entries : { type :Number, default:0},
    joined : { type: Date, default: Date.now },
})

var users = mongoose.model("Users",userSchema);
module.exports = users;