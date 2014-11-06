'use strict';

/**
 * @ngdoc service
 * @name libraryboxApp.authors
 * @description
 * # authors
 * Service in the libraryboxApp.
 */
var libraryboxServices = angular.module('libraryboxServices', ['ngResource']);

libraryboxServices.factory('Authors', ['$resource', function($resource){
      // return $resource('http://localhost:9282/data/dump-authors.json');
    return $resource('/data/dump-authors.json', {}, {
      query: {method:'GET', params:{authorId:'authors'}, isArray:true}
    });
  }]);