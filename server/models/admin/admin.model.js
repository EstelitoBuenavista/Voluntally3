const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, Datatypes) => {
  const Admin = sequelize.define("admin", {
    admin_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "user_id",
      },
    },
  });

  return Admin;
};
