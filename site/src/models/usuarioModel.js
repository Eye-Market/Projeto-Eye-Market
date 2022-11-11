var database = require("../database/config")

function listar(cargoo) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    if(cargoo == "todos"){
        var instrucao = `
        SELECT * FROM usuario;
    `;
    }else{
        var instrucao = `
        SELECT * FROM usuario WHERE cargo = '${cargoo}';
    `;
    }
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha, telefone,cnpj,nomeEmpresa,cepEmpresa,rua,numero) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.

    var instrucao2 = `
        INSERT INTO empresa (cnpj, nome, cep , rua , numero) VALUES ('${cnpj}', '${nomeEmpresa}', '${cepEmpresa}', '${rua}', '${numero}' );
    `;

    database.executar(instrucao2);

    var instrucao = `
        INSERT INTO usuario (nomeCompleto, email, senha, telefone, cargo, fkEmpresa) VALUES ('${nome}', '${email}', '${senha}', '${telefone}', '${"Gestor"}',(select idEmpresa from empresa where cnpj = '${cnpj}'));
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar_empresa(cnpj, nomeEmpresa, cepEmpresa , ruaEmpresa , numeroEmpresa) {
    //console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO empresa (cnpj, nome, cep , rua , numero) VALUES ('${cnpj}', '${nomeEmpresa}', '${cepEmpresa}', '${ruaEmpresa}', '${numeroEmpresa}' );
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    cadastrar_empresa,
    listar,
};