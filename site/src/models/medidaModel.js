var database = require("../database/config");

function buscarUltimasMedidas(idMaquina, limite_linhas) {

    instrucaoSql = `select usoMemoria, usoMemoriaDisponivel, QtdProcessos, tempoAtividade from DadosTotem WHERE fkTotem = ${idMaquina}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idMaquina) {
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        usoMemoriaDisponivel, 
        usoMemoria,
        tempoAtividade,
        qtdProcessos,
        fkTotem, 
                        CONVERT(varchar, momento, 108) as momento_grafico
                        from dadosTotem where fkTotem = ${idMaquina} 
                    order by idDadosTotem desc`;

    }else if(process.env.AMBIENTE_PROCESSO == "desenvolvimento"){
        instrucaoSql = `select 
        usoMemoriaDisponivel, 
        usoMemoria,
        tempoAtividade,
        qtdProcessos,
        fkTotem,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                        from DadosTotem where fkTotem = ${idMaquina} 
                    order by IDDadosTotem desc limit 1`;
    }


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}