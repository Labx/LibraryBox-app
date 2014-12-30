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

  $scope.for_content = 'tags';

  Tags.all().then(function(data) {
    $scope.tags = data;
  });

}]);

angular.module('libraryboxApp')
.controller('TagDetailCtrl', ['$scope', '$routeParams', 'Tags', function($scope, $routeParams, Tags) {

  Tags.find($routeParams.tagId).then(function(data) {
    $scope.tag = data;
  });

}]);
