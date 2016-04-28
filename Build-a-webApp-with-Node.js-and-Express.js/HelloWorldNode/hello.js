/**
 * Created by hamzajridi on 21/04/16.
 */
//add http module
var http = require('http');
//create a server
var myServer = http.createServer(function(request,response){
    response.writeHead(200, {"Content-Type":"text/html"});
    response.write("<strong>Hello</strong> World");
    response.end();
});

myServer.listen(3000);
console.log("Go to http://localhost:3000");