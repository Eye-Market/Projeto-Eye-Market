var database = require("../database/config");

function buscarUltimasMedidas(idMaquina, limite_linhas) {

    instrucaoSql = `select usoMemoria, usoMemoriaDisponivel, QtdProcessos, tempoAtividade from DadosTotem WHERE fkTotem = ${idMaquina}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasTodos(limite_linhas) {

    instrucaoSql = `select * from DadosTotem order by idDadosTotem desc`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasTodosComRisco(limite_linhas) {

    instrucaoSql = `select (select count(idTotem) from Totem where situacao = 'normal') as 'normal',
    (select count(idTotem) from Totem where situacao = 'atencao') as 'atencao',
    (select count(idTotem) from Totem where situacao = 'critico') as 'critico';`;

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


function buscarMedidasEmTempoRealTodos() {
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select 
        usoMemoriaDisponivel, 
        usoMemoria,
        tempoAtividade,
        qtdProcessos,
        fkTotem
                        from DadosTotem
                    order by IDDadosTotem desc`;

    }else if(process.env.AMBIENTE_PROCESSO == "desenvolvimento"){
        instrucaoSql = `select 
        usoMemoriaDisponivel, 
        usoMemoria,
        tempoAtividade,
        qtdProcessos,
        fkTotem
                        from DadosTotem
                    order by IDDadosTotem desc`;
    }


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealTodosComRisco() {
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select (select count(idTotem) from Totem where situacao = 'normal') as 'normal',
        (select count(idTotem) from Totem where situacao = 'atencao') as 'atencao',
        (select count(idTotem) from Totem where situacao = 'critico') as 'critico';`;

    }else if(process.env.AMBIENTE_PROCESSO == "desenvolvimento"){
        instrucaoSql = `select (select count(idTotem) from Totem where situacao = 'normal') as 'normal',
        (select count(idTotem) from Totem where situacao = 'atencao') as 'atencao',
        (select count(idTotem) from Totem where situacao = 'critico') as 'critico';`;
    }


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarUltimasMedidasTodos,
    buscarMedidasEmTempoRealTodos,
    buscarUltimasMedidasTodosComRisco,
    buscarMedidasEmTempoRealTodosComRisco
}