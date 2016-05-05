var express = require('express');
var app = express();
app.use(express.static(__dirname + './public'));

var port = process.env.PORT || 3000;


app.get('/', function (req, res) {
    res.send('Hello MEAN')
})
app.listen(port, function(){
    console.log('The app is running on port ', port);
});