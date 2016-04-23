var express = require('express');
var app = express();
var mongojs = require('mongojs');
//wich mongo db we're going to use
var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');

//set the default folder for static files : html, js, css
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

//set the route for the contactlist page
app.get('/contactlist', function(req, res) {
    console.log('I received a GET request');
    db.contactlist.find(function(err,docs){
        console.log(docs);
        res.json(docs);
    });
});
//listen to the post request from the Ctrl (input data by addContact method)
app.post('/contactlist', function(req, res){
    /**console the received data from the post req
     * req.body require the 'body-parser module to teach the server how to parse the input's body'*/
    console.log(req.body)
});

app.listen(3000);
console.log('Listening on port 3000');