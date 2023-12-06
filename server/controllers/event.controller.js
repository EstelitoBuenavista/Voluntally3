/*MARY'S NOTES: btw, I dunno how the filter works in front end, so if we actually do need
to sort by name or find by amount of CES points and etc. just either (a)tell me so I could
place in the method or if you want kay (b)add one in yourself, yer just lmk ra either works
for me frfr*/
const { where } = require("sequelize");
const db = require("../models");
const Op = db.Sequelize.Op;
const Event = db.event;

exports.create = async (req, res) => {
  const data = req.body;
  const event = {
    event_title: data.event_title,
    event_desc: data.event_desc,
    event_loc: data.event_loc,
    event_date: data.event_date,
    CES_points: data.CES_points,
    status: data.status,
  };

  Event.create(event)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findAll = (req, res) => {
  //keep findAll blank without any attributes so that the method finds all frfr
  Event.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findEventByID = (req, res) => {
  //options
  let event_id = req.body.event_id;

  //the .findByPk method refers to finding somehting by it's primary key
  Event.findByPk(event_id)
    .then((data) => {
      res.status(200).send({
        status: data ? "found" : "not found",
        data: data ? data : null,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findEventByStatus = (req, res) => {
  //options
  let status = req.body.status;

  //the .findByPk method refers to finding somehting by it's primary key
  Event.findAll({
    where: {
      status: status,
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.update = (req, res) => {
  let data = req.body;
  Event.update(data.event, { where: { event_id: data.event_id } })
    .then(() => {
      res.status(200).send({
        message: "event updated successfully",
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.delete = (req, res) => {
  let data = req.body;
  //destroy is a sequelize method to delete basically
  Event.destroy({ where: { event_id: data.event_id } })
    .then(() => {
      res.status(200).send({
        message: "event deleted successfully",
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.deleteOne = (req, res) => {
  //options
  let id = req.params.id;

  Event.destroy({ where: { event_id: id } })
    .then(() => {
      res.status(200).send({
        message: "event deleted successfully",
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.updateStatusToDate = (req, res) => {
  Event.update(
    { status: "completed" },
    {
      where: {
        [Op.or]: [{ status: "ongoing" }, { status: "upcoming" }],
        [Op.and]: [{ event_date: new Date() }],
      },
    }
  )
    .then(() => {
      res.status(200).send({
        message: "updated the times frfr",
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
