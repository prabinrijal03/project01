const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./config/db');
const userModel = require('./model/user.model');

app.use(bodyParser.json());

const port = process.env.port || 3000;
app.listen(port, (req,res)=>{
    console.log(`Server started at port ${port}`);
});