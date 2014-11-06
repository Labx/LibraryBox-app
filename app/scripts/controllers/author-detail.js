'use strict';

/**
 * @ngdoc function
 * @name libraryboxApp.controller:AuthorDetailCtrl
 * @description
 * # AuthorDetailCtrl
 * Controller of the libraryboxApp
 */
angular.module('libraryboxApp')
  .controller('AuthorDetailCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
