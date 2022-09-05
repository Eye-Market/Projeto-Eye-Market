-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/* para MySQL - local - Desenvolvimento */

CREATE DATABASE EyeMarket;
USE EyeMarket;

CREATE TABLE Empresa(
idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100),
rua VARCHAR(100),
numero INT,
cep INT,
cnpj CHAR(14)
);

CREATE TABLE Usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nomeCompleto VARCHAR(100),
email VARCHAR(100),
senha VARCHAR(100),
telefone INT,
cargo VARCHAR(100),
fkEmpresa INT,
fkGestor INT,
fkSupervisor INT,
FOREIGN KEY (fkEmpresa) REFERENCES Empresa (idEmpresa),
FOREIGN KEY (fkGestor) REFERENCES Usuario (idUsuario),
FOREIGN KEY (fkSupervisor) REFERENCES Usuario (idUsuario)
);

CREATE TABLE Totem (
idTotem INT PRIMARY KEY AUTO_INCREMENT,
modelo VARCHAR(100)
);

CREATE TABLE Acesso(
idAcesso INT AUTO_INCREMENT,
dataHora DATETIME,
fkTotem INT,
fkUsuario INT,
fkEmpresa INT,
FOREIGN KEY (fkTotem) REFERENCES Totem (idTotem),
FOREIGN KEY (fkUsuario) REFERENCES Usuario (idUsuario),
FOREIGN KEY (fkEmpresa) REFERENCES Empresa (idEmpresa),
PRIMARY KEY (idAcesso, fkTotem, fkUsuario, fkEmpresa)
);

CREATE TABLE DadosTotem(
idDadosTotem INT AUTO_INCREMENT,
hd DECIMAL(5,2),
cpu DECIMAL(5,2),
ram DECIMAL(5,2),
dataHora DATETIME,
fkTotem INT,
PRIMARY KEY(idDadosTotem, fkTotem)
)

/* para SQL Server - remoto - Produção */

/* nosso DATABASE Azure aqui; */

-- CREATE DATABASE Azure acquatec;
/*
CREATE TABLE usuario (
	id INT PRIMARY KEY IDENTITY(1,1),
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
);

CREATE TABLE aviso (
	id INT PRIMARY KEY IDENTITY(1,1),
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT FOREIGN KEY REFERENCES usuario(id)
);

create table aquario (
-- em nossa regra de negócio, um aquario tem apenas um sensor 
	id INT PRIMARY KEY IDENTITY(1,1),
	descricao VARCHAR(300)
);

-- altere esta tabela de acordo com o que está em INSERT de sua API do arduino 

CREATE TABLE medida (
	id INT PRIMARY KEY IDENTITY(1,1),
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fk_aquario INT FOREIGN KEY REFERENCES aquario(id)
);
*/