'use strict';

/**
 * @ngdoc function
 * @name libraryboxApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the libraryboxApp
 */
angular.module('libraryboxApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
