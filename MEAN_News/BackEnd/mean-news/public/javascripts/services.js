//a posts service that contains the data
myApp.factory('posts', ['$http', function($http){
    var obj = {
        posts: [],
        post: {}
    };

    /* a getAll methode connected with the REST get reqs
    to get posts and comments from the db */
    obj.getAll = function() {
        return $http.get('/posts').success(function(data){
            angular.copy(data, obj.posts);
        });
    };

    /*The post method to create new posts*/
    obj.create = function (post) {
        /*post is the returned date from the REST post
         by res.json(post) */
        return $http.post('/posts', post).success(function(data){
            obj.posts.push(data);
        });
    };
    // Upvoting Posts
    obj.upvote = function(post) {
        return $http.put('/posts/' + post._id + '/upvote')
            .success(function(data){
                post.upvotes += 1;
            });
    };

    obj.get = function(id) {
        return $http.get('/posts/' + id).then(function(res){
            return res.data
        });
    };

    obj.addComment = function(id, comment) {
        return $http.post('/posts/' + id + '/comments', comment);
    };

    obj.upvoteComment = function(post, comment) {
        return $http.put('/posts/' + post._id + '/comments/'+ comment._id + '/upvote')
            .success(function(data){
                comment.upvotes += 1;
            });
    };


    return obj;

}]);