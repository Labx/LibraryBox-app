'use strict';

/**
 * @ngdoc service
 * @name libraryboxApp.tags
 * @description
 * # tags
 * Service in the libraryboxApp.
 */
angular.module('libraryboxApp')
.factory('Tags', ['$http', '$q', function($http, $q){

  var all = function() {
    var deferred = $q.defer();
    $http.get('/data/dump-tags.json').success(function(data) {
        var tags = [];
        for (var i = 0; i < data.length; i ++) {
            tags.push(data[i]);
        }
        deferred.resolve(tags);
    });
    return deferred.promise;
  };

  var find = function(id) {
    var deferred = $q.defer();
    var tags = [];
    all().then(function(data) {
      tags = data;
      for (var i = tags.length - 1; i >= 0; i--) {
        if (tags[i].id == id) {
          var tag = tags[i];
        }
      }
      if (typeof(tag) == 'undefined') {
        deferred.resolve({
          status: 404,
          message: 'Record not found'
        });
      } else {
        deferred.resolve(tag);
      }
    });
    return deferred.promise;
  };


  return {
    all: all,
    find: find
  };

}]);
