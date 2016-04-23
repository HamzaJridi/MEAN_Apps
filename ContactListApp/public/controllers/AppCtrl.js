var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http){
    $scope.message = "Hello World from our Controller";
    //get the received data from the server
    $http.get('/contactlist').success(function(response){
        console.log('I got the requested data');
        $scope.contactlist = response;
    });
}]);