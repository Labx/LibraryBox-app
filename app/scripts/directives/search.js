'use strict';

angular
  .module('app.directives.search', [])
  .directive('search', function() {
    return {
      restrict: 'A',
      // // this is useful to keep model biding
      // // used by the ng-repeat filters
      // scope: false,
      scope: {
        for: '='
      },
      templateUrl: '/views/directives/search.html',
      controller: function($scope){

        $scope.placeholder = 'recherche rapide par nom';

        switch ($scope.for) {
          case 'authors':
            $scope.placeholder += ' d\'auteur...';
            break;
          case 'books':
            $scope.placeholder += ' de livre...';
            break;
          case 'series':
            $scope.placeholder += ' de série...';
            break;
          case 'tags':
            $scope.placeholder += ' d\'étiquette...';
            break;
        }
      },
    };
  });
