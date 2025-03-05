module.exports = (app) => {
  const categories = require("../controllers/category.controller.js");

  var router = require("express").Router();

  router.post("/api/categories", categories.create);
  router.get("/api/categories", categories.findAll);
  router.get("/api/categories/:id", categories.findOne);
  router.delete("/api/categories/:id", categories.delete);

  app.use("/", router);
};
