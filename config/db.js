const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://localhost:27017/project02').on('open', ()=>{
    console.log('Mongodb connected successfully');
}).on('error',()=>{
    console.log('Mongodb connection error');
});
module.exports = connection;