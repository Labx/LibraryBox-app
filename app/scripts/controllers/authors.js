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

  Authors.all().then(function(authors) {
    $scope.authors = authors;
  });

}]);

angular.module('libraryboxApp')
.controller('AuthorDetailCtrl', ['$scope', '$routeParams', 'Authors', function($scope, $routeParams, Authors) {

    Authors.find($routeParams.authorId).then(function(data) {
      $scope.author = data;
    });

}]);
