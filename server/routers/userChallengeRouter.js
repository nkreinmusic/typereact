var userChallengeController = require('./../database/controllers/userChallengeController.js');

module.exports = function(express) {
  var userChallengeRouter = express.Router();

  userChallengeRouter.use('/toptwentyfivetimes', userChallengeController.getTop25Times);

  userChallengeRouter.use('/toptwentyfivekeystrokes', userChallengeController.getTop25KeyStrokes);

  userChallengeRouter.post('/postuserchallenge', userChallengeController.postUserChallenge, userChallengeController.checkForDuplicates)

  // userChallengeRouter.use('/topFive', userChallengeController.getTopFive)
  
  userChallengeRouter.get('/profileStats', userChallengeController.getCompletedChallenges)
  
  return userChallengeRouter;
}
