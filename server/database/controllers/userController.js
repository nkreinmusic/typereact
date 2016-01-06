var db = require('./../dbconfig.js');
var User = db.User;

module.exports = {
  findOrAdd: function(profile, done) {
    User.findOne({
      where: {
        githubID: profile.id,
      }
    }).then(function(user, err) {
        if(user === null) {
          return User.create({
            githubID: profile.id,
            githubProfile: profile._json.avatar_url,
            username: profile.username,
            githubName: profile.displayName
          }).then(function(user) {
            return done(null, user.dataValues)
          })
        } else {
          return done(null, user.dataValues)
        }
    })
  },
  findUserByID: function(req, res, next) {
    var userID = Number(req._parsedOriginalUrl.query)
    User.findOne({
      where: {
        id: userID
      }
    }).then(function(user) {
      res.send(user);
    })
  }
}