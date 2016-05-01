var restful = require('node-restful');

module.exports = function(app, route) {

    /*Setup the controller for REST
    * app.models.movie : movie is the mongoose model exported from the ('models/index.js) file
    * restful.model('movie'... : is the collection name in the movieStore db*/
    var rest = restful.model('movie',app.models.movie).methods(['get', 'put', 'post', 'delete']);

    //Register thr rest API to the app's route
    rest.register(app, route);

    //Return middleware
    return function (req, res, next) {
        next();
    };
};