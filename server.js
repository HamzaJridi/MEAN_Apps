var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/contactList', function(req, res) {
    console.log('I received a GET request');
    res.send('I received a GET request');
    var contactList = [
        {
            name : "tim",
            email : "time@me.com",
            number : "(111) 111 1111"
        },
        {
            name : "Emily",
            email : "emily@me.com",
            number : "(222) 222 2222"
        },
        {
            name : "John",
            email : "john@me.com",
            number : "(333) 333 3333"
        }

    ];
    res.json(contactList);
});

app.listen(3000);
console.log('Listening on port 3000');