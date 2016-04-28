//Login Controller
angular.module('myApp').controller('LoginCtrl',
    ['$scope', '$location', 'AuthService','$rootScope',
        function ($scope, $location, AuthService,$rootScope) {

            $scope.login = function () {

                // initial values
                $scope.error = false;
                $scope.disabled = true;
                $rootScope.isLogin = false;
                // call login from service
                AuthService.login($scope.loginForm.username, $scope.loginForm.password)
                    // handle success
                    .then(function () {
                        $location.path('/');
                        $scope.disabled = false;
                        $scope.loginForm = {};
                        $rootScope.isLogin = true;
                    })
                    // handle error
                    .catch(function () {
                        $scope.error = true;
                        $scope.errorMessage = "Invalid username and/or password";
                        $scope.disabled = false;
                        $scope.loginForm = {};
                        $rootScope.isLogin = false;
                    });

            };

            $scope.logout = function () {
                $rootScope.isLogin = true;
                // call logout from service
                AuthService.logout()
                    .then(function () {
                        $rootScope.isLogin = false;
                        $location.path('/login');
                    });
            };

        }
    ]);




