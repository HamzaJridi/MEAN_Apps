//a posts service that contains the data
myApp.factory('posts', ['$http', function($http){
    var obj = {
        posts: []
    };

    obj.getAll = function() {
        return $http.get('/posts').success(function(data){
            angular.copy(data, obj.posts);
        });
    };
    return obj;

}]);