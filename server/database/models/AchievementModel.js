module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Achievement', {
    achievementName: {
      type: DataTypes.STRING(20),
      field: 'achievement_name'
    },
    achievementDescription: {
      type: DataTypes.STRING(50),
      field: 'achievement_description'
    },
    numChallengeRequirement: {
      type: DataTypes.INTEGER(11),
      field: 'num_challenge_requirement'
    },
    friendRequirement: {
      type: DataTypes.INTEGER(11),
      field: 'friend_requirement'
    },
    winRequirement: {
      type: DataTypes.INTEGER(11),
      field: 'win_requirement'
    },
  }, {
    underscored: true
  })
}