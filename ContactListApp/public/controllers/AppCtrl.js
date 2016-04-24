var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http){
    $scope.message = "Hello World from our Controller";

    //get the received data from the server
    var refresh = function(){
        $http.get('/contactlist').success(function(response){
            console.log('I got the requested data');
            $scope.contactlist = response;
            $scope.contact = "";
        });
    };
    refresh();
    $scope.addContact = function(){
        /**contact is the object data that we're sending to the server,
         * it's bound by the ng-model from input fields in index.html*/
        console.log($scope.contact);
        //send the input data to the server
        $http.post('/contactlist', $scope.contact).success(function(response){
            console.log(response);
            //$scope.contactlist.push(response);
            refresh();
        });

    };

    $scope.remove = function(id){
        console.log(id);
        //send the contact's id to the server
        $http.delete('/contactlist/' + id).success(function(response){
            refresh();
        });
    };
}]);