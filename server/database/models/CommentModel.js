module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Comment', {
    commentText: {
      type: DataTypes.TEXT('medium'),
      field: 'comment_text'
    },
    commentLikes: {
      type: DataTypes.INTEGER(11),
      field: 'comment_likes'
    },
    commentDislikes: {
      type: DataTypes.INTEGER(11),
      field: 'comment_dislikes'
    }
  }, {
    underscored: true
  })
}