var express = require('express');
var debug = require('debug')('passport-mongo');

var app = express();
var port = process.env.PORT || 3000;


app.get('/', function(req,res){
    res.send('Welcome to the API')
});

app.listen(port, function(){
    console.log('Gulp is running the App on PORT ' + port);
})