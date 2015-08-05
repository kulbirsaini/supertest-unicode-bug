var chai = require('chai');
var path = require('path');
var supertest = require('supertest');

var app = require(path.join(__dirname, '../app'));
var request = supertest('http://localhost:5000');
var should = chai.should();

describe('GET', function() {
  var server = null;

  before(function(done) {
    server = app().listen(process.env.PORT || 5000);
    done();
  });

  after(function(done) {
    if (server) {
      server.close();
    }
    done();
  });

  it('should return Yo! when fetching index', function(done) {
    request.get('/')
      .expect(200)
      .expect('Yo!', done);
  });

  it('should throw 404 for a page that does not exist', function(done) {
    request.get('/asdf')
      .expect(404, done);
  });

  it('why ASCII should have all the fun :-(', function(done) {
    request.get('/❤☀☆☂☻♞☯')
      .expect(404, done);
  });
});
