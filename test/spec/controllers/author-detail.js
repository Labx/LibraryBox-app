'use strict';

describe('Controller: AuthorDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('libraryboxApp'));

  var AuthorDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AuthorDetailCtrl = $controller('AuthorDetailCtrl', {
      $scope: scope
    });
  }));

  // it('should attach a list of awesomeThings to the scope', function () {
  //   expect(scope.awesomeThings.length).toBe(3);
  // });
});
