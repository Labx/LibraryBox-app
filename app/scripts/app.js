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
        .when('/books', {
          templateUrl: 'views/books.html',
          controller: 'BookListCtrl'
        })
        .when('/book/:bookId', {
          templateUrl: 'views/book-detail.html',
          controller: 'BookDetailCtrl'
        })
        .when('/series', {
          templateUrl: 'views/series.html',
          controller: 'SerieListCtrl'
        })
        .when('/serie/:serieId', {
          templateUrl: 'views/serie-detail.html',
          controller: 'SerieDetailCtrl'
        })
        .when('/tags', {
          templateUrl: 'views/tags.html',
          controller: 'TagListCtrl'
        })
        .when('/tag/:tagId', {
          templateUrl: 'views/tag-detail.html',
          controller: 'TagDetailCtrl'
        })
        .when('/images', {
          templateUrl: 'views/images.html',
          controller: 'ImagesCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    }]);
