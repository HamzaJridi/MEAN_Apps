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

    /** create a Middleware to get the bookId and use it
     * in get,put and patch requests for a single book */

    bookRouter.use('/:bookId',function(req,res,next){
        /** getting a single book item by its Id */
        //get the id passed in the url using req.params
        Book.findById(req.params.bookId, function(err,book){
           if(err){
               res.status(500).send(err);
           } else if (book){
               req.book = book;
               next();
           } else {
               res.status(404).send('Book not found');
           }
        });
    });

    bookRouter.route('/:bookId')
        //get a specific item by its id and display it
        .get(function(req,res){
            //req.book = book in the middleware
            res.json(req.book);
        })
        //get a specific item by its id to update it
        .put(function(req,res){
            /** getting a single book item by its Id */
            //get the id passed in the url using req.params
            /**replace the book properties with what has
             * come back from the req using req.body*/
            req.book.title = req.body.title;
            req.book.author = req.body.author;
            req.book.genre = req.body.genre;
            req.book.read = req.body.read;
            //save changes in the db
            req.book.save(function(err){
                if(err){
                    res.status(500).send(err);
                } else {
                    res.json(req.book);
                }
            });
            //send back book to display it as a json frmt
        })

        .patch(function(req,res){
            if (req.body._id) {
                delete req.body._id;
            }
            for (var p in req.body) {
                req.book[p] = req.body[p];
            }
            req.book.save(function(err){
                if(err){
                    res.status(500).send(err);
                } else {
                    res.json(req.book);
                }
            });
        });

    return bookRouter
};

module.exports = routes;