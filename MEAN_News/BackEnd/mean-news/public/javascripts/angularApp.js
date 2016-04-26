var myApp = angular.module('myApp', [
    'ngRoute',
    'appControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl : '../html/home.html',
            controller : 'MainCtrl'
        })
        .when('/posts/:id', {
            templateUrl : '../html/posts.html',
            controller : 'PostsCtrl'
        })
        .otherwise({
            redirectTo : '/home'
        });
}]);



