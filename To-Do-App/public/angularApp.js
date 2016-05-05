var myApp = angular.module('myApp', []);


//myApp.service('guidService', function () {
//  return {
//    createGuid: function () {
//      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
//        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
//        return v.toString(16);
//      });
//    }
//  };
//});

myApp.controller('MainCtrl', ['$scope', function ($scope) {
    var todo = {};

    //the list of tasks to do
    todo.list = [
        {details : "Demo First Item",done:false},
        {details : "Demo Second Item",done:false}
    ];

    //the addItem method to add tasks to the list
    todo.addItem = function () {
        todo.list.push({
          //_id: guidService.createGuid(),
          details: todo.newItemDetails,
          done:false
        });
        todo.newItemDetails = "";
    };

    //the removeItem method, to remove done tasks
    todo.removeItem = function (itemToRemove) {
        todo.list=todo.list.filter(function (item) {
          return item._id !== itemToRemove._id;
        });
    };


  todo.clearCompleted = function(){
    todo.list=todo.list.filter(function (item) {
      return !item.done
    });
  };
    todo.newItemDetails = '';

    //expose the list of items
    $scope.todo = todo;

}]);