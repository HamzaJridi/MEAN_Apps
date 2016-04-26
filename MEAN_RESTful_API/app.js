var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
//var mongodb = require('mongodb');
var mongoose = require('mongoose');
//var ObjectID = mongodb.ObjectID;


var db = mongoose.connect('mongodb://localhost/contacts');
//var CONTACTS_COLLECTION = "contacts";

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log('The App is running on port ', port);
});


// CONTACTS API ROUTES

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
}

/*  "/contacts"
 *    GET: finds all contacts
 *    POST: creates a new contact
 */

app.get('/contacts', function(req,res){
    res.send("you're in the contacts page");
});
app.post('/contacts', function(req,res){

});

/*  "/contacts/:id"
 *    GET: find contact by id
 *    PUT: update contact by id
 *    DELETE: deletes contact by id
 */

app.get('/contacts/:id', function(req,res){

});

app.put('/contacts/:id', function(req,res){

});

app.delete('/contacts/:id', function(req,res){

});