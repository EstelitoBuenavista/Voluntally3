/*THERE IS A (1)CREATE ATTENDANCE HERE FOR CREATION, (2)DELETE DETAILS FOR A PARTICULAR EVENT, 
(3)UPDATE DETAILS FOR A PARTICULAR EVENT. I TOOK OUT THE FINALL FUNCTIONALITY SINCE MOST LIKELY
IT WILL NEVER BE USED
const db = require("../models");
//const Op = db.Sequelize.Op; => wasn't used cause of 'WHERE' :)
const Event_detail = db.event;

exports.create = async (req, res) => {
  const data = req.body.data;

  // Check if req.body.data is defined
  if (!data) {
    return res
      .status(400)
      .send({ message: "Data is required in the request body." });
  }

  const event_detail = {
    event_title: data.event_title,
    event_desc: data.event_desc,
    event_loc: data.event_loc,
    event_date: data.event_date,
    no_of_reg: data.no_of_reg,
    no_of_att: data.no_of_att,
    CES_points: data.CES_points,
  };

  Event_detail.create(event_detail)
    .then((data) => {
      res.status(201).send(data); // 201 status code for successful creation
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findOneEventDetail = (req, res) => {
  //options
  let event_detail_id = req.body.event_detail_id;

  //Mary's Notes: the findByPk is a finding query na method and
  //it refers to finding somehting by it's primary key
  Event_detail.findByPk(event_detail_id)
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

exports.update = (req, res) => {
  let data = req.body;

  Event_detail.update(data.event_detail, {
    //Mary's Notes: where implicitly declares na daan na it has to be equal to someting
    //so no need to use operations (the Op) here to act as an '='
    where: { event_detail_id: data.event_detail_id },
  })
    .then(() => {
      res.status(200).send({
        message: "event details updated successfully",
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.delete = (req, res) => {
  let data = req.body;
  //Mary's Notes:destroy is a sequelize method to delete basically
  Event_detail.destroy({ where: { event_detail_id: data.event_detail_id } })
    .then(() => {
      res.status(200).send({
        message: "event details deleted successfully",
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
*/