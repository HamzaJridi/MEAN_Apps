//Set an angular Service for handling authentication
myApp.factory('AuthService',
    ['$q','$timeout','$http',
        function($q, $timeout, $http){
            //create a user var
            var user = null;

            // return available functions for use in the controllers
            return ({
                isLoggedIn: isLoggedIn,
                getUserStatus: getUserStatus,
                login: login,
                logout: logout,
                register: register
            });
        }]);