'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
        .controller('MoviesCtrl', ['$scope','Movie', function ($scope,Movie) {
        /* Movie : the factory in app.js
        * getlist() : a restangular methode
        * $object : an angular special objct that auto-populate
        * itself, it goes to the server, fetch the list,
        * and populate it*/
            $scope.movies = Movie.getList().$object;
        }]);
