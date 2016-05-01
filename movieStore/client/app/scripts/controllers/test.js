'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TestCtrl
 * @description
 * # TestCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
      .controller('TestCtrl', ['$scope', function ($scope) {
        $scope.message = "Movies Home"
        $scope.articles = [
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
