const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var imageRouter = require('./routes/image');
require('dotenv/config');

const app = express();

mongoose.connect(process.env.DB_CONNECTION,
            {useNewUrlParser:true},)
            .then(()=>console.log("Connected to db"))
            .catch(err=>console.log(err))

app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('OK');
})

app.use('/login',loginRouter);
app.use('/register',registerRouter);
app.use('/image',imageRouter);

app.listen(3000,() => {
    console.log('App is running on port 3000')
})