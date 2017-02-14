// var assert = require('assert');
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal(-1, [1,2,3].indexOf(4));
//     });
//   });
// });



// IMPORTANT: DOESN'T WORK

var chai = require('chai');  
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Test request', function() {

  it('/', function () {

    chai.request('http://localhost:80')
      .get('/')
      .end(function(err, res) {
        expect(res).to.have.status(200);
        done(err);                               // <= Call done to signal callback end
      });

  });

});