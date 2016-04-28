/**
 * Created by hamzajridi on 21/04/16.
 */
var express = require('express');
var app = express();
var routes = require('./routes')

app.set('view engine', 'ejs');
//add a local variable that'll be added in all views
app.locals.pagetitle = "Awesome Website"

/** if the views pages are not in a dir called "views"
 * you have to set the path like this :
 * "app.set('views', __dirname + '/DirName')" */

//get the route variables from the index.js file
app.get('/', routes.index);
app.get('/about', routes.about);

app.get('*', function(req, res){
    res.send('<h1>Bad Route!!!</h1> <h3>This page don\'t exist</h3>');
});

//set up the server
var server = app.listen(3000, function(){
    console.log('Listening on port 3000');
});