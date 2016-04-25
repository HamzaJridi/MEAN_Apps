var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

/** open a connection to the db which is 'bookAPI'
 *  if the bookAPI db doesn(t exist it'll be created */
var db = mongoose.connect('mongodb://localhost/bookAPI');

var Book = require('./models/bookModel');

var app = express();
var port = process.env.PORT || 3000;

/** the bodyParser'll llok at the body, and if it has a json
 * objct in it, it'll add it to the req.body by the post method*/
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var bookRouter = express.Router();
/** set the book route using bookRouter.route('newRoute') method*/
bookRouter.route('/Books')
    //the post methode require the bodyParser
    .post(function(req,res){
        var book = new Book(req.body);
        console.log(book);
        res.send(book);
    })
    .get(function(req,res){
        /** if we pass the url 'api/book?genre=Fiction'
         * express will format this url query in a json format using req.query
         * and the reslt will be req.query = { genre:'Fiction' }*/
        var query =  {};
        if(req.query.genre){//filtering books by genre if only exist
            query.genre = req.query.genre;
        }

        //Book is an instance of the book Schema at the bookModel.js file
        Book.find(query, function(err,books){
            if(err){
                res.status(500).send(err);
            } else {
                //display books data from the db as a json format
                res.json(books);
            }
        });
    });

bookRouter.route('/books/:bookId')
    .get(function(req,res){
        /** getting a single book item by its Id */
        //get the id passed in the url using req.params
        Book.findById(req.params.bookId, function(err,book){
            if(err){
                res.status(500).send(err);
            } else {
                //display books data from the db as a json format
                res.json(book);
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
    console.log('Gulp is running the app on port ' + port);
});
