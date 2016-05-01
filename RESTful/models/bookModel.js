var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookModel = new Schema({
    title: {
        type: String
    },
    author: {type: String},
    genre: {type: String},
    read: {type: Boolean, default:false}
});
/**Book is an instance of the bookModel Schema
 * create and export the Book as a bookModel instance*/
module.exports= mongoose.model('Book', bookModel);