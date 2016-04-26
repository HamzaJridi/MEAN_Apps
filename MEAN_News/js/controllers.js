myApp.controller('MainCtrl', ['$scope','posts',
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
            $scope.posts.push({
                title: $scope.title,
                link: $scope.link,
                upvotes : 0
            });
            $scope.title = "";
            $scope.link = "";
        };

        //incrementUpvotes() to enable incrementing upvotes
        $scope.incrementUpvotes = function(post){
            post.upvotes +=1;
            /*a remove method example :
             var i = $scope.posts.indexOf(post);
             console.log(i)
             $scope.posts.splice(i,1);*/
        };
    }]);