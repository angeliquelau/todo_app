const app = require('./app'); //everything in app.js will get imported into this file
const db = require('./config/db');
const userModel = require('./model/user.model');
const todoModel = require('./model/todo.model');

const port = 3000;

app.get('/', (req,res) => {
    res.send("Hello world");
});

app.listen(port,()=>{
    console.log(`Server Listening on Port http://localhost:${port}`);
});