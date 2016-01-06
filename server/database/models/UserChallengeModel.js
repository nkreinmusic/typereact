module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserChallenge', {
    id: {
      type: DataTypes.INTEGER(20),
      primaryKey: true,
      autoIncrement: true
    },
    userID: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      references: {
        model: 'Users',
        key: 'id'
      },
      field: 'user_id',
      allowNull: false
    },
    challengeID: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      references: {
        model: 'Challenges',
        key: 'id'
      },
      field: 'challenge_id',
      allowNull: false
    },
    numKeyStrokes: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      field: 'num_key_strokes'
    },
    keyStrokeList: {
      type: DataTypes.TEXT('medium'),
      field: 'key_stroke_list'
    },
    timeToComplete: {
      type: DataTypes.DECIMAL(13, 2).UNSIGNED,
      field: 'time_to_complete'
    },
  }, {
    underscored: true
  })
}
