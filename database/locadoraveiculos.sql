create table veiculos (
id int auto_increment primary key,
marca varchar(20) not null,
modelo varchar(20) not null,
ano varchar(4) not null,
cor varchar(20) not null,
categoria varchar(10) not null,
combustivel VARCHAR(10) not null,
cambio VARCHAR(10) not null,
pcd VARCHAR(3) not null
);

insert into veiculos (marca, modelo, ano, cor, categoria, combustivel, cambio, pcd) VALUES
("Renault","Captur","2018","Preto","SUV","Flex","Manual","NÃO"),
("Volkswagen","Polo","2020","Branco","Hatch","Flex","Manual","NÃO"),
("Chevrolet","S10","2021","Azul","Picape","Diesel","Automático","SIM"),
("Toyota","Corolla","2022","Vermelho","Sedan","Híbrido","Automático","NÃO"),
("Fiat","Toro","2019","Vinho","Picape","Diesel","Automático","NÃO");

create table usuarios (
id int auto_increment primary key,
    name varchar(255) not null,
    login varchar(100) not null,
    password varchar(255) not null
);

insert into usuarios (name, login, password) values
("Paulo Henrique", "pauloo", "oi123"),
("Abc De", "abcde", "$2a$10$JzHL8isuKMDF9EcPGLmq..UXP2c2S0vrBtQDJhZnqoAIlry/yPTtm")
("Paulo Rubens", "prubens", "321rp"),
("Maria Fernanda", "mariaFer", "maria123"),
("Jose Moises", "josem", "jose123"),
("Pedro Silva", "pedros", "pedro123");
