'use strict';

describe('Service: tags', function () {

  // load the service's module
  beforeEach(module('libraryboxApp'));

  // instantiate service
  var tags, httpBackend;
  beforeEach(inject(function (_Tags_, $httpBackend) {
    tags = _Tags_;
    httpBackend = $httpBackend;
    httpBackend.whenGET('/data/dump-tags.json').respond([
      {"id":55,"name":"Danemark"},
      {"id":56,"name":"Allemagne"},
      {"id":57,"name":"Italie"},
      {"id":58,"name":"Chine"},
      {"id":60,"name":"Littérature sentimentale"}
    ]);
  }));

  it('should do something', function () {
    expect(!!tags).toBe(true);
  });

  it('is able to return a list of tags', function() {
    tags.all().then(function (returnedTags) {
      expect(returnedTags.length).toEqual(5);
    });
    httpBackend.flush();
  });

  it('is able to find an tag with his id', function() {
    tags.find(56).then(function(returnedTag) {
      expect(returnedTag.id).toEqual(56);
      expect(returnedTag.name).toEqual("Allemagne");
    });
    httpBackend.flush();
  });

});
