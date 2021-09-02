const express = require("express");
const { request } = require("http");
const app = express();

app.get('/', (request, response)=>{
    console.log(request);
    response.send('Hello World!');
});

app.get('/contact', (request, response)=>{
    response.send('+37255566612');
});

app.get('*', (req, res)=>{
    res.send("404 not found");
});

app.listen(3000, function(){
    console.log("Server is running on 3000");
});