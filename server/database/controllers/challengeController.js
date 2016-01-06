var db = require('./../dbconfig.js');
var Challenge = db.Challenge;

module.exports = {
  postChallenge: function(req, res, next) {
    // var newChallenge = Challenge.build({
    //   challengeUnsolved: 'function() {unsolved challenge}',
    //   challengeSolved: 'function() {solved challenge}',
    //   difficultyLevel: 'extreme',
    //   goldMedalTime: 30,
    //   silverMedalTime: 45,
    //   bronzeMedalTime: 60
    // })
    //will need to attach challenge information to post request from front end
    var newChallenge = Challenge.build({
      challengeInstructions: req.body.challengeInstructions,
      challengeName: req.body.challengeName,
      challengeCategory: req.body.challengeCategory,
      challengeUnsolved: req.body.challengeUnsolved,
      challengeSolved: req.body.challengeSolved,
      difficultyLevel: req.body.difficultyLevel,
      goldMedalTime: req.body.goldMedalTime,
      silverMedalTime: req.body.silverMedalTime,
      bronzeMedalTime: req.body.bronzeMedalTime,
      goldKeyStrokes: req.body.goldKeyStrokes,
      silverKeyStrokes: req.body.silverKeyStrokes,
      bronzeKeyStrokes: req.body.bronzeKeyStrokes,
      numPlays: req.body.numPlays,
      numRatings: req.body.numRatings,
      totalRatingScore: req.body.totalRatingScore
    })

    newChallenge.save().then(function(user) {
      console.log('added challenge');
      res.send('success');
    })
  },
  getFirstChallenge: function(req, res, next) {
    Challenge.findOne({
      where: {
        id: {
          $gt: 0
        }
      }
    }).then(function(chal, err) {
      if(chal === null) {
        res.send('no challenges in the database');
      }
      res.send(chal)
    })
  },
  getAllChallenges: function(req, res, next) {
    Challenge.findAll({
      where: {
        id: {
          $gt: 0
        }
      }
    }).then(function(chal, err) {
      if (chal === null) {
        res.send('no challenges retrieved')
      }
      res.send(chal);
    })
  },
  getChallengeByIndex: function(req, res, next) {
    var chalID = Number(req._parsedOriginalUrl.query)
    if(!Boolean(chalID)) {
      res.send('null');
    }
    Challenge.findOne({
      where: {
        id: chalID
      }
    }).then(function(chal, err) {
      if (chal === null) {
        res.send('null');
      } else {
        res.send(chal);
      }
    })
  }
}