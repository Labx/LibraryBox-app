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
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'libraryboxControllers',
	// 'libraryboxFilters',
	'libraryboxServices'
  ])
  .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .when('/authors', {
          templateUrl: 'views/authors.html',
          controller: 'AuthorListCtrl'
        })
        .when('/author/:authorId', {
          templateUrl: 'views/author-detail.html',
          controller: 'AuthorDetailCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    }]);
