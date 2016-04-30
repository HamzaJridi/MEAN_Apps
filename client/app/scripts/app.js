'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
        'ngRoute',
        'restangular'
  ])
  .config(function ($routeProvider,RestangularProvider) {

        // Set the base URL for Restangular.
        RestangularProvider.setBaseUrl('http://localhost:8000');

        $routeProvider
              .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
              })
              .when('/movies', {
                templateUrl: 'views/movies.html',
                controller: 'MoviesCtrl',
                controllerAs: 'movie'
              })
              .when('/test', {
                templateUrl: 'views/test.html',
                controller: 'TestCtrl',
                controllerAs: 'test'
              })
              .otherwise({
                redirectTo: '/'
        });
  });
