'use strict';

/**
 * @ngdoc service
 * @name libraryboxApp.books
 * @description
 * # books
 * Service in the libraryboxApp.
 */

angular.module('libraryboxApp')
.factory('Books', ['$resource', function($resource){
      // return $resource('http://localhost:9282/data/dump-books.json');
    return $resource('/data/dump-books.json', {}, {
      query: {method:'GET', params:{bookId:'books'}, isArray:true}
    });
  }]);