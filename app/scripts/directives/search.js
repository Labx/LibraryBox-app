'use strict';

angular
  .module('app.directives.search', [])
  .directive('search', function() {
    return {
      restrict: 'E',
      scope: {
        for: '@',
      },
      templateUrl: 'views/directives/search.html',
      link: function(scope, element, attrs, controllers) {
        scope.placeholder = 'recherche rapide par nom';
        switch (scope.for) {
          case 'authors':
            scope.placeholder += ' d\'auteur...';
            break;
          case 'books':
            scope.placeholder += ' de livre...';
            break;
          case 'series':
            scope.placeholder += ' de série...';
            break;
          case 'tags':
            scope.placeholder += ' d\'étiquette...';
            break;
        }
      },
    };
  });
