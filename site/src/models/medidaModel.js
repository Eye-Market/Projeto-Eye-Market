var database = require("../database/config");

function buscarUltimasMedidas(idMaquina, limite_linhas) {

    instrucaoSql = `select usoMemoria, usoMemoriaDisponivel, QtdProcessos, Atividade from DadosTotem WHERE FKTotemid = ${idMaquina}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idMaquina) {


    instrucaoSql = `select 
        usoMemoriaDisponivel, 
        usoMemoria,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                        from DadosTotem where FKTotemid = ${idMaquina} 
                    order by IDDadosTotem desc limit 1`;


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}