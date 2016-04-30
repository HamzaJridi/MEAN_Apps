'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
        .controller('MoviesCtrl', ['$scope', function ($scope) {
            $scope.message = "Movies Home"
            $scope.movies = [
                {
                    title : "A new Hope",
                    url : "http://youtube.com"
                },
                {
                    title : "A new Hope",
                    url : "http://youtube.com"
                }
            ];
        }]);
