'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
var clientApp = angular
  .module('clientApp', [
        'ngRoute',
        'restangular'
  ]);

clientApp.config(function ($routeProvider,RestangularProvider) {

        // Set the base URL for Restangular.
        RestangularProvider.setBaseUrl('http://localhost:8000');

        $routeProvider
              .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
              })
              .when('/test', {
                templateUrl: 'views/test.html',
                controller: 'TestCtrl',
                controllerAs: 'test'
              })
              .when('/movies', {
                templateUrl: 'views/movies.html',
                controller: 'MoviesCtrl',
                controllerAs: 'movie'
              })
              .when('/create/movie', {
                templateUrl: 'views/movie-add.html',
                controller: 'MovieAddCtrl',
                controllerAs: 'movieAdd'
              })
              .when('/movie/:id', {
                templateUrl: 'views/movie-view.html',
                controller: 'MovieViewCtrl',
                controllerAs: 'movieView'
              })
              .when('/movie/:id/delete', {
                templateUrl: 'views/movie-delete.html',
                controller: 'MovieDeleteCtrl',
                controllerAs: 'movieDelete'
              })
              .when('/movie/:id/edit', {
                templateUrl: 'views/movie-edit.html',
                controller: 'MovieEditCtrl',
                controllerAs: 'movieEdit'
              })
              .otherwise({
                redirectTo: '/'
        });
  });

    /** MovieRestangular Service :
     * the Restangular prjct expects an 'id' arg but
     * mongo db has an "_id", so this service will convert
     * "_id" to "id"*/
    clientApp.factory('MovieRestangular', function(Restangular) {
        return Restangular.withConfig(function(RestangularConfigurer) {
            RestangularConfigurer.setRestangularFields({
                id: '_id'
            });
        });
    });

    /* The Movie factory is an object tha we can include in
    * our controllers and it give us the ability to create
    * and lidt new movies*/
clientApp.factory('Movie', function(MovieRestangular) {
        return MovieRestangular.service('movies');
        /*service('movies') : movies points to the url route in the api
        *it has to be the same as the one in "routes.js" file in the server part
        *it has nothing to do with the angular routes names
        *--> at that API url I want to use the 'Movie' objct
        * to point to the 'movies' in point*/
    });
