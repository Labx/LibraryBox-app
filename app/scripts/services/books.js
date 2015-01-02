'use strict';

/**
 * @ngdoc service
 * @name libraryboxApp.books
 * @description
 * # books
 * Service in the libraryboxApp.
 */

angular.module('libraryboxApp')
.factory('Books', ['$http', '$q', function($http, $q){

  var all = function() {
    return $http.get('/data/dump-books.json')
    .then(function (resp) {
      return resp.data;
    });
  };

  var find = function(givenId) {
    return all().then(function(books) {
      var book = {};
      for (var i = books.length - 1; i >= 0; i--) {
        if (books[i].id == givenId) {
          book = books[i];
        }
      }
      if (books === {}) {
        return {
          status: 404,
          message: 'Record not found'
        };
      } else {
        return book;
      }
    });
  };


  return {
    all: all,
    find: find
  };

}]);
