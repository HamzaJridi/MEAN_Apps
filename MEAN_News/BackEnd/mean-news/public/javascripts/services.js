//a posts service that contains the data
myApp.factory('posts', ['$http', function($http){
    var obj = {
        posts: []
    };

    /* a getAll methode connected with the REST get reqs
    to get posts and comments from the db */
    obj.getAll = function() {
        return $http.get('/posts').success(function(data){
            angular.copy(data, obj.posts);
        });
    };

    /*The post method to create new posts*/
    obj.creat = function (post) {
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

    return obj;

}]);