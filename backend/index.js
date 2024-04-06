//git init
//npm init
//npm i nodemon concurrently（同时启动多个server） -D
//npm i express cors json-server axios

const express = require('express');
const cors = require('cors');
const router = require('./routes/index');
//create server
const app = express();

app.use(cors());
app.use('/api',router);

const port = 80;
app.listen(port, function(req,res){
    console.log('Server is running on http://localhost:80')
})