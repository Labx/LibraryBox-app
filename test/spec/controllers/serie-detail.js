'use strict';

describe('Controller: SerieDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('libraryboxApp'));

  var SerieDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SerieDetailCtrl = $controller('SerieDetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
