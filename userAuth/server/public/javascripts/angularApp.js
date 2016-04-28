var myApp = anguar.module('myApp',['ngRoute']);

// setting Angular Routes
myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when ('/', {
        templateUrl : 'views/home.html'
    })
        .when('/login', {
            templaterl : 'views/login.html',
            controller : 'loginCtrl'
        })
        .when('/register', {
            templaterl : 'views/register.html',
            controller : 'registerCtrl'
        })
        .when('/logout', {
            templaterl : 'views/logout.html',
            controller : 'logoutCtrl'
        })
        .when('/one', {
            template: '<h1>This is page One!</h1>'
        })
        .when('/two', {
            template: '<h1>This is page Two!</h1>'
        })
        .otherwise({
            redirectTo : '/'
        });
}]);



module.exports = myApp;