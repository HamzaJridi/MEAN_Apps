var myApp = angular.module('myApp', []);


myApp.service('restService', ['$http',function ($http) {
  var root = '/mytasks';
  return {
    getItems : function() {
      return $http.get(root);
    },
    addItem : function(item){
      return $http.post(root,item);
    },
    removeItem : function(item){
      return $http.delete(root+'/'+item._id);
    }
  };
}]);

myApp.controller('MainCtrl', ['$scope', 'restService', function ($scope,restService) {
    var todo = {};

    //the list of tasks to do
    todo.list = [];

    //get all tasks by the getItems method from the service
    restService.getItems().then(function (response) {
      console.log('I got the requested data');
      todo.list=response.data.items;
    });

    //the addItem method to add tasks to the list
    todo.addItem = function () {
      var item = {
        details: todo.newItemDetails
      };
      todo.newItemDetails = "";

      restService.addItem(item).then(function(response){
        todo.list.push({
          _id:response.data.taskId,
          details:item.details,
          done:item.done
        });
      });
    };

    //the removeItem method, to remove done tasks
    todo.removeItem = function (itemToRemove) {
        todo.list=todo.list.filter(function (item) {
          return item._id !== itemToRemove._id;
        });
        restService.removeItem(itemToRemove);
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