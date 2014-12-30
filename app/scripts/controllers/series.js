'use strict';

/**
 * @ngdoc function
 * @name libraryboxApp.controller:SeriesCtrl
 * @description
 * # SeriesCtrl
 * Controller of the libraryboxApp
 */

angular.module('libraryboxApp')
.controller('SerieListCtrl', ['$scope', 'Series', function($scope, Series) {

  $scope.forContent = 'series';
  $scope.search     = '';

  Series.all().then(function(data) {
    $scope.series = data;
  });

}]);

angular.module('libraryboxApp')
.controller('SerieDetailCtrl', ['$scope', '$routeParams', 'Series', function($scope, $routeParams, Series) {

  Series.find($routeParams.serieId).then(function(data) {
    $scope.serie = data;
  });

}]);
