'use strict';

/**
 * @ngdoc function
 * @name libraryboxApp.controller:AuthorsCtrl
 * @description
 * # AuthorsCtrl
 * Controller of the libraryboxApp
 */

// var libraryboxControllers = angular.module('libraryboxControllers', []);

angular.module('libraryboxApp')
.controller('AuthorListCtrl', ['$scope', 'Authors', function($scope, Authors) {

  $scope.forContent = 'authors';
  $scope.search     = '';

  Authors.all().then(function(data) {
    $scope.authors = data;
  });

}]);


angular.module('libraryboxApp')
.controller('AuthorDetailCtrl', ['$scope', '$routeParams', 'Authors', 'Books', function($scope, $routeParams, Authors, Books) {

    Authors.find($routeParams.authorId).then(function(data) {
      $scope.author = data;
    });

    // just stupidly retrieve 6 books to design the view
    Books.all().then(function(data) {
      $scope.books = data.slice(0,6);
    });

    $scope.toDate = function(date) {
      return new Date(date);
    }

}]);
