var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(req, res) {
    console.log('I received a GET request');

    person1 = {
            name : "tim",
            email:"time@me.com",
            number:"(111) 111 1111"
        };
    person2 = {
            name : "Emily",
            email: "emily@me.com",
            number: "(222) 222 2222"
        };
    person3 = {
            name : "John",
            email:"john@me.com",
            number:"(333) 333 3333"
        };

    var contactlist = [person1, person2, person3];
    res.json(contactlist);
});

app.listen(3000);
console.log('Listening on port 3000');