-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 12/06/2023 às 17:21
-- Versão do servidor: 5.6.51-log
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
(1, 14, 1),
(2, 14, 2),
(3, 14, 7),
(4, 32, 5),
(5, 32, 6),
(6, 32, 7),
(7, 32, 8),
(8, 32, 10),
(9, 33, 6),
(10, 33, 7);

-- --------------------------------------------------------

--
-- Estrutura para tabela `login`
--

CREATE TABLE `login` (
  `id_login` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `senha` varchar(30) NOT NULL,
  `usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura para tabela `pesquisas`
--

CREATE TABLE `pesquisas` (
  `id_pesquisa` int(11) NOT NULL,
  `data_inicio` date NOT NULL,
  `data_final` date NOT NULL,
  `titulo` varchar(45) NOT NULL,
  `intituicao` varchar(45) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `pesquisas`
--

INSERT INTO `pesquisas` (`id_pesquisa`, `data_inicio`, `data_final`, `titulo`, `intituicao`, `id_usuario`) VALUES
(1, '2023-05-22', '2023-05-28', 'Pesquisa de Usabilidade', 'UFC', 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `questionarios`
--

CREATE TABLE `questionarios` (
  `id_questionario` int(11) NOT NULL,
  `titulo` varchar(45) NOT NULL,
  `data_inicio` date NOT NULL,
  `data_final` date NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `pontuacao` int(11) NOT NULL,
  `id_pesquisa` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura para tabela `recompensas`
--

CREATE TABLE `recompensas` (
  `id_recompensa` int(11) NOT NULL,
  `recompensa` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura para tabela `respostas`
--

CREATE TABLE `respostas` (
  `id_resposta` int(11) NOT NULL,
  `data_resposta` date NOT NULL,
  `hora_resposta` time NOT NULL,
  `pontuacao` int(11) NOT NULL,
  `titulo_pesquisa` varchar(45) NOT NULL,
  `pesquisa` int(11) NOT NULL,
  `questionario` int(11) NOT NULL,
  `usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
(14, 'Victor Emanuel Tomaz', 'Victor', 'victoremanuel.vet8@gmail.com', '$2y$10$RlirWPa4G4Tu3s2agomAD.OBaD5F2YKaInlKSIVjQVySAqPphbQ96', '2004-05-28', 'Masculino', 'Ensino Supeior Incompleto', 0, 0),
(15, 'Layna Tomaz', 'Layna', 'layna2506@gmail.com', '$2y$10$.UTXVC1vsMvKGdEOCeCKce0vNygmtriF5ZVMUt01FQZyV1casshNq', '2000-06-25', 'Feminino', 'Ensino Supeior Incompleto', 0, 0),
(16, 'UserTest Victor', 'UserTest', 'usertest@gmail.com', '$2y$10$h4ItOZKC85AywhhXJwI5j.cG1kx5f6XBt6dWibsUbEohJNwv55q/y', '2004-05-28', 'Outro', 'Ensino Supeior Completo', 0, 0),
(17, 'Lucas Cabuloso', 'Luquinhas', 'lucas@gmail.com', '$2y$10$tNdsCYRpgazvrqSYGHsYRORJAHzWF5RxK7OoZRAxUamutTUdfKSni', '2004-05-28', 'Masculino', 'Ensino Médio Icompleto', 0, 0),
(18, 'Laravel da Silva', 'Laravel', 'laravel@gmail.com', '$2y$10$GEf.s4nn..mUCtKtr91jUeT5wj933T3ZLYpKHoqyLN01.WG78SuxG', '1980-04-30', 'Masculino', 'Ensino Médio Icompleto', 0, 0),
(19, 'João da Silva', 'João', 'joazinho@gmail.com', '$2y$10$NAZX.jQnq4Ay8bw1FfS09.YUtmGE7vM8pu9zKTQ.jnjleEJ6n16kq', '1990-07-21', 'Masculino', 'Ensino Supeior Incompleto', 0, 0),
(20, 'Linos Design da Silva', 'Linos', 'linos@gmail.com', '$2y$10$EpQWDYCt9EpVe6k4xlBeNuOMdV0x8g9QQeEsFal3bcmWNNPMUuJli', '2023-03-21', 'Outro', 'Pós-Graduação', 0, 0),
(21, 'Renato Góis', 'Renato', 'renatinho@gmail.com', '$2y$10$t0UkmzPqqiLdmcOcZol6neLaE9/Yp88NlPG.uQywTGiJuGV/cCtEy', '1970-12-31', 'Masculino', 'Ensino Médio Completo', 0, 0),
(22, '', '', '', '$2y$10$AVvMjRu5BQKxSPmrgnCBF.6NXLZSWzSgXfHTMoPHLkVsdf3gdnyRu', NULL, NULL, NULL, 0, 0),
(23, 'Marcos Damasceno', 'Marcos', 'marcos@gmail.com', '$2y$10$Y1wBfc.uYVXIN72rXjusoOqHKt7YzDgY5ikqd0eMbruqfD70VqkT.', '2008-02-27', 'Masculino', 'Ensino Fundamental Completo', 0, 0),
(24, 'Júlia Mendes', 'Júlia', 'laflaks@gmail.com', '$2y$10$9YuMaNeHafOaGarCNle3e.L9wVWKARfjlgVYJDw5MHJ1hrgCYN8cy', '2005-12-25', 'Feminino', 'Ensino Supeior Incompleto', 0, 0),
(25, 'Carlão do Papoco', 'Carlos', 'carlaoj@gmail.com', '$2y$10$0RzFiSBWmzNYmQRaIxrfK.J.9OARNscjk0rpNlRbc/jdgpcSs9xli', '1999-04-09', 'Outro', 'Ensino Fundamental Completo', 0, 0),
(26, 'Ramiro Costa', 'Ramiro', 'ramirimad@gmail.com', '$2y$10$7pIlhzEbgLzA70P/0LagLuguSaQh1GvchMR41sHdzkHEdk5uOL2nG', '2007-03-25', 'Masculino', 'Ensino Fundamental Completo', 0, 0),
(27, 'Victor Emanuel Tomaz', 'maninca', 'manica@gmail.com', '$2y$10$Qs7dRxRhNtOds9ArijEnoeXEThLog/cATROmN389SNjDvUN2dT8j6', '2009-02-25', 'Masculino', 'Ensino Fundamental Completo', 0, 0),
(28, 'Camilo Santana', 'Camilo', 'casifjads@gmail.com', '$2y$10$vxRO1lz/Okzb5t8ePVmpaOOchMdQV3jlaboVwDFJyIAEt39G4z0Au', '1970-08-24', 'Masculino', 'Ensino Supeior Completo', 0, 0),
(29, 'Pâmela Sales', 'Pamela', 'padasdsas@gmail.com', '$2y$10$fagxq7cSSZ0zFwyGYU0O8ei39euzySH.aaQ57TZTYVpcM8kSpf4dq', '2003-08-02', 'Feminino', 'Ensino Supeior Completo', 0, 0),
(30, 'Larissa Anitta', 'Larissa', 'lariasdoa@gmail.com', '$2y$10$nKthkkxCIsMdbHyMwA0JXeZ7PHyXPYxfokjwbM8jwIyI5uMIkgU.6', '2004-09-05', 'Feminino', 'Ensino Fundamental Incompleto', 0, 0),
(31, 'Kauã Maia', 'Kaua', 'kauasdas@gmail.com', '$2y$10$gfFvP.pJ5ypexzUSso3lsO.4OmqcxjeUtlGT6AtPoE/lJdNp4wImG', '1998-01-27', 'Masculino', 'Ensino Supeior Incompleto', 0, 0),
(32, 'Natanzin Vasconcelos', 'Natan', 'natanzin@gmail.com', '$2y$10$uffYnun9Yv5TKdq1BszGYuYRygSfSfgmDH9q77UsPY7lX1z6Z.4Wq', '2002-06-12', 'Masculino', 'Ensino Médio Icompleto', 0, 0),
(33, 'Vitória Jessica V. Dos Santos', 'avie', 'vitorinhadopapoco2@gmail.com', '$2y$10$ShmTFx0eDpZGzTEre7U5HehRzGqGGAER387Qxs3iOLOC7UQEdbLcu', '2002-07-16', 'Feminino', 'Ensino Supeior Incompleto', 0, 0);

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
-- Índices de tabela `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id_login`),
  ADD KEY `id_usuario_idx` (`usuario`);

--
-- Índices de tabela `pesquisas`
--
ALTER TABLE `pesquisas`
  ADD PRIMARY KEY (`id_pesquisa`),
  ADD KEY `id_usuario_idx` (`id_usuario`);

--
-- Índices de tabela `questionarios`
--
ALTER TABLE `questionarios`
  ADD PRIMARY KEY (`id_questionario`),
  ADD KEY `id_pesquisa_idx` (`id_pesquisa`);

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
  ADD PRIMARY KEY (`id_usuario`);

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
  MODIFY `id_interesse` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT de tabela `login`
--
ALTER TABLE `login`
  MODIFY `id_login` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de tabela `pesquisas`
--
ALTER TABLE `pesquisas`
  MODIFY `id_pesquisa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de tabela `questionarios`
--
ALTER TABLE `questionarios`
  MODIFY `id_questionario` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de tabela `recompensas`
--
ALTER TABLE `recompensas`
  MODIFY `id_recompensa` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de tabela `respostas`
--
ALTER TABLE `respostas`
  MODIFY `id_resposta` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de tabela `temas`
--
ALTER TABLE `temas`
  MODIFY `id_tema` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT de tabela `temas_questionario`
--
ALTER TABLE `temas_questionario`
  MODIFY `id_tema_quest` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
--
-- AUTO_INCREMENT de tabela `usuario_recompensa`
--
ALTER TABLE `usuario_recompensa`
  MODIFY `id_usuario_recompensa` int(11) NOT NULL AUTO_INCREMENT;
--
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `interesses`
--
ALTER TABLE `interesses`
  ADD CONSTRAINT `fk_id_usuario_tema` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_tema_usuario` FOREIGN KEY (`id_tema`) REFERENCES `temas` (`id_tema`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Restrições para tabelas `login`
--
ALTER TABLE `login`
  ADD CONSTRAINT `fk_id_usuario_login` FOREIGN KEY (`usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Restrições para tabelas `pesquisas`
--
ALTER TABLE `pesquisas`
  ADD CONSTRAINT `id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Restrições para tabelas `questionarios`
--
ALTER TABLE `questionarios`
  ADD CONSTRAINT `id_pesquisa` FOREIGN KEY (`id_pesquisa`) REFERENCES `pesquisas` (`id_pesquisa`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Restrições para tabelas `respostas`
--
ALTER TABLE `respostas`
  ADD CONSTRAINT `fk_id_pesquisa` FOREIGN KEY (`pesquisa`) REFERENCES `pesquisas` (`id_pesquisa`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_id_questionario` FOREIGN KEY (`questionario`) REFERENCES `questionarios` (`id_questionario`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_id_usuario` FOREIGN KEY (`usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Restrições para tabelas `temas_questionario`
--
ALTER TABLE `temas_questionario`
  ADD CONSTRAINT `fk_id_questionario_tema` FOREIGN KEY (`id_questionario`) REFERENCES `questionarios` (`id_questionario`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_tema` FOREIGN KEY (`id_tema`) REFERENCES `temas` (`id_tema`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Restrições para tabelas `usuario_recompensa`
--
ALTER TABLE `usuario_recompensa`
  ADD CONSTRAINT `fk_id_usuario_recompensa` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_recompensa` FOREIGN KEY (`id_recompensa`) REFERENCES `recompensas` (`id_recompensa`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
