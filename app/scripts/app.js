'use strict';

/**
 * @ngdoc overview
 * @name libraryboxApp
 * @description
 * # libraryboxApp
 *
 * Main module of the application.
 */
angular
  .module('libraryboxApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
