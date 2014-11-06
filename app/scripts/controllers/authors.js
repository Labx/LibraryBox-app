'use strict';

/**
 * @ngdoc function
 * @name libraryboxApp.controller:AuthorsCtrl
 * @description
 * # AuthorsCtrl
 * Controller of the libraryboxApp
 */
angular.module('libraryboxApp')
  .controller('AuthorsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
