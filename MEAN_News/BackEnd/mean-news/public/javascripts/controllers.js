var appControllers = angular.module('appControllers', []);

//The Home page controller
appControllers.controller('MainCtrl', ['$scope','posts',
    function($scope,posts){
        $scope.test = 'Hello world from angular';
        /*list of posts ordered b up vote using angular filter
         * posts.posts is the service.data*/
        $scope.posts = posts.posts;

        //addPost() to add posts by users
        $scope.addPost = function(){
            //prevent the user to add an empty post
            if(!$scope.title || $scope.title === '') {
                return;
            }
            /*invoke the creat() method created in the post
            service to add posts to the db */
            posts.creat({
                title: $scope.title,
                link: $scope.link,
            });
            $scope.title = "";
            $scope.link = "";
        };

        //incrementUpvotes() to enable incrementing upvotes
        $scope.incrementUpvotes = function(post){
            posts.upvote(post);
            /*a remove method example :
             var i = $scope.posts.indexOf(post);
             console.log(i)
             $scope.posts.splice(i,1);*/
        };
    }]);

//The Posts page controller
appControllers.controller('PostsCtrl', [
    '$scope',
    '$routeParams',
    'posts',
    function($scope, $routeParams, posts) {
        //get the clicked post by its ID
        $scope.post = posts.posts[$routeParams.id];
        // an add Comment method
        $scope.addComment = function(){
            if($scope.body === '') { return; }
            $scope.post.comments.push({
                body: $scope.body,
                author: 'user',
                upvotes: 0
            });
            $scope.body = '';
        };
    }
]);