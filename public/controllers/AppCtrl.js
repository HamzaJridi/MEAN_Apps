var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http){
    $scope.message = "Hello World from our Controller";
    $http.get('/contactList');
}]);