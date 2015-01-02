'use strict';

/**
 * @ngdoc service
 * @name libraryboxApp.series
 * @description
 * # series
 * Service in the libraryboxApp.
 */

angular.module('libraryboxApp')
.factory('Series', ['$http', '$q', function($http, $q){

  var all = function() {
    return $http.get('/data/dump-series.json')
    .then(function (resp) {
      return resp.data;
    });
  };

  var find = function(givenId) {
    return all().then(function(series) {
      var serie = {};
      for (var i = series.length - 1; i >= 0; i--) {
        if (series[i].id == givenId) {
          serie = series[i];
        }
      }
      if (series === {}) {
        return {
          status: 404,
          message: 'Record not found'
        };
      } else {
        return serie;
      }
    });
  };


  return {
    all: all,
    find: find
  };

}]);
