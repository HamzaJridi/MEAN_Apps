var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/posts', {
            templateUrl : 'views/posts.html',
            controller : 'MainCtrl'
        })
        .otherwise({
            redirectTo : '/posts'
        });
}]);



