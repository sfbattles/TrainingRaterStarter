'use strict';
module.exports = (sequelize, DataTypes) => {
  var Sessions = sequelize.define('Sessions', {
    Name: { type: DataTypes.STRING, allowNull: false },
    startTime: { type: DataTypes.DATE, allowNull: false },
    location: { type: DataTypes.STRING, allowNull: false },
  }, {});
  Sessions.associate = function (models) {
    models.Sessions.hasMany(models.Ratings, { foreignKey: 'sessionId', sourceKey: 'id' });
  }
  return Sessions;
};
