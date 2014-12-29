'use strict';

describe('Controller: TagDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('libraryboxApp'));

  var TagDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TagDetailCtrl = $controller('TagDetailCtrl', {
      $scope: scope
    });
  }));

  // it('should attach a list of awesomeThings to the scope', function () {
  //   expect(scope.awesomeThings.length).toBe(3);
  // });
});
