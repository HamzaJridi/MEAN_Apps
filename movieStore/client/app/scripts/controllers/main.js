'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
      .controller('MainCtrl', ['$scope', function ($scope) {
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
