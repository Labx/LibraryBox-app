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
  $scope.series = Series.query();
  $scope.orderProp = 'sort';
}]);

angular.module('libraryboxApp')
.controller('SerieDetailCtrl', ['$scope', '$routeParams', 'Series', function($scope, $routeParams, Series) {
    var series = Series.query(function() {
	    $scope.aid = $routeParams.serieId;
	    $scope.serie = series[$routeParams.serieId];
    });
}]);