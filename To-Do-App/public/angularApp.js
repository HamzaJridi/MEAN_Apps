var myApp = angular.module('myApp', ['ngRoute']);

myApp.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.message = 'Here it\'s, AngularJS'
}]);