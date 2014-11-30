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
    var deferred = $q.defer();
    $http.get('/data/dump-series.json').success(function(data) {
        var series = [];
        for (var i = 0; i < data.length; i ++) {
          series.push(data[i]);
        }
        deferred.resolve(series);
    });
    return deferred.promise;
  };

  var find = function(id) {
    var deferred = $q.defer();
    var series = [];
    var serie = {};
    all().then(function(data) {
      series = data;
      for (var i = series.length - 1; i >= 0; i--) {
        if (series[i].id === id) {
          serie = series[i];
        }
      }
      if (typeof(serie) === 'undefined') {
        deferred.resolve({
          status: 404,
          message: 'Record not found'
        });
      } else {
        deferred.resolve(serie);
      }
    });
    return deferred.promise;
  };


  return {
    all: all,
    find: find
  };

}]);
