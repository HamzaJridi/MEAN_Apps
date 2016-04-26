var myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', ['$scope', function($scope){
    $scope.test = 'Hello world from angular';
    //list of posts ordered b up vote using angular filter
    $scope.posts = [
        {title: 'post 1', upvotes: 5},
        {title: 'post 2', upvotes: 2},
        {title: 'post 3', upvotes: 15},
        {title: 'post 4', upvotes: 9},
        {title: 'post 5', upvotes: 4}
    ];

    //addPost() to add posts by users
    $scope.addPost = function(){
        //prevent the user to add an empty post
        if(!$scope.title || $scope.title === '') {
            return;
        }
        $scope.posts.push({title: $scope.title, upvotes : 0});
        $scope.title = "";
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