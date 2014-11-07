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
  $scope.books = Books.query();
  $scope.orderProp = 'sort';
}]);

angular.module('libraryboxApp')
.controller('BookDetailCtrl', ['$scope', '$routeParams', 'Books', function($scope, $routeParams, Books) {
    var books = Books.query(function() {
	    $scope.aid = $routeParams.bookId;
	    $scope.book = books[$routeParams.bookId];
    });
}]);