var express = require("express");
var router = express.Router();

var totensController = require("../controllers/totensController");


router.get("/listarTotens/:detalhe", function (req, res) {
    totensController.listarTotens(req, res);
})

module.exports = router;