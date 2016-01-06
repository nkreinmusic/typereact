var userController = require('./../database/controllers/userController.js');

module.exports = function(express) {
  var userRouter = express.Router();

  userRouter.use('/find', userController.findUserByID)

  return userRouter;
}