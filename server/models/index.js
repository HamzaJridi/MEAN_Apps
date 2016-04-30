/*
* when we have a lot of models, as a pattern we create an index of models
* and then in the app.js file you load all those models
* app.models = require ('./models/index');
*/

module.exports = {
    movie: require('./movie')
    //if e.g we've a Car model
    //car : require('./car.js')
};