var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET posts page. */
router.get('/posts', function(req, res, next) {
    Post.find(function(err, posts){
        if(err){ return next(err); }

        res.json(posts);
    });
});

router.post('/posts', function(req, res, next) {
    var post = new Post(req.body);

    post.save(function(err, post){
        if(err){ return next(err); }

        res.json(post);
    });
});

//get the post objects by its ID
router.param('post', function(req, res, next, id) {
    var query = Post.findById(id);

    query.exec(function (err, post){
        if (err) {
            return next(err);
        } else if (!post)
        {
            return next(new Error('can\'t find post'));
        } else {
            req.post = post;
            return next();
        }


    });
});

// return a post
router.get('/posts/:post', function(req, res, next) {
    req.post.populate('comments', function(err, post) {
        res.json(post);
    });
});

//the upvote put request
router.put('/posts/:post/upvote', function(req, res, next) {
    req.post.upvote(function(err, post){
        if (err) { return next(err); }

        res.json(post);
    });
});

/*attach a reference to the new comment that refers
to the post object.*/
router.post('/posts/:post/comments', function(req, res, next) {
    var comment = new Comment(req.body);
    comment.post = req.post;

    comment.save(function(err, comment){
        if(err){ return next(err); }

        req.post.comments.push(comment);
        req.post.save(function(err, post) {
            if(err){ return next(err); }

            res.json(comment);
        });
    });
});

// upvote a comment
router.put('/posts/:post/comments/:comment/upvote',
    function(req, res, next) {
        req.comment.upvote(function(err, comment){
            if (err) {return next(err); }

            res.json(comment);
        });
    });

//get the comment objects by its ID
router.param('comment', function(req, res, next, id) {
    var query = Comment.findById(id);

    query.exec(function (err, comment){
        if (err) {
            return next(err);
        } else if (!comment)
        {
            return next(new Error('can\'t find comment'));
        } else {
            req.comment = comment;
            return next();
        }
    });
});




module.exports = router;


/*app.get('/', function(req, res, next){
 return res.sendfile(app.get('public') + 'html/index.html');
 });*/