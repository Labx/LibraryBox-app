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

});
