module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Friend', {
    user: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      references: {
        model: 'Users',
        key: 'id'
      },
      field: 'user',
      allowNull: false
    },
    friend: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      references: {
        model: 'Users',
        key: 'id',
      },
      field: 'friend'
    }

  }, {
    underscored: true
  })
}
