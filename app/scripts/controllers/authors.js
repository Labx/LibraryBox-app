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
.controller('AuthorDetailCtrl', ['$scope', '$routeParams', 'Authors', function($scope, $routeParams, Authors) {

    Authors.find($routeParams.authorId).then(function(data) {
      $scope.author = data;
    });

}]);
