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

/** bookRouter is returned from the routes() method in
 * the bookRoutes.js file */
bookRouter = require('./Routes/bookRoutes')(Book);



/**
 * bookRouter'll load all the routes of the app
 *  every route'll be 'localhost:8000/api/newRoute'
 *  if you set app.use('/', bookRouter) the routes will be 'localhost:8000/newRoute'
 *  */
/** if we're on books route the 'bookRouter' will handle the page
 * also in author route the 'authorRoute' will handle the page
 * the routes() method that returns the bookRouter is the
 * real handler of the books route*/
app.use('/api/books', bookRouter);
//app.use('/api/authors', authorRouter);



app.get('/', function(req, res){
    res.send('Welcome to my API')
});

app.listen(port, function(){
    console.log('Gulp is running the app on port ' + port);
});
