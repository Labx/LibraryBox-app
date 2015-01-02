'use strict';

describe('Service: series', function () {

  // load the service's module
  beforeEach(module('libraryboxApp'));

  // instantiate service
  var series, httpBackend;
  beforeEach(inject(function (_Series_, $httpBackend) {
    series = _Series_;
    httpBackend = $httpBackend;
    httpBackend.whenGET('/data/dump-series.json').respond([
      {"id":1,"name":"Bas de Cuir","sort":"Bas de Cuir"},
      {"id":2,"name":"Arsène Lupin, gentleman cambrioleur","sort":"Arsène Lupin, gentleman cambrioleur"},
      {"id":3,"name":"Mille et une nuits","sort":"Mille et une nuits"}
    ]);
  }));

  it('should do something', function () {
    expect(!!series).toBe(true);
  });

  it('is able to return a list of series', function() {
    series.all().then(function (returnedSeries) {
      expect(returnedSeries.length).toEqual(3);
    });
    httpBackend.flush();
  });

  it('is able to find an serie with his id', function() {
    series.find(2).then(function(returnedSerie) {
      expect(returnedSerie.id).toEqual(2);
      expect(returnedSerie.name).toEqual("Arsène Lupin, gentleman cambrioleur");
    });
    httpBackend.flush();
  });

});
