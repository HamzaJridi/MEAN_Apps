/*
* in this file we  export the routes and their controllers
* and then load them in the  app.js file by :
* var routes = require('./routes');
* _.each(routes, function (controller, route) {}
* controller = require('./contllers/movieController');
* route = '/movie';
* */

//at the '/movie' route, execute the movieController code
module.exports = {
    '/movie' : require('./contllers/movieController')
};