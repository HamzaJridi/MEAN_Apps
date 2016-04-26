var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactModel = new Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    phoneNumbers: {
        mobile: {type : String},
        work: {type : String}
    },
    adresses: {
        home: {type : String},
        work: {type : String}
    },
});
/**Contact is an instance of the bookModel Schema
 * create and export the Book as a bookModel instance*/
module.exports= mongoose.model('Contact', contactModel);