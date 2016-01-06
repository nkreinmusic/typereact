var secrets = require('./../../secrets.js')()
var userController = require('./../database/controllers/userController.js')

module.exports = function(express, passport, User, GitHubStrategy) {
  var authRouter = express.Router();

  var GITHUB_CLIENT_ID = secrets.GITHUB_CLIENT_ID;
  var GITHUB_CLIENT_SECRET = secrets.GITHUB_CLIENT_SECRET;

  passport.serializeUser(function(user, done) {
    console.log('serializeUser')
    done(null, user);
  });

  passport.deserializeUser(function(obj, done) {
    console.log('deserializeUser')
    done(null, obj);
  });

  passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:8080/auth/github/callback"
  },
    function(accessToken, refreshToken, profile, done) {
      userController.findOrAdd(profile, done);
    }
  ));

  authRouter.get('/github',
    passport.authenticate('github', { scope: [ 'user:email' ] }),
      function(req, res){
  });

  authRouter.get('/github/callback', 
    passport.authenticate('github', { failureRedirect: '/login' }),
      function(req, res) {
        res.redirect('/');
  });

  authRouter.get('/logout', function(req, res) {
    console.log(req.user, 'logging out')
    req.logout();
    res.redirect('/');
  })

  return authRouter;
  
}





