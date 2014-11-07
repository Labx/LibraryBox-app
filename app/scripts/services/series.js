'use strict';

/**
 * @ngdoc service
 * @name libraryboxApp.series
 * @description
 * # series
 * Service in the libraryboxApp.
 */

angular.module('libraryboxApp')
.factory('Series', ['$resource', function($resource){
      // return $resource('http://localhost:9282/data/dump-series.json');
    return $resource('/data/dump-series.json', {}, {
      query: {method:'GET', params:{serieId:'series'}, isArray:true}
    });
  }]);