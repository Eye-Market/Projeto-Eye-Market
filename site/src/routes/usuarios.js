var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/pegarCargo/:email", function (req, res) {
    usuarioController.pegarCargo(req, res);
});

router.get("/listar/:cargo", function (req, res) {
    usuarioController.listar(req, res);
});

router.get("/listarPorID/:id", function (req, res) {
    usuarioController.listarPorID(req, res);
});


router.get("/inativar/:escolhaInativo", function (req, res) {
    usuarioController.inativar(req, res);
});

router.get("/listarNome/:nome", function (req, res) {
    usuarioController.listarNome(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/cadastrarFuncionario", function (req, res) {
    usuarioController.cadastrarFuncionario(req, res);
})

router.post("/atualizarFuncionario/", function (req, res) {
    usuarioController.atualizarFuncionario(req, res);
})

router.post("/cadastrar_empresa", function (req, res) {
    usuarioController.cadastrar_empresa(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

module.exports = router;