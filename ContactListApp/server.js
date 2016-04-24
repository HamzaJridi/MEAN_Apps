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
/** app.post : listen to the post request from the Ctrl (input data by addContact method)
 * insert the data in the db and send it back to th ctrl to display it*/
app.post('/contactlist', function(req, res){
    /**console the received data from the post req
     * 'req.body' require the 'body-parser module to teach the server how to parse the input's body'*/
    console.log(req.body);
    //insert into db
    db.contactlist.insert(req.body, function(err,doc){
        /**doc : the item parsed and received
         * res.json(doc) : send back the data to the Ctrl*/
        res.json(doc);
    });
});

app.listen(3000);
console.log('Listening on port 3000');