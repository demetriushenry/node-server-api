module.exports = app => {
  const devices = require("../controllers/device.controller.js");

  var router = require("express").Router();

  router.post("/", devices.create);
  router.get("/", devices.findAll);
  router.get("/:id", devices.findOne);
  router.delete("/:id", devices.delete);

  app.use("/api/devices", router);
};
