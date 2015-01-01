'use strict';

/**
 * @ngdoc service
 * @name libraryboxApp.authors
 * @description
 * # authors
 * Service in the libraryboxApp.
 */

angular.module('libraryboxApp')
.factory('Authors', ['$http', '$q', function($http, $q) {

  var all = function() {
    return $http.get('/data/dump-authors.json')
    .then(function (resp) {
      return resp.data;
    });
  };

  var find = function(givenId) {
    return all().then(function(authors) {
      var author = {};
      for (var i = authors.length - 1; i >= 0; i--) {
        if (authors[i].id == givenId) {
          author = authors[i];
        }
      }
      if (author === {}) {
        return {
          status: 404,
          message: 'Record not found'
        };
      } else {
        return author;
      }
    });
  };


  return {
    all: all,
    find: find
  };

}]);
