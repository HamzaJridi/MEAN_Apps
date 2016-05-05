var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/todoApp');
var Task = require('./models/taskModel');

app.use(express.static(__dirname + './public'));

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

todoRouter = require('./routes/todoRouter')(Task);
app.use('/myTasks', todoRouter);

app.get('/', function (req, res) {
    res.send('Hello, to access the App, go to localhost:8000/myTasks')
})
app.listen(port, function(){
    console.log('The app is running on port ', port);
});