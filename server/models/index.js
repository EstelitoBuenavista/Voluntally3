const dbConfig = require("../config/db.config.js");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
  define: {
    timestamps: false,
  },
});

const db = {
  sequelize: sequelize,
  Sequelize: Sequelize,
};

// connect to all models
db.user = require("./user/user.model.js")(sequelize, Sequelize);
db.student = require("./student/student.model.js")(sequelize, Sequelize);
db.event = require("./event/event.model.js")(sequelize, Sequelize);
// db.event_detail = require("./event_detail/event_detail.model.js")(
//   sequelize,
//   Sequelize
// );
db.event_attendance = require("./event_attendance/event_attendance.model.js")(
  sequelize,
  Sequelize
);
db.admin = require("./admin/admin.model.js")(sequelize, Sequelize);
// db.role = require("./role/role.model.js")(sequelize, Sequelize);

//RELATIONS
// db.user.hasOne(db.role, { foreignKey: "role_id" });
// db.role.belongsTo(db.user, { foreignKey: "role_id" });

// db.admin.belongsTo(db.user, { foreignKey: "user_id" });
// db.user.hasOne(db.admin, { foreignKey: "user_id" });

// db.student.belongsTo(db.user, { foreignKey: "user_id" });
// db.user.hasOne(db.student, { foreignKey: "user_id" });

// db.student.hasMany(db.event_attendance, { foreignKey: "student_id" });
// db.event_attendance.belongsTo(db.student, { foreignKey: "student_id" });

// db.event.hasMany(db.event_attendance, { foreignKey: "e_a_id" });
// db.event_attendance.belongsTo(db.event, { foreignKey: "e_a_id" });
db.event_attendance.belongsTo(db.event, { foreignKey: "att_id" });
db.event.hasMany(db.event_attendance, { foreignKey: "att_id" });

db.student.hasMany(db.event_attendance, { foreignKey: "student_id" });
db.event_attendance.belongsTo(db.student, { foreignKey: "student_id" });



db.student.belongsTo(db.user, { foreignKey: "user_id" });
db.user.hasOne(db.student, { foreignKey: "user_id" });

db.admin.belongsTo(db.user, { foreignKey: "user_id" });
db.user.hasOne(db.admin, { foreignKey: "user_id" });

module.exports = db;
