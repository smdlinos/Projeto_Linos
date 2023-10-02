<!DOCTYPE html>
<html>
<head>
	<title>QuestsAPI</title>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="//cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
	<link rel="stylesheet" href="app/View/style.css">
</head>

<body align="center">
	<header style="margin-top:50px ;">
		<div class="container">
			<a href="https://quests-iota.vercel.app">
				<img src="app/View/img/logo.png" title="Logo" alt="Logo" style="width: 200px;">
			</a>
		</div>
	</header>
	<main class="container">
		<h1>Apresentando a API Quests: Facilitando a divulgação de questionários!</h1>
    	<p>A API Quests é uma ferramenta integrada ao site principal Quests (<a href="https://quests-iota.vercel.app" target="_blank">quests-iota.vercel.app</a>) que oferece recursos para facilitar a divulgação de questionários. Desenvolvida para atender às necessidades de pesquisa do grupo Célula Multimídia, liderado pela professora Ticianne Darin, do curso de Sistema e Mídias Digitais na UFC, a API Quests é uma solução eficiente.</p>
    	<p>Por meio da API Quests, os pesquisadores podem aproveitar recursos para divulgar seus questionários com facilidade, alcançando seu público-alvo de forma eficaz. A API oferece uma integração perfeita com o site Quests, proporcionando uma experiência de usuário intuitiva.</p>
    	<p>Simplifique o processo de divulgação de questionários utilizando a API Quests. Junte-se à comunidade do Quests e potencialize seus esforços de pesquisa.</p>
	</main>
	<aside>
		<h2>Lista de Rotas POST:</h2>
<ul style='list-style-type: none;'>
    <li><span style="color: green;">POST</span> /user/auth</li>
    <li><span style="color: green;">POST</span> /user/interesses</li>
    <li><span style="color: green;">POST</span> /user/tabletop</li>
    <li><span style="color: green;">POST</span> /user/register</li>
    <li><span style="color: green;">POST</span> /user/password</li>
    <li><span style="color: green;">POST</span> /user/delete</li>
    <li><span style="color: green;">POST</span> /user/awards</li>
    <li><span style="color: green;">POST</span> /user/search</li>
    <li><span style="color: green;">POST</span> /user/responses</li>
    <li><span style="color: green;">POST</span> /user/update</li>
    <li><span style="color: green;">POST</span> /create/awards</li>
    <li><span style="color: green;">POST</span> /create/search</li>
    <li><span style="color: green;">POST</span> /create/response</li>
    <li><span style="color: green;">POST</span> /create/historico</li>
    <li><span style="color: green;">POST</span> /login</li>
    <li><span style="color: green;">POST</span> /login/reset</li>
    <li><span style="color: green;">POST</span> /verify/response</li>
    <li><span style="color: green;">POST</span> /verify/code</li>
    <li><span style="color: green;">POST</span> /quests/recomended</li>
    <li><span style="color: green;">POST</span> /update/tabletop</li>
    <li><span style="color: green;">POST</span> /reset/tabletop</li>
    <li><span style="color: green;">POST</span> /register/validate</li>
    <li><span style="color: green;">POST</span> /change/password</li>
    <li><span style="color: green;">POST</span> /historico</li>
</ul>

<h2>Lista de Rotas GET:</h2>
<ul style='list-style-type: none;'>
    <li><span style="color: blue;">GET</span> /quests</li>
    <li><span style="color: blue;">GET</span> /quests/{id}</li>
    <li><span style="color: blue;">GET</span> /search/{id}</li>
    <li><span style="color: blue;">GET</span> /v2</li>
    <li><span style="color: blue;">GET</span> /temas</li>
    <li><span style="color: blue;">GET</span> /temas/{id}</li>
</ul>

	</aside>
	<footer>
		<p>Desenvolvido pela Linos</p>
	</footer>
</body>
</html>
