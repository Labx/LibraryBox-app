'use strict';

/**
 * @ngdoc service
 * @name libraryboxApp.tags
 * @description
 * # tags
 * Service in the libraryboxApp.
 */
angular.module('libraryboxApp')
.factory('Tags', ['$resource', function($resource){
      // return $resource('http://localhost:9282/data/dump-tags.json');
    return $resource('/data/dump-tags.json', {}, {
      query: {method:'GET', params:{tagId:'tags'}, isArray:true}
    });
  }]);