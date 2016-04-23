var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http){
    $scope.message = "Hello World from our Controller";
    //get the received data from the server
    $http.get('/contactlist').success(function(response){
        console.log('I got the requested data');
        $scope.contactlist = response;
    });
    $scope.addContact = function(){
        /**contact is the object data that we're sending to the server,
         * it's bound by the ng-model from input fields in index.html*/
        console.log($scope.contact);
        //send the input data to the server
        $http.post('/contactlist', $scope.contact);
    }
}]);