describe('Directive: search', function() {

  // load the directive's module
  beforeEach(module('libraryboxApp'));

  // instantiate directive
  var element, scope;
  // beforeEach(module('scripts/directives/search.js'));
  beforeEach(inject(function($rootScope, $compile) {
    element = angular.element('<div class="row">' +
      '<data-search for="\'{{for_content}}\'">' +
    '</div>');
    // element('<div class="well span6">' +
    // '<h3>Busdriver Albums:</h3>' +
    // '<albums ng-repeat="album in albums" title="{{album.title}}">' +
    // '</albums></div>');
    scope = $rootScope;
    $compile(element)(scope);
      scope.$digest();
  }));

  // it("should have the correct amount of albums in the list", function() {
  //   var list = element.find('li');
  //   expect(list.length).toBe(7);
  // });

  it("should bind correctly", function() {
      scope.$apply(function() {
        scope.for_content = authors;
      });
      // expect...
  });


});
