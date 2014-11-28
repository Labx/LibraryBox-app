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
          templateUrl: 'partials/main.html',
          controller: 'MainCtrl'
        })
        .when('/about', {
          templateUrl: 'partials/about.html',
          controller: 'AboutCtrl'
        })
        .when('/authors', {
          templateUrl: 'partials/authors.html',
          controller: 'AuthorListCtrl'
        })
        .when('/author/:authorId', {
          templateUrl: 'partials/author-detail.html',
          controller: 'AuthorDetailCtrl'
        })
        .when('/books', {
          templateUrl: 'partials/books.html',
          controller: 'BookListCtrl'
        })
        .when('/book/:bookId', {
          templateUrl: 'partials/book-detail.html',
          controller: 'BookDetailCtrl'
        })
        .when('/series', {
          templateUrl: 'partials/series.html',
          controller: 'SerieListCtrl'
        })
        .when('/serie/:serieId', {
          templateUrl: 'partials/serie-detail.html',
          controller: 'SerieDetailCtrl'
        })
        .when('/tags', {
          templateUrl: 'partials/tags.html',
          controller: 'TagListCtrl'
        })
        .when('/tag/:tagId', {
          templateUrl: 'partials/tag-detail.html',
          controller: 'TagDetailCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    }]);
