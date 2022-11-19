var express = require("express");
var router = express.Router();

var totensController = require("../controllers/totensController");


router.get("/listarTotens/:detalhe", function (req, res) {
    totensController.listarTotens(req, res);
})

router.get("/listarTotensIncompletos/:detalhe", function (req, res) {
    totensController.listarTotensIncompletos(req, res);
})

router.get("/getTotensInoperantes", function (req, res) {
    totensController.getTotensInoperantes(req, res);
})

router.get("/getTotensOperantes", function (req, res) {
    totensController.getTotensOperantes(req, res);
})

router.get("/getIncidentesAtivos", function (req, res) {
    totensController.getIncidentesAtivos(req, res);
})

router.get("/getIncidentes", function (req, res) {
    totensController.getIncidentes(req, res);
})

router.get("/desligarTotem/:idMaquina", function (req, res) {
    totensController.desligarTotem(req, res);
})

router.get("/ligarTotem/:idMaquina", function (req, res) {
    totensController.ligarTotem(req, res);
})

router.post("/finalizarCadastroMaquina/:idMaquina", function (req, res) {
    totensController.finalizarCadastroMaquina(req, res);
})

module.exports = router;