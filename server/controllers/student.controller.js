const db = require("../models");
const bcrypt = require('bcrypt')
//const Op = db.Sequelize.Op;
const Student = db.student;
const User = db.user;
const saltRounds = 8;

exports.create = async (req, res) => {

    const data = req.body;

   bcrypt.hash(data.password, saltRounds).then((hashedPass)=>{
    User.findAll({
      where: {
        email: data.email,
      },
    })
    .then((flag) => {
      if (flag.length > 0){ // checker to see if email in use
        res.status(400).send({flag, message: "Email Already in Use" });
        return;
      }
      const createdUser = {
        email: data.email,
        password: hashedPass.toString(),
        first_name: data.first_name,
        last_name: data.last_name,
        role: data.role,
      }
  
      User.create(createdUser)
      .then((thenData) => {
          console.log(data)
          let createdStudent = {
            program: data.program,
            year: data.year,
            user_id: thenData.user_id,
          }
          Student.create(createdStudent)
          .then((student) => {
            res.status(201).send({ createdUser, student });
          })
          .catch((err) => {
          res.status(500).send({ message: err.message });
          });
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  
    })
   });

  
} 

exports.findAll = (req, res) => {
  Student.findAll({
    include: [{
      model: User,
    }]
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
exports.findOne = (req, res) => {
  //options
  let student_id = req.params.id;

  //the .findByPk method refers to finding somehting by it's primary key
  Student.findByPk(student_id)
    .then((student) => {
      User.findByPk(student.user_id)
      .then((user) => {
        res.status(200).send({
          status: user && student ? "found" : "not found",
          student: student ? student : null,
          user: user ? user : null,
        });
      })
      
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findByProgram = (req, res) => {
  //conditional
  let program = req.body.program;

  if (!program) {
    return res.status(400).send({ message: "No program was filled out" });
  }

  Student.findAll({
    where: {
      program: program,
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findByYear = (req, res) => {
  //conditional
  let year = req.body.year;

  if (!year) {
    return res.status(400).send({ message: "No year was filled out" });
  }

  Student.findAll({
    where: {
      year: year,
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findOneID = (req, res) => {
  //options
  let student_id = req.body.student_id;

  //the .findByPk method refers to finding somehting by it's primary key
  Student.findByPk(student_id)
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
  let id = req.params.id
  let data = req.body;
  Student.update(data.student, { where: { student_id: id} })
    .then(() => {
      res.status(200).send({
        message: "student record updated successfully",
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.addPoint = (req, res) => {
  const id = req.params.id; 
  Student.increment('points', { where: { student_id: id }, by: 1 })
    .then(() => {
      res.status(200).send({
        message: "Student points incremented successfully",
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.minusPoint = (req, res) => {
  const id = req.params.id; 
  Student.findByPk(id).then((data) => {
    if (data.points <= 0){
      return res.status(400).send({ message: "Points Cannot be Negative" });
    }
  Student.decrement('points', { where: { student_id: id }, by: 1 })
    .then(() => {
      res.status(200).send({
        message: "Student points decremented successfully",
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
  })
};

exports.delete = (req, res) => {
  let data = req.body;
  //destroy is a sequelize method to delete basically
  Student.destroy({ where: { student_id: data.student_id } })
    .then(() => {
      res.status(200).send({
        message: "student record deleted successfully",
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.deleteOne = (req, res) => {
  let id = req.params.id;
  Student.findByPk(id)
  .then((data) => {
    if (!data) {
      return res.status(404).send({ message: "Student not found" });
    }
    const userID = data.user_id;
    Student.destroy({ where: { student_id: id } })
      .then(() => {
        User.destroy({ where: { user_id: userID } })
          .then(() => {
            res.status(200).send({ message: "Student record deleted successfully" });
          })
          .catch((err) => {
            res.status(500).send({ message: err.message });
          });
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  })
  .catch((err) => {
    res.status(500).send({ message: err.message });
  });
};
