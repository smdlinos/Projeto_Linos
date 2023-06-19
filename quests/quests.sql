-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Tempo de geração: 19/06/2023 às 09:05
-- Versão do servidor: 10.1.21-MariaDB
-- Versão do PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `quests`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `interesses`
--

CREATE TABLE `interesses` (
  `id_interesse` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_tema` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `interesses`
--

INSERT INTO `interesses` (`id_interesse`, `id_usuario`, `id_tema`) VALUES
(1, 1, 1),
(2, 2, 10),
(3, 3, 3),
(4, 1, 5),
(6, 6, 9),
(7, 14, 1),
(8, 14, 2),
(9, 14, 3),
(10, 14, 4),
(11, 14, 5),
(12, 14, 6),
(13, 14, 7),
(14, 15, 1),
(15, 15, 2),
(16, 15, 3),
(17, 15, 4),
(18, 15, 5),
(19, 16, 1),
(20, 16, 2),
(21, 16, 3),
(22, 16, 4),
(23, 16, 5),
(24, 17, 1),
(25, 17, 2),
(26, 17, 3),
(27, 18, 7),
(28, 18, 8),
(29, 18, 9);

-- --------------------------------------------------------

--
-- Estrutura para tabela `pesquisas`
--

CREATE TABLE `pesquisas` (
  `id_pesquisa` int(11) NOT NULL,
  `data_inicio` date NOT NULL,
  `data_final` date NOT NULL,
  `titulo` varchar(45) NOT NULL,
  `instituicao` varchar(45) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `pesquisas`
--

INSERT INTO `pesquisas` (`id_pesquisa`, `data_inicio`, `data_final`, `titulo`, `instituicao`, `id_usuario`) VALUES
(1, '2023-05-22', '2023-05-28', 'Pesquisa de Usabilidade', 'UFC', 1),
(2, '2023-06-09', '2023-06-22', 'Pesquisa de Satisfação', 'UFC', 2);

-- --------------------------------------------------------

--
-- Estrutura para tabela `questionarios`
--

CREATE TABLE `questionarios` (
  `id_questionario` int(11) NOT NULL,
  `titulo` varchar(45) NOT NULL,
  `autor` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `instituicao` varchar(255) NOT NULL,
  `data_inicio` date NOT NULL,
  `data_final` date NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `pontuacao` int(11) NOT NULL,
  `id_pesquisa` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `questionarios`
--

INSERT INTO `questionarios` (`id_questionario`, `titulo`, `autor`, `instituicao`, `data_inicio`, `data_final`, `descricao`, `link`, `pontuacao`, `id_pesquisa`) VALUES
(1, 'UX Resarch Quests', 'Linos Design da Silva', 'UFC', '2023-05-22', '2023-05-28', 'ABBSBBABBABBA', 'aaaaaaa.com.br', 10, 1),
(2, 'Análise de Necessidades Quests', 'Teste Bittencourt', 'UFC', '2023-05-23', '2023-05-31', 'WWIJIJDJDI', 'aaaaaaaaaa.com.br', 20, 1),
(3, 'Nível de Satisfação RU', 'Vitorinha do Papoco', 'UFC', '2023-06-09', '2023-06-19', 'KDEMPJEPOJF', 'bbbbbb.com.br', 15, 2),
(4, 'Teste de Usabilidade', 'Luiz Gonzaga', 'UFC', '2023-06-07', '2023-06-30', 'Testar os negócio lá de uso', 'askdmalskd.com', 20, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `recompensas`
--

CREATE TABLE `recompensas` (
  `id_recompensa` int(11) NOT NULL,
  `recompensa` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `recompensas`
--

INSERT INTO `recompensas` (`id_recompensa`, `recompensa`) VALUES
(1, 'Hora de Atividade Complementar'),
(2, 'koala'),
(3, 'urso'),
(4, 'passarinho'),
(5, 'tigre'),
(6, 'leão'),
(7, 'pinguim');

-- --------------------------------------------------------

--
-- Estrutura para tabela `respostas`
--

CREATE TABLE `respostas` (
  `id_resposta` int(11) NOT NULL,
  `data_resposta` date NOT NULL,
  `hora_resposta` time NOT NULL,
  `pontuacao` int(11) NOT NULL,
  `pesquisa` int(11) NOT NULL,
  `questionario` int(11) NOT NULL,
  `usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `respostas`
--

INSERT INTO `respostas` (`id_resposta`, `data_resposta`, `hora_resposta`, `pontuacao`, `pesquisa`, `questionario`, `usuario`) VALUES
(2, '2023-05-20', '00:00:00', 15, 2, 3, 1),
(3, '2023-05-20', '10:25:00', 15, 2, 3, 1),
(4, '2023-05-21', '10:30:15', 15, 2, 3, 2),
(5, '2023-05-21', '11:59:00', 20, 1, 1, 3);

-- --------------------------------------------------------

--
-- Estrutura para tabela `tabletop`
--

CREATE TABLE `tabletop` (
  `íd_tabletop` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `posicao` int(11) NOT NULL DEFAULT '0',
  `ch` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Fazendo dump de dados para tabela `tabletop`
--

INSERT INTO `tabletop` (`íd_tabletop`, `id_usuario`, `posicao`, `ch`) VALUES
(1, 17, 0, 0),
(2, 18, 0, 0);

-- --------------------------------------------------------

--
-- Estrutura para tabela `temas`
--

CREATE TABLE `temas` (
  `id_tema` int(11) NOT NULL,
  `tema` varchar(50) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `temas`
--

INSERT INTO `temas` (`id_tema`, `tema`) VALUES
(1, 'Design'),
(2, 'Experiência do Usuário'),
(3, 'Usabilidade'),
(4, 'Dispositivos Inteligentes'),
(5, 'Design Centrado no Usuário'),
(6, 'Audiovisual'),
(7, 'Jogos'),
(8, 'Inteligência Artificial'),
(9, 'Motivação'),
(10, 'Interfaces');

-- --------------------------------------------------------

--
-- Estrutura para tabela `temas_questionario`
--

CREATE TABLE `temas_questionario` (
  `id_tema_quest` int(11) NOT NULL,
  `id_questionario` int(11) NOT NULL,
  `id_tema` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `temas_questionario`
--

INSERT INTO `temas_questionario` (`id_tema_quest`, `id_questionario`, `id_tema`) VALUES
(1, 1, 2),
(2, 1, 3),
(3, 1, 10),
(4, 2, 1),
(5, 2, 3),
(6, 2, 5),
(7, 3, 9),
(8, 4, 1),
(9, 4, 2),
(10, 4, 3);

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `nickname` varchar(30) CHARACTER SET utf8 NOT NULL,
  `email` varchar(50) CHARACTER SET utf8 NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 NOT NULL,
  `data_nascimento` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `genero` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `escolaridade` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `pontos` int(11) DEFAULT NULL,
  `posicao` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `name`, `nickname`, `email`, `password`, `data_nascimento`, `genero`, `escolaridade`, `pontos`, `posicao`) VALUES
(1, 'Bruno', 'bruninho', 'bruninho@gmail.com', 'bruno123', '2004-05-28', 'M', 'Ensino Superior Completo', 0, 0),
(2, 'mickael', 'castrovi', 'victoremanuel.vetn@alu.ufc.br', '$2y$10$9RxNnmkEoinpGL7GClOwd.hb.9hYG8kBrWdx/kfsLHskN2bm0HijS', '2023-05-24', '1', '2', 0, 0),
(3, 'Vitoria', 'Jessica', 'vitorinhadopapoco@gmail.com', '$2y$10$XlrMiOktqSdcS0OcqJtSxe7s2u2Y5MloUF5sKsd6J3jO.10kr74jW', '2023-05-08', '1', '2', 0, 0),
(6, 'Victorasdas', 'asdasdda', 'minecraftgrattis1@gmail.com', '12345', '2023-05-22', '3', '3', 0, 0),
(7, 'Victor', 'tatata', 'victor@gmail.com', '12345', '2023-05-17', '2', '3', 0, 0),
(8, 'Victor', 'asdasdasdas', 'asd@gmail.com', '12345', '2023-05-18', '2', '3', 0, 0),
(9, 'layna', 'layna', 'layna@gmail.com', 'layna123', '2023-05-25', '3', '4', 0, 0),
(10, 'Jessica', 'Avie_A_Designer', 'vitorajessica.vjvs@gmail.com', '12345', '2023-05-03', '2', '3', 0, 0),
(11, 'Victor', 'Emanuel', 'emanuel@gmail.com', '12345', '2023-05-25', '2', '4', 0, 0),
(12, 'Maria', 'Clara', 'mariaclara@gmail.com', '12345', '2004-08-04', '2', '3', 0, 0),
(13, 'Júlia Menezes', 'JulinhaPVP', 'julinha@gmail.com', '$2y$10$I0ldwAUuuz8e.peGG99niuChJHPRiR55pJobGGpRu7frlXrIXbehy', '2023-01-12', '2', '5', 0, 0),
(14, 'Victor Emanuel Tomaz das Neves', 'Victor', 'victoremanuel.vet8@gmail.com', '$2y$10$/vOJia8706dBxHlTTcp3y.nRHTM2kIzlK2/NzzuvoQ6rIAkF8Uj7O', '2004-05-28', 'Masculino', 'Ensino Superior Incompleto', 0, 0),
(15, 'Luiz Gonzaga Santos Filho', 'Bradock_3105', 'luisgonzaga@alu.ufc.br', '$2y$10$jb3lJP0bLNC1ljW2CLk7OeNLL.l5SFK/hl/6fXCIHCcdBAv2ptSBe', '1995-05-31', 'Masculino', 'Pós-Graduação', 0, 0),
(16, 'Luiz Gonzaga dos Santos Filho', 'Bradock3105', 'luizgonzaga@alu.ufc.br', '$2y$10$YEmwR9qA7StEVDrrPpxpgOgFUturaJuGt0898LnXYCkbsJuH32tIK', '1995-05-31', 'Masculino', 'Pós-Graduação', 0, 0),
(17, 'Maria Leticia Barros Nepomuceno', 'Letinepo', 'letinepo@gmail.com', '$2y$10$ZK4eHuUA/dDfTrrokhUAyuomQQRVv/EUzZDnnfS5ba0RbkSxYzjJe', '2003-12-31', 'Feminino', 'Ensino Superior Incompleto', 0, 0),
(18, 'Victor Emanuel Silva', 'Vitao', 'victoremanuel.vet6@gmail.com', '$2y$10$c2dg1GV9v96SHwfG19L/FOhct6i.8F9yYTwpY7.xHonEUwP.XZTIe', '2006-03-31', 'Masculino', 'Ensino Superior Incompleto', 0, 0);

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario_recompensa`
--

CREATE TABLE `usuario_recompensa` (
  `id_usuario_recompensa` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_recompensa` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `usuario_recompensa`
--

INSERT INTO `usuario_recompensa` (`id_usuario_recompensa`, `id_usuario`, `id_recompensa`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 1);

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `interesses`
--
ALTER TABLE `interesses`
  ADD PRIMARY KEY (`id_interesse`),
  ADD KEY `id_usuario_idx` (`id_usuario`),
  ADD KEY `id_tema_idx` (`id_tema`);

--
-- Índices de tabela `pesquisas`
--
ALTER TABLE `pesquisas`
  ADD PRIMARY KEY (`id_pesquisa`),
  ADD KEY `id_usuario_idx` (`id_usuario`),
  ADD KEY `instituicao` (`instituicao`),
  ADD KEY `instituicao_2` (`instituicao`);

--
-- Índices de tabela `questionarios`
--
ALTER TABLE `questionarios`
  ADD PRIMARY KEY (`id_questionario`),
  ADD KEY `id_pesquisa_idx` (`id_pesquisa`),
  ADD KEY `instituicao` (`instituicao`);

--
-- Índices de tabela `recompensas`
--
ALTER TABLE `recompensas`
  ADD PRIMARY KEY (`id_recompensa`);

--
-- Índices de tabela `respostas`
--
ALTER TABLE `respostas`
  ADD PRIMARY KEY (`id_resposta`),
  ADD KEY `id_usuario_idx` (`usuario`),
  ADD KEY `id_questionario_idx` (`questionario`),
  ADD KEY `fk_id_pesquisa_idx` (`pesquisa`);

--
-- Índices de tabela `tabletop`
--
ALTER TABLE `tabletop`
  ADD PRIMARY KEY (`íd_tabletop`),
  ADD KEY `id_user` (`id_usuario`);

--
-- Índices de tabela `temas`
--
ALTER TABLE `temas`
  ADD PRIMARY KEY (`id_tema`);

--
-- Índices de tabela `temas_questionario`
--
ALTER TABLE `temas_questionario`
  ADD PRIMARY KEY (`id_tema_quest`),
  ADD KEY `id_questionario_idx` (`id_questionario`),
  ADD KEY `id_tema_idx` (`id_tema`);

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `email_2` (`email`);

--
-- Índices de tabela `usuario_recompensa`
--
ALTER TABLE `usuario_recompensa`
  ADD PRIMARY KEY (`id_usuario_recompensa`),
  ADD KEY `id_usuario_idx` (`id_usuario`),
  ADD KEY `id_recompensa_idx` (`id_recompensa`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `interesses`
--
ALTER TABLE `interesses`
  MODIFY `id_interesse` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
--
-- AUTO_INCREMENT de tabela `pesquisas`
--
ALTER TABLE `pesquisas`
  MODIFY `id_pesquisa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de tabela `questionarios`
--
ALTER TABLE `questionarios`
  MODIFY `id_questionario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de tabela `recompensas`
--
ALTER TABLE `recompensas`
  MODIFY `id_recompensa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT de tabela `respostas`
--
ALTER TABLE `respostas`
  MODIFY `id_resposta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de tabela `tabletop`
--
ALTER TABLE `tabletop`
  MODIFY `íd_tabletop` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de tabela `temas`
--
ALTER TABLE `temas`
  MODIFY `id_tema` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT de tabela `temas_questionario`
--
ALTER TABLE `temas_questionario`
  MODIFY `id_tema_quest` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT de tabela `usuario_recompensa`
--
ALTER TABLE `usuario_recompensa`
  MODIFY `id_usuario_recompensa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `interesses`
--
ALTER TABLE `interesses`
  ADD CONSTRAINT `fk_id_usuario_tema` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `id_tema_usuario` FOREIGN KEY (`id_tema`) REFERENCES `temas` (`id_tema`);

--
-- Restrições para tabelas `pesquisas`
--
ALTER TABLE `pesquisas`
  ADD CONSTRAINT `id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);

--
-- Restrições para tabelas `respostas`
--
ALTER TABLE `respostas`
  ADD CONSTRAINT `fk_id_pesquisa` FOREIGN KEY (`pesquisa`) REFERENCES `pesquisas` (`id_pesquisa`),
  ADD CONSTRAINT `fk_id_questionario` FOREIGN KEY (`questionario`) REFERENCES `questionarios` (`id_questionario`),
  ADD CONSTRAINT `fk_id_usuario` FOREIGN KEY (`usuario`) REFERENCES `usuarios` (`id_usuario`);

--
-- Restrições para tabelas `tabletop`
--
ALTER TABLE `tabletop`
  ADD CONSTRAINT `id_user` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);

--
-- Restrições para tabelas `temas_questionario`
--
ALTER TABLE `temas_questionario`
  ADD CONSTRAINT `fk_id_questionario_tema` FOREIGN KEY (`id_questionario`) REFERENCES `questionarios` (`id_questionario`),
  ADD CONSTRAINT `id_tema` FOREIGN KEY (`id_tema`) REFERENCES `temas` (`id_tema`);

--
-- Restrições para tabelas `usuario_recompensa`
--
ALTER TABLE `usuario_recompensa`
  ADD CONSTRAINT `fk_id_usuario_recompensa` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `id_recompensa` FOREIGN KEY (`id_recompensa`) REFERENCES `recompensas` (`id_recompensa`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
