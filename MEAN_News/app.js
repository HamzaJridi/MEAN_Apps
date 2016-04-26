var myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', ['$scope', function($scope){
    $scope.test = 'Hello world from angular';
    $scope.posts = [
        'post 1',
        'post 2',
        'post 3',
        'post 4',
        'post 5'
    ];
}]);