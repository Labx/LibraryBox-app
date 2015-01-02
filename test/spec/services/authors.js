'use strict';

describe('Service: authors', function () {

  // load the service's module
  beforeEach(module('libraryboxApp'));

  // instantiate service
  var authors, httpBackend;
  beforeEach(inject(function (_Authors_, $httpBackend) {
    authors = _Authors_;
    httpBackend = $httpBackend;
    httpBackend.whenGET('/data/dump-authors.json').respond([
      {"id":3,"name":"James Fenimore Cooper","sort":"Cooper, James Fenimore","link":""},
      {"id":4,"name":"Denis Diderot","sort":"Diderot, Denis","link":""},
      {"id":5,"name":"Fédor Mikhaïlivitch Dostoïevski","sort":"Dostoïevski, Fédor Mikhaïlivitch","link":""},
      {"id":6,"name":"Fédor Mikhaïlovitch Dostoïevski","sort":"Dostoïevski, Fédor Mikhaïlovitch","link":""}
    ]);
  }));

  it('should do something', function () {
    expect(!!authors).toBe(true);
  });

  it('is able to return a list of authors', function() {
    authors.all().then(function (returnedAuthors) {
      expect(returnedAuthors.length).toEqual(4);
    });
    httpBackend.flush();
  });

  it('is able to find an author with his id', function() {
    authors.find(4).then(function(returnedAuthor) {
      expect(returnedAuthor.id).toEqual(4);
      expect(returnedAuthor.name).toEqual("Denis Diderot");
    });
    httpBackend.flush();
  });

});
