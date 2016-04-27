var myApp = angular.module('myApp', [
    'ngRoute',
    'appControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl : '../html/home.html',
            controller : 'MainCtrl',
            /*By using the resolve property in this way, we are ensuring that anytime
            our home state is entered, we will automatically query all posts from
            our backend before the home page finishes loading.*/
            resolve: {
                "postPromise": ['posts', function(posts){
                    return posts.getAll();
                }]
            }
        })
        .when('/posts/{id}', {
            templateUrl : '../html/posts.html',
            controller : 'PostsCtrl',
            resolve: {
                post : ['$routeParams', 'posts',
                        function($routeParams,posts) {
                            return posts.get($routeParams.id);
                        }]
                }
        })
        .otherwise({
            redirectTo : '/home'
        });
}]);



