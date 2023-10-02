<?php

use  \App\HTTP\Response;
use  \App\Controller\Api\Temas;
use  \App\Controller\Api\Home;

$obRouter->get('/v1' , [ //rota de teste
	function ($request) {
		return new Response(200, 'Apresentando a API Quests: Facilitando a divulgação de questionários!

A API Quests é uma ferramenta integrada ao site principal Quests (quests-iota.vercel.app) que oferece recursos para facilitar a divulgação de questionários. Desenvolvida para atender às necessidades de pesquisa do grupo Célula Multimídia, liderado pela professora Ticianne Darin, do curso de Sistema e Mídias Digitais na UFC, a API Quests é uma solução eficiente.

Por meio da API Quests, os pesquisadores podem aproveitar recursos para divulgar seus questionários com facilidade, alcançando seu público-alvo de forma eficaz. A API oferece uma integração perfeita com o site Quests, proporcionando uma experiência de usuário intuitiva.

Simplifique o processo de divulgação de questionários utilizando a API Quests. Junte-se à comunidade do Quests e potencialize seus esforços de pesquisa.', 'application/json');
	}
]);

$obRouter->get('/temas' , [ //rota funcionando
	function ($request) {
		return new Response(200, Temas::getTemas($request), 'application/json');
	}
]);

$obRouter->get('/temas/{id}' , [ //rota funcionando
	function ($request, $id) {
		return new Response(200, Temas::getTema($request, $id['id']), 'application/json' );
	}
]);
