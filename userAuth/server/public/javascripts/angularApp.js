var myApp = angular.module('myApp', ['ngRoute']);

// setting Angular Routes
myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when ('/', {
        templateUrl : 'views/home.html',
        controller : 'HomeCtrl',
        access: {restricted: true}
    })
        .when('/login', {
            templateUrl : 'views/login.html',
            controller : 'LoginCtrl',
            access: {restricted: false}
        })
        .when('/logout', {
            controller : 'LoginCtrl',
            access: {restricted: true}
        })
        .when('/register', {
            templateUrl : 'views/register.html',
            controller : 'RegisterCtrl',
            access: {restricted: false}
        })
        .when('/one', {
            template: '<h1>This is page One!</h1>',
            access: {restricted: true}
        })
        .when('/two', {
            template: '<h1>This is page Two!</h1>',
            access: {restricted: true}
        })
        .otherwise({
            redirectTo : '/'
        });
}]);

/*restrict the access to pages according to the state
* of the logged In user and the access.restricted property
* that is set for every route independently */

myApp.run(function ($rootScope, $location, $route, AuthService) {
    $rootScope.$on('$routeChangeStart',
        function (event, next, current) {
            AuthService.getUserStatus()
                .then(function(){
                    if (next.access.restricted && !AuthService.isLoggedIn()){
                        $location.path('/login');
                        $route.reload();
                    }
                });
        });
});

