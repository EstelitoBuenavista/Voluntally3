const db = require("../models");
const Op = db.Sequelize.Op;
const Event_attendance = db.event_attendance;
// const Event = db.event;
// const Student = db.student;

//create is a bit wonky, need to fix, can't create without a legit student (which doesnt make it wonky but postman you know)
exports.create = async (req, res) => {
  const data = req.body.data;
  const event_attendance = {
    //att_status: data.att_status,
    student_id: data.student_id,
    event_id: data.event_id,
  };

  Event_attendance.create(event_attendance)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findAttByEvent = (req, res) => {
  //search options
  const event_id = req.body.event_id;
  Event_attendance.findAll({
    where: {
      event_id: {
        [Op.eq]: event_id,
      },
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findAttByStudent = (req, res) => {
  //search options
  const student_id = req.body.student_id;
  Event_attendance.findAll({
    where: {
      student_id: {
        [Op.eq]: student_id,
      },
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

//NOTE: PLEASE DO TELL ME IF WE SHOULD HAVE A FILTER SYSTEM THAT SHOWS STUDENT && STATUS
//EX: SHOW RECORDS OF ATTENDANCE BY A STUDENT THAT IS APPROVED yer

exports.findByAttID = (req, res) => {
  //options
  let att_id = req.body.att_id;

  Event_attendance.findByPk(att_id)
    .then((data) => {
      res.send({
        status: data ? "found" : "not found",
        data: data ? data : null,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.update = (req, res) => {
  let data = req.body;
  Event_attendance.update(data.event_attendance, {
    where: { att_id: data.att_id },
  })
    .then(() => {
      res.status(200).send({
        message: "event attendance record updated successfully",
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.delete = (req, res) => {
  let data = req.body;
  Event_attendance.destroy({ where: { att_id: data.att_id } })
    .then(() => {
      res.status(200).send({
        message: "event attendance deleted successfully",
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
