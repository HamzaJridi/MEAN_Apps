var myApp = angular.module('myApp', [
    'ngRoute',
    'appControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl : 'views/home.html',
            controller : 'MainCtrl'
        })
        .when('/posts/:id', {
            templateUrl : 'views/posts.html',
            controller : 'PostsCtrl'
        })
        .otherwise({
            redirectTo : '/home'
        });
}]);



