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
    var deferred = $q.defer();
    $http.get('/data/dump-books.json').success(function(data) {
        var books = [];
        for (var i = 0; i < data.length; i ++) {
          books.push(data[i]);
        }
        deferred.resolve(books);
    });
    return deferred.promise;
  };

  var find = function(id) {
    var deferred = $q.defer();
    var books = [];
    var book = {};
    all().then(function(data) {
      books = data;
      for (var i = books.length - 1; i >= 0; i--) {
        if (books[i].id == id) {
          book = books[i];
        }
      }
      if (typeof(book) == 'undefined') {
        deferred.resolve({
          status: 404,
          message: 'Record not found'
        });
      } else {
        deferred.resolve(book);
      }
    });
    return deferred.promise;
  };


  return {
    all: all,
    find: find
  };

}]);
