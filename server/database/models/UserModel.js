module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(50)
    },
    githubID: {
      type: DataTypes.STRING(30),
      field: 'github_id',
      unique: true
    },
    githubProfile: {
      type: DataTypes.STRING(100),
      field: 'github_profile'
    },
    githubName: {
      type: DataTypes.STRING(50),
      field: 'github_name'
    },
    email: {
      type: DataTypes.STRING(40)
    },
    role: {
      type: DataTypes.INTEGER(11)
    },
    numericalRank: {
      type: DataTypes.INTEGER,
      field: 'numerical_rank'
    },
    shortcutPreference: {
      type: DataTypes.STRING(30),
      field: 'shortcut_preference'
    },
    macOrPC: {
      type: DataTypes.ENUM('mac','pc'),
      field: 'mac_or_pc'
    },
    numChallengesCompleted: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      field: 'num_challenges_completed'
    }
  }, {
    underscored: true
  });
}
