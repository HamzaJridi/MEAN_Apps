var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var bookRouter = express.Router();
/** set the book route using bookRouter.route('newRoute') method*/
bookRouter.route('/Books')
    .get(function(req,res){
        var responseJson = {hello:'This is from the API'};
        res.json(responseJson)
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
