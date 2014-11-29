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
  $scope.authors = Authors.query();
  $scope.orderProp = 'sort';
}]);

angular.module('libraryboxApp')
.controller('AuthorDetailCtrl', ['$scope', '$routeParams', 'Authors', function($scope, $routeParams, Authors) {
    var authors = Authors.query(function() {
	    $scope.aid = $routeParams.authorId;
	    $scope.author = authors[$routeParams.authorId];
    });
}]);
