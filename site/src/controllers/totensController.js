var totensModel = require("../models/totensModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA totensController");
    res.json("ESTAMOS FUNCIONANDO!");
}


function listarTotens(req, res) {
    var detalhe = req.params.detalhe;
    totensModel.listarTotens(detalhe)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}



module.exports = {
    testar,
    listarTotens
}