'use strict';

describe('Service: authors', function () {

  // load the service's module
  beforeEach(module('libraryboxApp'));

  // instantiate service
  var authors;
  beforeEach(inject(function (Authors) {
    authors = Authors;
  }));

  it('should do something', function () {
    expect(!!authors).toBe(true);
  });

  it('is able to find an author with his id', function() {
    pending();
  });

  it('is able to return a list of authors', function() {
    // authors.all().then(function(data) {
    //   var authors = data;
    // });
    // expect(authors.length).toBeGreaterThan(1);
  });

});
