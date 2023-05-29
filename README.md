# Projeto_Linos
<h2>Repositório dos arquivos da aplicação desenvolvida em Projeto I</h2>

<h2>Descrição do Projeto</h2>

  Quests é uma aplicação Web que está sendo desenvolvida para a professora do curso de Sistema e Mídias Digitais - UFC, Ticianne Darin, para atender a demanda de questionários do grupo de pesquisa Célula Multimídia pelo qual é responsável. A aplicação tem por finalidade divulgar questionários e aumentar a adesão e o engajamento de respondentes através de um sistema de recompensas. O público-alvo da plataforma são os pesquisadores, pessoas responsáveis por coletar dados por meio de questionários, e respondentes, pessoas interessadas em responder questionários tendo, assim, dois perfis de usuário, os quais podem se combinar: o pesquisador, que vai utilizar a plataforma para divulgar o link do seu questionário; e o respondente que por intermédio da plataforma vai acessar ao link do formulário, preenchê-lo e acumular recompensas no seu perfil.

<h2>Status do Projeto</h2>
  Projeto em Construção

<h2>Funcionalidades e Demonstração da Aplicação atuais</h2>
  <h3></h3>
  <ul>
   <li>Fazer cadastro do usuário</li>
   <li>Entrar como visitante</li>
   <li>Fazer login de usuário</li>
   <li>Recuperar senha</li>
   <li>Visualizar feed de questionários disponíveis</li>
   <li>Acessar perfil do usuário</li>
  </ul>
 
<h2>Tecnologias utilizadas</h2>
  JavaScript: A linguagem base a ser usada no projeto é JavaScript, por se tratar de uma ferramenta web e “Client-side”, envolvendo a linguagem de marcação HTML, além do mecanismo de estilos web CSS, vimos que a mesma seria de fácil manuseio para a criação da aplicação no site inicialmente.

  <h3>Front-end</h3>  
  React: Escolhemos react por se tratar de uma biblioteca JavaScript para criação de interfaces de usuários, possibilitando a reutilização de código e acelerando o processo de desenvolvimento, além de reduzir custos de produção. Outrossim, o framework foi uma sugestão do cliente, tanto na forma de organização e criação da aplicação.
  Bootstrap: Um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas.
  React-Bootstrap: O react-bootstrap é uma biblioteca que nos oferece os componentes Bootstrap construídos em React.

  <h3>Back-end</h3>
  PHP: como um ambiente de desenvolvimento voltado aos servidores, o PHP foi escolhido por ter grande compatibilidade e afinidade com o software de banco de dados a ser usado na aplicação, o MySQL. Para além disso, o mesmo possui grande afinidade também com o próprio JavaScript e Html, os meios base da aplicação em um geral.

  <h3>Banco de dados</h3>
  MySQL:  Escolhemos essa tecnologia para banco de dados pois o PHP e MySQL possuem total compatibilidade, e funcionam muito bem juntos. Outros fatores são a implementação leve que proporciona maior velocidade de uso e a sua facilidade de integração entre servidor Web e linguagens de programação.
  
  <h3>Como Rodar o Front-end: </h3>
  Abra o terminal, na pasta do código do seu editor, e digite os seguintes comandos: 
  
  
  npm install react-scripts --save

  cd React

  npm start

  <h2>Como rodar o Back-end: </h2>
  <h3>
  Como o backend ainda não foi integrado com o front, e nem com o futuro serividor de hospedagem, precisa-se utilizar um servidor (Apache) na máquina local para poder rodar o protótipo do backend. Atualmente utilizamos o XAMPP no ambiente de desenvolvimento.

  Com o servidor rodando, caso haja a necessidade de configurar o banco de dados, as informações do mesmo devem ser alteradas em '/quests/app/database/connect.php'. No arquivo citado você pode alterar as informações nos argumentos de instanciamento da função connect de acordo com os atributos.  

  return new (mysql:host=localhost//servidor;dbname=quests//database;chatset=utf8",'root'//user, ''//senha);

  É possível encontrar o código de geração do banco de dados e das tabelas no arquivo "create_database".
  Por fim basta colar a pasta do back-end 'quests' , dentro do arquivo 'htdocs' no XAMPP e digitar no navegador:
  
  https://localhost/quests/home para ser redirecionado para a view inicial.

  (Para gerenciar o banco de dados com mais eficiência o xampp permite utilizar o phpmyadmin que fornece uma interface de SDBD mais facilmente)
</h3>
<h2>Responsáveis pelo Projeto</h2>
  Equipe Linos - linosdesingsmd@gmail.com <br>

  <ul>
    <h3>Design</h3>
    <li><a href="https://github.com/letinepo">Maria Letícia</a></li>
    <li><a href="https://github.com/vitoriajessicapr">Vitória Jessica</a></li>
    <li><a href="https://github.com/LUISGSFILHO">Luiz Gonzaga</a></li>
    <h3>Programação</h3>
    <li><a href="https://github.com/claraolvrx">Maria Clara</a></li>
    <li><a href="https://github.com/mickael-castro">Mickael Castro</a></li>
    <li><a href="https://github.com/victor280504">Victor Emanuel</a></li>
  </ul>
    
<h2>Licença</h2>
  <a href="https://github.com/smdlinos/Projeto_Linos/blob/main/LICENSE">Licença GPL-3.0</a>
