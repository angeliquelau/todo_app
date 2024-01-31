const mongoose = require('mongoose');

//connect to mongodb 
const connection = mongoose.createConnection('mongodb://localhost:27017/newToDo').on('open', ()=>{
    console.log("mongodb connected");
}).on('error', ()=>{
    console.log('mongdodb connection');
}); 


module.exports = connection;