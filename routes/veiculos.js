var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.render("veiculos/home");
});

router.get("/edicao", function (req, res) {
  res.render("veiculos/edicao");
});

module.exports = router;
