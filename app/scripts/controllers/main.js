'use strict';

/**
 * @ngdoc function
 * @name libraryboxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the libraryboxApp
 */
angular.module('libraryboxApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
