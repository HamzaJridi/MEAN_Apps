var appControllers = angular.module('appControllers', []);

//The Home page controller
appControllers.controller('MainCtrl', ['$scope','posts',
    function($scope,posts){
        $scope.test = 'Hello world from angular';
        /*list of posts ordered b up vote using angular filter
         * posts.posts is the service.data*/
        //postFactory.getAll();
        $scope.posts = posts.posts;

        //addPost() to add posts by users
        $scope.addPost = function(){
            //prevent the user to add an empty post
            if(!$scope.title || $scope.title === '') {
                return;
            }
            /*invoke the creat() method created in the post
            service to add posts to the db */
            posts.create({
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
    'posts',
    'post',
    function($scope, posts) {
        //var post = posts.posts[$stateParams.id];
        //posts.getPost(mypost._id);
        $scope.post = post;
        //get the clicked post by its ID
        //$scope.post = posts.posts[$routeParams.id];
        //posts.get($routeParams._id);
        //$scope.post = posts.post;
        // an add Comment method
        $scope.addComment = function(){
            if($scope.body === '') { return; }
            posts.addComment(post._id, {
                body: $scope.body,
                author: 'user',
            }).success(function(comment) {
                $scope.post.comments.push(comment);
            });

            $scope.body = '';
        };

        $scope.incrementUpvotes = function(comment){
            posts.upvoteComment(post, comment);
        };
    }
]);