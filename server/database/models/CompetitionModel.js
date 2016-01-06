module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Competition', {
    playerOne: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      references: {
        model: 'Users',
        key: 'id'
      },
      field: 'player_one',
      allowNull: false
    },
    playerTwo: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      references: {
        model: 'Users',
        key: 'id',
      },
      field: 'player_two'
    },
    winningTime: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      field: 'winning_time'
    },
    losingTime: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      field: 'losing_time'
    },
    winningNumKeyStrokes: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      field: 'winning_num_key_strokes'
    },
    losingNumKeyStrokes: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      field: 'losing_num_key_strokes'
    },
    winningKeyStrokeList: {
      type: DataTypes.TEXT('medium'),
      field: 'winning_key_stroke_list'
    },
    losingKeyStrokeList: {
      type: DataTypes.TEXT('medium'),
      field: 'losing_key_stroke_list'
    },

  }, {
    underscored: true
  })
}
