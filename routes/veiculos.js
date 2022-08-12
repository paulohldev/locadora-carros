var express = require("express");
var router = express.Router();
var dao = require("../database/dao");

router.get("/", function (req, res) {
  dao.list();
  res.render("veiculos/home");
});

router.get("/edicao", function (req, res) {
  res.render("veiculos/edicao");
});

module.exports = router;
