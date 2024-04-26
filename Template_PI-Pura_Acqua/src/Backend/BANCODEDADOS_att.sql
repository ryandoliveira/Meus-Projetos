create database BD_PuraAcqua;

use BD_PuraAcqua;

CREATE TABLE ong(
	ID_ong INT AUTO_INCREMENT,
    Nome_ong VARCHAR(100) NOT NULL,
    Cont_ong VARCHAR(50),
    End_ong VARCHAR(300),
    PRIMARY KEY (ID_ong)
	);

    CREATE TABLE usuario(
    ID_usuario INT AUTO_INCREMENT,
    Nome_usuario VARCHAR(100) NOT NULL,
    Email_usuario VARCHAR(100) UNIQUE,
    Senha_usuario VARCHAR(100) NOT NULL,
    PRIMARY KEY (ID_usuario)
    );

CREATE TABLE evento(
    ID_evento INT AUTO_INCREMENT,
    Nome_evento VARCHAR(100) NOT NULL,
    Descr_evento TEXT,
    Data_evento DATE,
    PRIMARY KEY (ID_evento),
    ID_ong INT,
    ID_usuario INT,
	FOREIGN KEY (ID_ong) REFERENCES ong(ID_ong),
    FOREIGN KEY (ID_usuario) REFERENCES usuario(ID_usuario)
    );

CREATE TABLE cadastro(
    ID_cadastro INT AUTO_INCREMENT PRIMARY KEY,
	Nome_cadastro VARCHAR(100) NOT NULL,
    Tel_cadastro VARCHAR(11),
    Email_cadastro VARCHAR(100),
    CPF_cadastro VARCHAR(11),
    Senha_cadastro VARCHAR(30),
    Est_cadastro VARCHAR(30),
    CEP_cadastro VARCHAR(8)
	);
    
CREATE TABLE login(
	ID_login INT AUTO_INCREMENT PRIMARY KEY,
    Email_login VARCHAR(100) NOT NULL,
    Senha_login VARCHAR(50) NOT NULL
    );