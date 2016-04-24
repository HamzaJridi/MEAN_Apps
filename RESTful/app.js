var express = require('express');
var mongoose = require('mongoose');

/** open a connection to the db which is 'bookAPI'
 *  if the bookAPI db doesn(t exist it'll be created */
var db = mongoose.connect('mongodb://localhost/bookAPI');

var Book = require('./models/bookModel');

var app = express();
var port = process.env.PORT || 3000;

var bookRouter = express.Router();
/** set the book route using bookRouter.route('newRoute') method*/
bookRouter.route('/Books')
    .get(function(req,res){
        //Book is an instance of the book Schema at the bookModel.js file
        Book.find(function(err,books){
            if(err){
                res.status(500).send(err);
            } else {
                //display books data from the db as a json format
                res.json(books);
            }
        });
    });


/**
 * bookRouter'll load all the routes of the app
 *  every route'll be 'localhost:8000/api/newRoute'
 *  if you set app.use('/', bookRouter) the routes will be 'localhost:8000/newRoute'
 *  */
app.use('/api', bookRouter);



app.get('/', function(req, res){
    res.send('Welcome to my API')
});

app.listen(port, function(){
    console.log('Gulp is running the app on port' + port);
});
