'use strict';

/**
 * @ngdoc function
 * @name libraryboxApp.controller:TagsCtrl
 * @description
 * # TagsCtrl
 * Controller of the libraryboxApp
 */

angular.module('libraryboxApp')
.controller('TagListCtrl', ['$scope', 'Tags', function($scope, Tags) {
  $scope.tags = Tags.query();
  $scope.orderProp = 'sort';
}]);

angular.module('libraryboxApp')
.controller('TagDetailCtrl', ['$scope', '$routeParams', 'Tags', function($scope, $routeParams, Tags) {
    var tags = Tags.query(function() {
	    $scope.aid = $routeParams.tagId;
	    $scope.tag = tags[$routeParams.tagId];
    });
}]);