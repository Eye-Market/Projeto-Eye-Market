var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idMaquina", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/ultimastodos", function (req, res) {
    medidaController.buscarUltimasMedidasTodos(req, res);
});

router.get("/ultimastodosComRisco", function (req, res) {
    medidaController.buscarUltimasMedidasTodosComRisco(req, res);
});

router.get("/tempo-real/:idMaquina", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
});


router.get("/tempo-realtodos", function (req, res) {
    medidaController.buscarMedidasEmTempoRealTodos(req, res);
});

router.get("/tempo-realtodosComRisco", function (req, res) {
    medidaController.buscarMedidasEmTempoRealTodosComRisco(req, res);
})

module.exports = router;