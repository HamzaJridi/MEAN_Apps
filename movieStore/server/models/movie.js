var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
    title : {type : String, required :true },
    director : {type : String, required :true },
    releaseDate : {type : Date, required :true },
    url : {type : String, required :true }

});

//Export the Model Schema
module.exports= movieSchema;