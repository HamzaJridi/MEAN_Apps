var express = require('express');
var app = express();
var mongojs = require('mongojs');
/* wich mongo db we're going to use
* the db = user, collection = [users]
* you can set a list of collections in the passed array */
var db = mongojs('user', ['users']);
var bodyParser = require('body-parser');

//set the default folder for static files : html, js, css
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

/*set the route for the contactlist page
* users is the collection name in the user db */
app.get('/aaa', function(req, res) {
    console.log('I received a GET request');
    /*docs : data already in the db
     * find() : get the data in the db*/
    db.users.find(function(err,docs){
        console.log(docs);
        res.json(docs);
    });
});
/* app.post : listen to the post request from the Ctrl (input data by addContact method)
 * insert the data in the db and send it back to th ctrl to display it*/
app.post('/bbb', function(req, res){
    /*console the received data from the post req
     * 'req.body' require the 'body-parser module to teach the server how to parse the input's body'
     * req.body : the inputted data in fields */
    console.log(req.body);
    //insert into db and send back the data(doc) to the cntrller
    db.users.insert(req.body, function(err,doc){
        /*doc : the item parsed and received
         * res.json(doc) : send back the data to the Ctrl*/
        res.json(doc);
    });
});

app.delete('/users/:id', function(req, res){
    //get the id value sent by the cntrl from the url by "req.params"
    var id = req.params.id;
    console.log(id);
    db.users.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
        res.json(doc);
    });
});

//respond to the get req from the controller (the edit method)
app.get('/users/:id', function(req, res){
    var id = req.params.id;
    console.log(id);
    //find the clicked contact in the db and send it back to the contrller
    db.users.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
        res.json(doc);
    });

});

app.put('/users/:id', function(req, res){
    var id = req.params.id;
    console.log(req.body.name);
    db.users.findAndModify({
        query: {_id: mongojs.ObjectId(id)},
        update: {$set: {name : req.body.name, email : req.body.email, number : req.body.number}},
        new: true}, function(err, doc){
        res.json(doc);
    });
});

app.listen(3000);
console.log('Listening on port 3000');
