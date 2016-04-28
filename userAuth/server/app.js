var express = require('express');
var debug = require('debug')('passport-mongo');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var mongoose = require('mongoose');
var hash = require('bcrypt-nodejs');
var path = require('path');
var passport = require('passport');
var localStrategy = require('passport-local' ).Strategy;
var port = process.env.PORT || 3000;

//mongoose
mongoose.connect('mongodb://localhost/mean-auth');

//mongoose userSchema Model
var User = require('./models/user.js');

//create an instance of express
var app = express();

//requiring Routes
var routes = require('./routes/api.js');

//define middlewares
//app.use(express.static(path.join(__dirname, '../client')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

// configure passport
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// routes
app.use('/user', routes);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public', 'index.html'));
});

app.get('/', function(req,res){
    res.send('Welcome to the API')
});

// error hndlers
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res) {
    res.status(err.status || 500);
    res.end(JSON.stringify({
        message: err.message,
        //name: err.name, to display the exact error : username or pwd
        error: {}
    }));
});


app.listen(port, function(){
    console.log('Gulp is running the App on PORT ' + port);
});

module.exports = app;