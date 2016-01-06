var Sequelize = require('sequelize');
var mysql      = require('mysql');
//define whether we are in a test or dev environment
var dbName;
if(process.env.NODE_ENV === 'test') {
  console.log('going to connect to test database');
  dbName = 'typereacttest';
} else if(process.env.NODE_ENV === 'development') {
  console.log('going to connect to dev database');
  dbName = 'typereactv1';
}
//connect to database
//when testing locally, please add a database called typereactv1 for mysql user: testuser1 and password: testuser1
var sequelize = new Sequelize(dbName, 'testuser1', 'testuser1', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

//list of all models; need to use the exact names of model files
//(e.g. include 'Challenge' in the array if there is a 'ChallengeModel.js')
var models = [
  'Challenge',
  'User',
  'UserChallenge',
  'Achievement',
  'UserAchievement',
  'Comment',
  'Competition',
  'Friend'
];

//add each model as a property to module.exports
models.forEach(function(model) {
  module.exports[model] = sequelize.import(__dirname+'/models/'+model+'Model.js');
})

//function to define the relationships between models
var defineRelationships = function(modexp) {
  modexp.Challenge.belongsTo(modexp.User, {as: 'submitted_by'});
  modexp.Achievement.belongsToMany(modexp.User, {through: 'UserAchievement'});
  modexp.User.belongsToMany(modexp.Achievement, {through: 'UserAchievement'});
  modexp.Comment.belongsTo(modexp.User);
  modexp.User.hasMany(modexp.Comment);
  modexp.Comment.belongsTo(modexp.Challenge);
  modexp.Challenge.hasMany(modexp.Comment);
  modexp.Competition.belongsTo(modexp.Challenge);
  modexp.Challenge.hasMany(modexp.Competition);
};
//invoke function to define relationships
defineRelationships(module.exports);

//create the data tables if they do not already exist
sequelize.sync().then(function() {
  console.log('connected to database called: ',dbName);
});
