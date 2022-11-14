var express = require("express");
var router = express.Router();

var totensController = require("../controllers/totensController");


router.get("/listarTotens/:detalhe", function (req, res) {
    totensController.listarTotens(req, res);
})

router.get("/listarTotensIncompletos/:detalhe", function (req, res) {
    totensController.listarTotensIncompletos(req, res);
})

router.post("/finalizarCadastroMaquina/:idMaquina", function (req, res) {
    totensController.finalizarCadastroMaquina(req, res);
})

module.exports = router;