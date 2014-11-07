'use strict';

/**
 * @ngdoc function
 * @name libraryboxApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the libraryboxApp
 */
angular.module('libraryboxApp')
  .controller('MenuCtrl', ['$scope', '$location', function ($scope, $location) {
      $scope.isActive = function (viewLocation) {
          return viewLocation === $location.path();
  	};
}]);
