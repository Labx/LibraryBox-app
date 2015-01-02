'use strict';

describe('Service: books', function () {

  // load the service's module
  beforeEach(module('libraryboxApp'));

  // instantiate service
  var books, httpBackend;
  beforeEach(inject(function (_Books_, $httpBackend) {
    books = _Books_;
    httpBackend = $httpBackend;
    httpBackend.whenGET('/data/dump-books.json').respond([
      {"id":5,"title":"Jacques le fataliste et son maître","sort":"Jacques le fataliste et son maître","timestamp":"2014-09-11 13:15:03.020000+00:00","pubdate":"2012-06-17 00:10:30+00:00","series_index":1,"author_sort":"Diderot, Denis","isbn":"","lccn":"","path":"Denis Diderot/Jacques le fataliste et son maitre (5)","flags":1,"uuid":"79153dd3-80e5-4e6e-8ffd-b810f314fd8d","has_cover":1,"last_modified":"2014-10-08 14:51:24.510000+00:00"},
      {"id":6,"title":"Crime et châtiment","sort":"Crime et châtiment","timestamp":"2014-09-11 13:15:05.652000+00:00","pubdate":"2009-11-27 23:00:00+00:00","series_index":1,"author_sort":"Dostoïevski, Fédor Mikhaïlivitch","isbn":"","lccn":"","path":"Fedor Mikhailivitch Dostoievski/Crime et chatiment (6)","flags":1,"uuid":"edeb4730-d457-4a04-92c2-ee56290d9096","has_cover":1,"last_modified":"2014-10-08 14:53:09.900000+00:00"},
      {"id":7,"title":"Les Frères Karamazov","sort":"Frères Karamazov, Les","timestamp":"2014-09-11 13:15:06.240000+00:00","pubdate":"2011-06-08 22:00:00+00:00","series_index":1,"author_sort":"Dostoïevski, Fédor Mikhaïlovitch","isbn":"","lccn":"","path":"Fedor Mikhailovitch Dostoievski/Les Freres Karamazov (7)","flags":1,"uuid":"2340a37d-f9ac-489b-a58c-0d8f8251ae24","has_cover":1,"last_modified":"2014-10-06 16:16:05.193000+00:00"}
    ]);
  }));

  it('should do something', function () {
    expect(!!books).toBe(true);
  });

  it('is able to return a list of books', function() {
    books.all().then(function (returnedBooks) {
      expect(returnedBooks.length).toEqual(3);
    });
    httpBackend.flush();
  });

  it('is able to find a book with his id', function() {
    books.find(6).then(function(returnedBook) {
      expect(returnedBook.id).toEqual(6);
      expect(returnedBook.title).toEqual("Crime et châtiment");
    });
    httpBackend.flush();
  });

});
