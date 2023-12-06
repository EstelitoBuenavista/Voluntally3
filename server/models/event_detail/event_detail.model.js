const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, Datatypes) => {
  const Event_detail = sequelize.define("event_detail", {
    event_detail_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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

  return Event_detail;
};
