'use strict';

describe('Controller: BookDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('libraryboxApp'));

  var BookDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BookDetailCtrl = $controller('BookDetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
