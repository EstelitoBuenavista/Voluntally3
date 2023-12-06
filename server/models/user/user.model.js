const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, Datatypes) => {
  const User = sequelize.define("user", {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    last_name: { type: DataTypes.STRING, unique: false, allowNull: false },
    first_name: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("admin", "student"),
      allowNull: false,
      defaultValue: "student",
    },
  });

  return User;
};
