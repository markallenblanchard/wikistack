const express = require("express");
const router = express.Router();
const models = require("../models");
const views = require("../views")



router.get("/", (req, res) => {
  res.send("");
});

router.post("/", (req, res) => {
  res.send("")
});

router.get("/add", (req, res) => {
  res.send(views.addPage());
});

module.exports = router;
