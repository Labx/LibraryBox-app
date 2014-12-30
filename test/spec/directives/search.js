describe('Directive: search', function() {

  // load the directive's module
  beforeEach(module('libraryboxApp'));

  // load the html template
  beforeEach(module('views/directives/search.html'));

  // instantiate directive
  var element, scope;
  beforeEach(inject(function($rootScope, $compile) {
    scope = $rootScope;
    element = angular.element('<data-search for="\'{{forContent}}\'">');
    $compile(element)(scope);
    // scope.$digest();
  }));

  describe("should be binded correctly", function() {
    it("with authors"), function() {
      scope.$apply(function() {
        scope.forContent = 'authors';
      });
      var formInput = element.find('input');
      expect(formInput.length).toBe(1);
    };
    it("with books"), function() {
      scope.$apply(function() {
        scope.forContent = 'books';
      });
      var formInput = element.find('input');
      expect(formInput.length).toBe(1);
    };
    it("with tags"), function() {
      scope.$apply(function() {
        scope.forContent = 'tags';
      });
      var formInput = element.find('input');
      expect(formInput.length).toBe(1);
    };
    it("with series"), function() {
      scope.$apply(function() {
        scope.forContent = 'series';
      });
      var formInput = element.find('input');
      expect(formInput.length).toBe(1);
    };
  });

  describe("should have the correct placeholder", function() {

  });

  describe("should change the scope.search value", function() {

  });


});
