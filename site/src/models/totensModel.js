var database = require("../database/config")

function getTotensInoperantes() {
    console.log("ACESSEI O TOTENS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
        var instrucao = `
        SELECT COUNT(idTotem) as "total" FROM totem WHERE isLigado = false;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function getTotensOperantes() {
    console.log("ACESSEI O TOTENS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
        var instrucao = `
        SELECT COUNT(idTotem) as "total" FROM totem WHERE isLigado = true;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarTotens(detalhe) {
    console.log("ACESSEI O TOTENS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");

    if (detalhe == 'todos') {
        var instrucao = `
        SELECT idTotem, isLigado FROM Totem JOIN DadosTotem on idTotem = fkTotem WHERE idDadosTotem = (select max(idDadosTotem) from DadosTotem WHERE fkTotem = idTotem) and dataInstalacao != '0000-00-00';
        `;
    } else {
        var instrucao = `
        select idTotem, isLigado from Totem join DadosTotem on idTotem = fkTotem WHERE idDadosTotem = (select max(idDadosTotem) from DadosTotem WHERE fkTotem = ${detalhe}) and dataInstalacao != '0000-00-00';
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
    getTotensOperantes
};