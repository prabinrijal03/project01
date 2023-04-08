const mongoose = require('mongoose');
const db = require('../config/db');
const {ObjectID} = require('mongodb');

const {Schema} = mongoose;

const userSchema = new Schema({
    id:{
        type: Number,
        required: true,
        unique: true
    },
    
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    }
});
const userModel = db.model('user', userSchema);
module.exports = userModel;