'use strict';

describe('Service: authors', function () {

  // load the service's module
  beforeEach(module('libraryboxApp'));

  // instantiate service
  var authors;
  beforeEach(inject(function (_authors_) {
    authors = _authors_;
  }));

  // it('should do something', function () {
  //   expect(!!authors).toBe(true);
  // });

});
