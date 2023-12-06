const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, Datatypes) => {
  const Event_attendance = sequelize.define("event_attendance", {
    att_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    att_status: {
      type: DataTypes.ENUM("absent", "pending", "approved"),
      defaultValue: "pending",
    },
    student_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "students",
        key: "student_id",
      },
    },
    event_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "events",
        key: "event_id",
      },
    },
  });

  return Event_attendance;
};
