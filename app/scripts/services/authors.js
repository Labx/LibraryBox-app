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
    var deferred = $q.defer();
    $http.get('/data/dump-authors.json').success(function(data) {
        var authors = [];
        for (var i = 0; i < data.length; i ++) {
            authors.push(data[i]);
        }
        deferred.resolve(authors);
    });
    return deferred.promise;
  };

  var find = function(id) {
    var deferred = $q.defer();
    var authors = [];
    all().then(function(data) {
      authors = data;
      for (var i = authors.length - 1; i >= 0; i--) {
        if (authors[i].id == id) {
          var author = authors[i];
        }
      }
      if (typeof(author) == 'undefined') {
        deferred.resolve({
          status: 404,
          message: 'Record not found'
        });
      } else {
        deferred.resolve(author);
      }
    });
    return deferred.promise;
  };


  return {
    all: all,
    find: find
  };

}]);
