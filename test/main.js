var shriekWebRTC = require('../index');
var chai = require('chai');
var mocha = require('mocha');
var should = chai.should();

describe('Iframe', function() {
  var testurl = '@@iframe src=http://ya.ru@@';
  var testmsgs = [{
    text: '<p>' + testurl + '</p>'
  }];

  var result;

  before(function (done) {
    shriekWebRTC(testmsgs, function (err, data) {
      console.log(data);
      result = data[0].text;
    });
    done();
  });

  after(function (done) {
    done();
  });

  it('dump test', function (done) {
    result.should.be.a('string');
    done();
  });
});
