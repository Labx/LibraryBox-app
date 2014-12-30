describe('Directive: search', function() {

  // load the directive's module
  beforeEach(module('libraryboxApp'), 'app/views/directives/search.html');

  // load the html template
  // beforeEach(module('/views/directives/search.html'));
  // beforeEach(module('directives'));

  // instantiate directive
  var element, scope;
  beforeEach(inject(function($rootScope, $compile) {
    scope = $rootScope;
    element = angular.element('<data-search for="\'{{forContent}}\'">');
    $compile(element)(scope);
    // scope.$digest();
    scope.$apply();
  }));

  // it("should have the correct amount of albums in the list", function() {
  //   var list = element.find('li');
  //   expect(list.length).toBe(7);
  // });

  it("should bind correctly", function() {
      // scope.$apply(function() {
      //   scope.forContent = authors;
      // });
      // expect...
  });


});
