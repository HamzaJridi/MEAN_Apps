var express = require('express');
var app = express();
var mongojs = require('mongojs');
//wich mongo db we're going to use
var db = mongojs('contactlist', ['contactlist']);

//set the default folder for static files : html, js, css
app.use(express.static(__dirname + "/public"));

//set the route for the contactlist page
app.get('/contactlist', function(req, res) {
    console.log('I received a GET request');
    db.contactlist.find(function(err,docs){
        console.log(docs);
        res.json(docs);
    });
});

app.listen(3000);
console.log('Listening on port 3000');