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

function listarTotensIncompletos(req, res) {
    var detalhe = req.params.detalhe;
    totensModel.listarTotensIncompletos(detalhe)
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

function getTotensInoperantes(req, res) {
    totensModel.getTotensInoperantes()
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

function getTotensOperantes(req, res) {
    totensModel.getTotensOperantes()
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

function getIncidentesAtivos(req, res) {
    totensModel.getIncidentesAtivos()
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

function desligarTotem(req, res) {
    var idMaquina = req.params.idMaquina;
    totensModel.desligarTotem(idMaquina)
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

function ligarTotem(req, res) {
    var idMaquina = req.params.idMaquina;
    totensModel.ligarTotem(idMaquina)
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

function finalizarCadastroMaquina(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var dataInstalacao = req.body.dataServer;
    var idMaquina = req.params.idMaquina;

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    totensModel.finalizarCadastroMaquina(idMaquina,dataInstalacao)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}



module.exports = {
    testar,
    listarTotens,
    listarTotensIncompletos,
    finalizarCadastroMaquina,
    getTotensInoperantes,
    getTotensOperantes,
    desligarTotem,
    ligarTotem,
    getIncidentesAtivos
}