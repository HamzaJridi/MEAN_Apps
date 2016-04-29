var require = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = Schema({
    title : {type : String, required :true },
    director : {type : String, required :true },
    release_date : {type : Date, required :true },
    url : {type : String, required :true }

});

//Export the Model Schema
module.exports= movieSchema;