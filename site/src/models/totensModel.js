var database = require("../database/config")

function getTotensInoperantes() {
    console.log("ACESSEI O TOTENS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
        var instrucao = `
        SELECT COUNT(idTotem) as "total" FROM totem WHERE isLigado = 0;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function getTotensOperantes() {
    console.log("ACESSEI O TOTENS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
        var instrucao = `
        SELECT COUNT(idTotem) as "total" FROM totem WHERE isLigado = 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function getIncidentesAtivos() {
    console.log("ACESSEI O TOTENS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
        var instrucao = `
        SELECT * FROM Incidentes WHERE statusSolucao = 'Ativo';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function getIncidentes() {
    console.log("ACESSEI O TOTENS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
        var instrucao = `
        SELECT * FROM Incidentes;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarTotens(detalhe) {
    console.log("ACESSEI O TOTENS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");

    if (detalhe == 'todos') {
        var instrucao = `
        SELECT idTotem, processador, sistemaOperacional, isLigado FROM Totem JOIN DadosTotem on idTotem = fkTotem WHERE idDadosTotem = (select max(idDadosTotem) from DadosTotem WHERE fkTotem = idTotem) and dataInstalacao != '0000-00-00' order by idTotem;
        `;
    } else {
        var instrucao = `
        select idTotem, processador, sistemaOperacional, isLigado from Totem join DadosTotem on idTotem = fkTotem WHERE idDadosTotem = (select max(idDadosTotem) from DadosTotem WHERE fkTotem = ${detalhe}) and dataInstalacao != '0000-00-00' order by idTotem;
    `;
    }
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarTotensIncompletos(detalhe) {
    console.log("ACESSEI O TOTENS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    if(detalhe == 'todos'){
        var instrucao = `
        SELECT idTotem, sistemaOperacional FROM Totem WHERE dataInstalacao = '0000-00-00';
        `;
    }else{
        var instrucao = `
        SELECT idTotem, sistemaOperacional FROM Totem WHERE dataInstalacao = '0000-00-00' and idTotem = ${detalhe};
        `;
    }

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function desligarTotem(idMaquina) {
    console.log("ACESSEI O TOTENS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    
        var instrucao = `
        UPDATE totem SET isLigado = 0 WHERE idTotem = ${idMaquina};
        `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function ligarTotem(idMaquina) {
    console.log("ACESSEI O TOTENS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    
        var instrucao = `
        UPDATE totem SET isLigado = 1 WHERE idTotem = ${idMaquina};
        `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function finalizarCadastroMaquina(idMaquina,dataInstalacao) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", dataInstalacao);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.

    var instrucao = `
    UPDATE Totem set dataInstalacao = '${dataInstalacao}' WHERE idTotem = ${idMaquina};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listarTotens,
    listarTotensIncompletos,
    finalizarCadastroMaquina,
    getTotensInoperantes,
    getTotensOperantes,
    desligarTotem,
    ligarTotem,
    getIncidentesAtivos,
    getIncidentes
};