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

  $scope.forContent = 'tags';
  $scope.search     = '';

  Tags.all().then(function(data) {
    $scope.tags = data;
  });

}]);

angular.module('libraryboxApp')
.controller('TagDetailCtrl', ['$scope', '$routeParams', 'Tags', 'Books', function($scope, $routeParams, Tags, Books) {

  Tags.find($routeParams.tagId).then(function(data) {
    // add some lorem ipsum for UI design purpose
    data.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.'
    $scope.tag = data;
  });

  // just stupidly retrieve 6 books to design the view
  Books.all().then(function(data) {
    $scope.books = data.slice(0,6);
  });

}]);
