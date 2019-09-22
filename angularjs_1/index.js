var requirejs= require('requirejs');
const express = require('express');
const app = express()
requirejs.config({
    nodeRequire: require
});
app.get('/',function(req,res){
    res.send("Hello World")
});
app.listen(3000,function(){console.log('Listening on port 3000')})