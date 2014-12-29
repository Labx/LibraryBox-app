'use strict';

describe('Service: series', function () {

  // load the service's module
  beforeEach(module('libraryboxApp'));

  // instantiate service
  var series;
  beforeEach(inject(function (Series) {
    series = Series;
  }));

  it('should do something', function () {
    expect(!!series).toBe(true);
  });

});
