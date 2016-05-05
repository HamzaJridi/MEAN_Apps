var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskModel = new Schema({
  details: {type:String},
  done: {type :Boolean, default: false}
});

module.exports = mongoose.model('Task', taskModel);