'use strict';

describe('Directive: search', function() {

  // load the directive's module
  beforeEach(module('libraryboxApp'));

  // load the html template
  beforeEach(module('views/directives/search.html'));

  describe("with the authors", function() {
    // instantiate directive
    var element, scope;
    beforeEach(inject(function($rootScope, $compile) {
      scope = $rootScope.$new();
      element = angular.element('<data-search for="{{forContent}}">');
      scope.forContent = 'authors';
      element = $compile(element)(scope);
      scope.$digest();
    }));

    it("should be compiled", function() {
      var formInput = element.find('input');
      expect(formInput.length).toBe(1);
    });

    it("should have the correct placeholder", function() {
      var placeholder = element.find('input')[0].placeholder;
      expect(placeholder).toEqual('recherche rapide par nom d\'auteur...');
    });

    it("should change the search value", function() {
      pending();
    });
  });

  describe("with the books", function() {
    // instantiate directive
    var element, scope;
    beforeEach(inject(function($rootScope, $compile) {
      scope = $rootScope.$new();
      element = angular.element('<data-search for="{{forContent}}">');
      scope.forContent = 'books';
      element = $compile(element)(scope);
      scope.$digest();
    }));

    it("should be compiled", function() {
      var formInput = element.find('input');
      expect(formInput.length).toBe(1);
    });

    it("should have the correct placeholder", function() {
      var placeholder = element.find('input')[0].placeholder;
      expect(placeholder).toEqual('recherche rapide par nom de livre...');
    });

    it("should change the search value", function() {
      pending();
    });
  });

  describe("with the tags", function() {
    // instantiate directive
    var element, scope;
    beforeEach(inject(function($rootScope, $compile) {
      scope = $rootScope.$new();
      element = angular.element('<data-search for="{{forContent}}">');
      scope.forContent = 'tags';
      element = $compile(element)(scope);
      scope.$digest();
    }));

    it("should be compiled", function() {
      var formInput = element.find('input');
      expect(formInput.length).toBe(1);
    });

    it("should have the correct placeholder", function() {
      var placeholder = element.find('input')[0].placeholder;
      expect(placeholder).toEqual('recherche rapide par nom de catégorie...');
    });

    it("should change the search value", function() {
      pending();
    });
  });

  describe("with the series", function() {
    // instantiate directive
    var element, scope;
    beforeEach(inject(function($rootScope, $compile) {
      scope = $rootScope.$new();
      element = angular.element('<data-search for="{{forContent}}">');
      scope.forContent = 'series';
      element = $compile(element)(scope);
      scope.$digest();
    }));

    it("should be compiled", function() {
      var formInput = element.find('input');
      expect(formInput.length).toBe(1);
    });

    it("should have the correct placeholder", function() {
      var placeholder = element.find('input')[0].placeholder;
      expect(placeholder).toEqual('recherche rapide par nom de série...');
    });

    it("should change the search value", function() {
      pending();
    });
  });


});
