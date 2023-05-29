<?php

$servidor = "localhost";
$user = "root";
$password = "";
$db= "quests";

$conexao = mysqli_connect($servidor, $user, $password, $db);

$query = "CREATE DATABASE `quests`";

$query = "CREATE TABLE `quests`.`usuarios`(
	`id_usuario` int not null auto_increment primary key,
	`name` varchar(255) not null,
	`nickname` varchar(30) not null,
	`email` varchar(50) not null,
	`password` varchar(255) not null,
	`data_nascimento` varchar(30),
	`genero` varchar(20),
	`escolaridade` varchar(255),
	`pontos` int,
	`posicao` int not null
	)";

$query = "CREATE TABLE `quests`.`pesquisa` (
  `id_pesquisa` INT NOT NULL AUTO_INCREMENT,
  `data_inicio` DATE NOT NULL,
  `data_final` DATE NOT NULL,
  `titulo` VARCHAR(45) NOT NULL,
  `intituicao` VARCHAR(45) NULL,
  `id_usuario` INT NULL,
  PRIMARY KEY (`id_pesquisa`),
  INDEX `id_usuario_idx` (`id_usuario` ASC),
  CONSTRAINT `id_usuario`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `quests`.`usuarios` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
)";

$query = "CREATE TABLE `quests`.`questionarios` (
  `id_questionario` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NOT NULL,
  `data_inicio` DATE NOT NULL,
  `data_final` DATE NOT NULL,
  `descricao` VARCHAR(255) NOT NULL,
  `link` VARCHAR(255) NOT NULL,
  `pontuacao` INT NOT NULL,
  `id_pesquisa` INT NULL,
  PRIMARY KEY (`id_questionario`),
  INDEX `id_pesquisa_idx` (`id_pesquisa` ASC),
  CONSTRAINT `id_pesquisa`
    FOREIGN KEY (`id_pesquisa`)
    REFERENCES `quests`.`pesquisas` (`id_pesquisa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)";


$query = "CREATE TABLE `quests`.`respostas` (
  `id_respostas` INT NOT NULL AUTO_INCREMENT,
  `data_resposta` DATE NOT NULL,
  `hora_resposta` TIME NOT NULL,
  `pontuacao` INT NOT NULL,
  `titulo_pesquisa` VARCHAR(45) NOT NULL,
  `pesquisa` INT NOT NULL,
  `questionario` INT NOT NULL,
  `usuario` INT NOT NULL,
  PRIMARY KEY (`id_respostas`),
  INDEX `id_usuario_idx` (`usuario` ASC),
  INDEX `id_questionario_idx` (`questionario` ASC),
  INDEX `fk_id_pesquisa_idx` (`pesquisa` ASC),
  CONSTRAINT `fk_id_usuario`
    FOREIGN KEY (`usuario`)
    REFERENCES `quests`.`usuarios` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_id_questionario`
    FOREIGN KEY (`questionario`)
    REFERENCES `quests`.`questionarios` (`id_questionario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_id_pesquisa`
    FOREIGN KEY (`pesquisa`)
    REFERENCES `quests`.`pesquisas` (`id_pesquisa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)";

$query = "CREATE TABLE `quests`.`login` (
  `id_login` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(50) NOT NULL,
  `senha` VARCHAR(30) NOT NULL,
  `usuario` INT NOT NULL,
  PRIMARY KEY (`id_login`),
  INDEX `id_usuario_idx` (`usuario` ASC),
  CONSTRAINT `fk_id_usuario_login`
    FOREIGN KEY (`usuario`)
    REFERENCES `quests`.`usuarios` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)";

$query = "CREATE TABLE `quests`.`temas` (
  `id_tema` INT NOT NULL AUTO_INCREMENT,
  `tema` VARCHAR(50) NOT NULL,
   PRIMARY KEY (`id_tema`)
  )";

$query = "CREATE TABLE `quests`.`temas_questionario` (
  `id_tema_quest` INT NOT NULL AUTO_INCREMENT,
  `id_questionario` INT NOT NULL,
  `id_tema` INT NOT NULL,
  PRIMARY KEY (`id_tema_quest`),
  INDEX `id_questionario_idx` (`id_questionario` ASC),
  INDEX `id_tema_idx` (`id_tema` ASC),
  CONSTRAINT `fk_id_questionario_tema`
    FOREIGN KEY (`id_questionario`)
    REFERENCES `quests`.`questionarios` (`id_questionario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_tema`
    FOREIGN KEY (`id_tema`)
    REFERENCES `quests`.`temas` (`id_tema`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)";

$query = "CREATE TABLE `quests`.`interesses` (
  `id_interesse` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT NOT NULL,
  `id_tema` INT NOT NULL,
  PRIMARY KEY (`id_interesse`),
  INDEX `id_usuario_idx` (`id_usuario` ASC),
  INDEX `id_tema_idx` (`id_tema` ASC),
  CONSTRAINT `fk_id_usuario_tema`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `quests`.`usuarios` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_tema_usuario`
    FOREIGN KEY (`id_tema`)
    REFERENCES `quests`.`temas` (`id_tema`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)";


$query = "CREATE TABLE `quests`.`recompensas` (
  `id_recompensa` INT NOT NULL AUTO_INCREMENT,
  `recompensa` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_recompensa`)
  )";

$query = "CREATE TABLE `quests`.`usuario_recompensa` (
  `id_usuario_recompensa` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT NOT NULL,
  `id_recompensa` INT NOT NULL,
  PRIMARY KEY (`id_usuario_recompensa`),
  INDEX `id_usuario_idx` (`id_usuario` ASC),
  INDEX `id_recompensa_idx` (`id_recompensa` ASC),
  CONSTRAINT `fk_id_usuario_recompensa`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `quests`.`usuarios` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_recompensa`
    FOREIGN KEY (`id_recompensa`)
    REFERENCES `quests`.`recompensas` (`id_recompensa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)";

$consulta = mysqli_query($conexao, $query);
if($consulta){
	echo 'Deu certo';
}else {
	echo 'não deu';
}
?>