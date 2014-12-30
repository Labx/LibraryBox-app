'use strict';

/**
 * @ngdoc function
 * @name libraryboxApp.controller:BooksCtrl
 * @description
 * # BooksCtrl
 * Controller of the libraryboxApp
 */

angular.module('libraryboxApp')
.controller('BookListCtrl', ['$scope', 'Books', function($scope, Books) {

  $scope.forContent = 'books';
  $scope.search     = '';

  Books.all().then(function(data) {
    $scope.books = data;
  });

}]);


angular.module('libraryboxApp')
.controller('BookDetailCtrl', ['$scope', '$routeParams', 'Books', function($scope, $routeParams, Books) {

  Books.find($routeParams.bookId).then(function(data) {
    $scope.book = data;
  });

}]);
