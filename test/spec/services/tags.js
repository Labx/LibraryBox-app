'use strict';

describe('Service: tags', function () {

  // load the service's module
  beforeEach(module('libraryboxApp'));

  // instantiate service
  var tags;
  beforeEach(inject(function (Tags) {
    tags = Tags;
  }));

  it('should do something', function () {
    expect(!!tags).toBe(true);
  });

});
