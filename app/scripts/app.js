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
	// 'libraryboxControllers',
	// 'libraryboxFilters',
	// 'libraryboxServices'.
  ])
  .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'partials/main',
          controller: 'MainCtrl'
        })
        .when('/about', {
          templateUrl: 'partials/about',
          controller: 'AboutCtrl'
        })
        .when('/authors', {
          templateUrl: 'partials/authors',
          controller: 'AuthorListCtrl'
        })
        .when('/author/:authorId', {
          templateUrl: 'partials/author-detail',
          controller: 'AuthorDetailCtrl'
        })
        .when('/books', {
          templateUrl: 'partials/books',
          controller: 'BookListCtrl'
        })
        .when('/book/:bookId', {
          templateUrl: 'partials/book-detail',
          controller: 'BookDetailCtrl'
        })
        .when('/series', {
          templateUrl: 'partials/series',
          controller: 'SerieListCtrl'
        })
        .when('/serie/:serieId', {
          templateUrl: 'partials/serie-detail',
          controller: 'SerieDetailCtrl'
        })
        .when('/tags', {
          templateUrl: 'partials/tags',
          controller: 'TagListCtrl'
        })
        .when('/tag/:tagId', {
          templateUrl: 'partials/tag-detail',
          controller: 'TagDetailCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    }]);
