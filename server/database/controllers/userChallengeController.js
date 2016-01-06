var db = require('./../dbconfig.js');
var UserChallenge = db.UserChallenge;
var User = db.User;
var Challenge = db.Challenge;

module.exports = {
  postUserChallenge: function(req, res, next) {

    var newUserChallenge = UserChallenge.build({
      numKeyStrokes: req.body.numKeyStrokes,
      timeToComplete: req.body.timeToComplete,
      userID: req.body.userID,
      challengeID: req.body.challengeID,
    })

    return newUserChallenge.save().then(function(savedchal) {
      return Challenge.findById(req.body.challengeID).then(function(chal) {
        return chal.increment('numPlays').then(function() {
          return next();
        });
      });
    });
  },

  checkForDuplicates: function(req, res, next) {
    var currentTime = new Date((new Date() - 2000));

    return UserChallenge.findOne({
      where: {
        userID: req.body.userID,
        challengeID: req.body.challengeID,
        numKeyStrokes: {
          $lt: req.body.numKeyStrokes
        },
        updated_at: {
          $gt: currentTime
        }
      }
    }).then(function(dupChallenge) {
      if(dupChallenge !== null) {
        return dupChallenge.destroy().then(function() {
          return Challenge.findById(req.body.challengeID).then(function(chal) {
            return chal.decrement('numPlays').then(function() {
              return res.send('success');
            });
          });
        });
      } else {
        return res.send('success');
      }
    })
  },

  getTop25Times: function(req, res, next) {
    var chalID = Number(req._parsedOriginalUrl.query)
    UserChallenge.findAll({
      where: {
        challengeID: chalID,
        userID: {
          ne: 1
        }
      },
      limit: 25,
      order: 'timeToComplete ASC'
    }).then(function(times, err) {
      if(err) {
        res.send(err);
      }
      res.send(times);
    })
  },

  getTop25KeyStrokes: function(req, res, next) {
    var chalID = Number(req._parsedOriginalUrl.query)
    UserChallenge.findAll({
      where: {
        challengeID: chalID,
        userID: {
          ne: 1
        }
      },
      limit: 25,
      order: 'numKeyStrokes ASC'
    }).then(function(times, err) {
      if(err) {
        res.send(err);
      }
      res.send(times);
    })
  },

  getCompletedChallenges: function(req, res, next) {
    var userID= Number(req._parsedOriginalUrl.query)
    console.log('req is ', req._parsedOriginalUrl)
    UserChallenge.findAll({
      where: {
        userID: userID
      },
      order: 'numKeyStrokes ASC'
    }).then(function(results) {
      console.log('results in completed challenges is ', results)
      res.send(results)
    })
  }
}