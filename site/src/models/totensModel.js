var database = require("../database/config")

function listarTotens(detalhe) {
    console.log("ACESSEI O TOTENS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");

    if(detalhe == 'todos'){
        var instrucao = `
        SELECT IDTotem, Modelo, isLigado FROM Totem JOIN DadosTotem on IDTotem = FKTotemid;
        `;
    }else{
        var instrucao = `
        SELECT IDTotem, Modelo, isLigado FROM Totem JOIN DadosTotem on IDTotem = FKTotemid WHERE IDTotem = ${detalhe};
    `;
    }
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listarTotens
};