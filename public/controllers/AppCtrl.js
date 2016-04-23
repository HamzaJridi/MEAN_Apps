var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', function($scope){
    $scope.message = "Hello World from our Controller";
    $scope.contactList = [
        {
            name : "tim",
            email : "time@me.com",
            number : "(111) 111 1111"
        },
        {
            name : "Emily",
            email : "emily@me.com",
            number : "(222) 222 2222"
        },
        {
            name : "John",
            email : "john@me.com",
            number : "(333) 333 3333"
        }

    ];
}]);