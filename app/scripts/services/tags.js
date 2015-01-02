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
    return $http.get('/data/dump-tags.json')
    .then(function (resp) {
      return resp.data;
    });
  };

  var find = function(givenId) {
    return all().then(function(tags) {
      var tag = {};
      for (var i = tags.length - 1; i >= 0; i--) {
        if (tags[i].id == givenId) {
          tag = tags[i];
        }
      }
      if (tags === {}) {
        return {
          status: 404,
          message: 'Record not found'
        };
      } else {
        return tag;
      }
    });
  };


  return {
    all: all,
    find: find
  };

}]);
