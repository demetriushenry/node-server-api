module.exports = app => {
  const devices = require("../controllers/device.controller.js");

  var router = require("express").Router();
  
  router.post("/api/devices", devices.create);
  router.get("/api/devices", devices.findAll);
  router.get("/api/devices/:id", devices.findOne);
  router.delete("/api/devices/:id", devices.delete);

  app.use("/", router);
};
