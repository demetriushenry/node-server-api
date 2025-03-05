import { db } from "../models";

const Device = db.devices;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.category) {
    res.status(400).send({
      message: "Category can not be empty!",
    });
    return;
  }

  if (!req.body.partNumber) {
    res.status(400).send({
      message: "PartNumber can not be empty!",
    });
    return;
  }

  const device = {
    category: req.body.category,
    color: req.body.color,
    partNumber: req.body.partNumber,
  };

  Device.create(device)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error creating device.",
      });
    });
};

exports.findAll = (req, res) => {
  Device.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error retrieving devices.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.query.id;

  Device.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error retrieving device.",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Device.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Device was deleted successfully!",
        });
      } else {
        res.send({
          message: "Cannot delete Device with id=${id}.",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Device with id=" + id,
      });
    });
};
