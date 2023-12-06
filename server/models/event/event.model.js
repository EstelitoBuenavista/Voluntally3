const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, Datatypes) => {
  const Event = sequelize.define("event", {
    event_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: DataTypes.ENUM("ongoing", "upcoming", "not-approved", "completed"),
      unique: false,
      defaultValue: "upcoming",
    },
    event_title: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
    event_desc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    event_loc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    event_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    no_of_reg: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    no_of_att: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    CES_points: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  });

  return Event;
};
