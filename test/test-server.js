process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('./../server/server.js');
// var sequelize = require('sequelize');
// var mysql = require('mysql')
var User = require('./../server/database/dbconfig.js').User
var should = chai.should();

chai.use(chaiHttp);

describe('Testing TypeReactDB', function() {
  it('...', function(done){
    this.timeout(10000);
    // setTimeout(done, 15000);
  });

  var challenge = {
    challengeUnsolved: 'function() {testing...unsolved challenge}',
    challengeSolved: 'function() {testing...solved challenge}',
    difficultyLevel: 'testing',
    goldMedalTime: 1,
    silverMedalTime: 2,
    bronzeMedalTime: 3
  }
  it('should be able to post challenges to the database', function(done) {
    chai.request(server)
      .post('/challenge/postChallenge')
      .send(challenge)
      .end(function(err, res){
        res.should.have.status(200);
        // res.body.should.have.property('SUCCESS');
        done();
      });
  });
  it('should be able to get challenges from the database', function(done) {
    chai.request(server)
      .get('/challenge/getChallenge')
      .end(function(err, res){
        res.should.be.JSON;
        res.should.have.status(200);
        res.body.challengeSolved.should.equal('function() {testing...solved challenge}')
        done();
      });
  });  
});