var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    title: String,
    link: String,
    upvotes: {type: Number, default: 0},
    /*set the Comment as a reference for the comment datat type
     * the Comment is a Comment mongoose Schema in the Comment.js file */
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

PostSchema.methods.upvote = function(cb) {
    this.upvotes += 1;
    this.save(cb);
};

module.exports = mongoose.model('Post', PostSchema);