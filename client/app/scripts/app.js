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
  })
    /** MovieRestangular Service :
     * the Restangular prjct expects an 'id' arg but
     * mongo db has an "_id", so this service will convert
     * "_id" to "id"*/
    .factory('MovieRestangular', function(Restangular) {
        return Restangular.withConfig(function(RestangularConfigurer) {
            RestangularConfigurer.setRestangularFields({
                id: '_id'
            });
        });
    })
    /* The Movie factory is an object tha we can include in
    * our controllers and it give us the ability to create
    * and lidt new movies*/
    .factory('Movie', function(MovieRestangular) {
        return MovieRestangular.service('movie');
        /*service('movie') : movie points to the url in the api
        *--> at that API url I want to use the 'Movie' objct
        * to pint to the 'movie' in point*/
    });