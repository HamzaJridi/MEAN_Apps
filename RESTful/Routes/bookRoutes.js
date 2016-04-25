var express = require('express');
/** instead of using "var Book = require('../models/bookModel');"
 * we've put 'Book' as a parameter in the routes() and in
 * bookRouter = require('./Routes/bookRoutes')(Book) in
 * the app.js*/

var routes = function(Book){
    var bookRouter = express.Router();
    /** set the book route using bookRouter.route('newRoute') method*/
    bookRouter.route('/')
        //the post methode require the bodyParser
        .post(function(req,res){
            var book = new Book(req.body);
            book.save();
            res.status(201).send(book);
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

    bookRouter.route('/:bookId')
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
    return bookRouter
};

module.exports = routes;