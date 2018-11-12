'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    userName: { type: DataTypes.STRING , allowNull: false },
    password: { type: DataTypes.STRING , allowNull: false },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false}
  }, {});
  return Users;
};