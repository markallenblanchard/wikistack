const express = require("express");
const router = express.Router();
const models = require("../models");



router.get("/", (req, res) => {
  res.send( "");
});

router.post("/", (req, res) => {
  res.send("")
});

router.get("/add", (req, res) => {
  res.send("");
});

module.exports = router;
