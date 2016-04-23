var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', function($scope){
    $scope.message = "Hello World from our Controller"
    console.log('Hello World from our Controller');
}]);