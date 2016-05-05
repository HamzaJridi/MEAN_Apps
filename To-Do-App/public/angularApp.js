var myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', ['$scope', 'guidService', function ($scope,guidService) {
    var todo = {};

    //the list of tasks to do
    todo.list = [
        {_id: guidService.createGuid(),details : "Demo First Item"},
        {_id: guidService.createGuid(),details : "Demo Second Item"}
    ];

    //the addItem method to add tasks to the list
    todo.addItem = function () {
        todo.list.push({
            details: todo.newItemDetails
        });
        todo.newItemDetails = "";
    };

    //the removeItem method, to remove done tasks
    todo.removeItem = function (itemToRemove) {
        todo.list=todo.list.filter(function (item) {
            return item._id !== itemToRemove._id;
        });
    };

    todo.newItemDetails = '';

    //expose the list of items
    $scope.todo = todo;

  myApp.factory('guidService', function () {
    return {
      createGuid: function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }
    };
  });

}]);