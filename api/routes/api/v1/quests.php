<?php

use  \App\HTTP\Response;
use  \App\Controller\Api;


#DADOS_BASE---------------------------------------------------
$obRouter->get('/quests' , [ //rota funcionando 
	function ($request) {
		return new Response(200, Api\Quests::getQuests($request), 'application/json');
	}
]);

$obRouter->post('/quests/recomended', [ // rota funcionando
	function($request, $id)
	{
		return new Response(200, Api\Quests::getRecomendedQuests($request));
	}
]);

$obRouter->get('/quests/{id}' , [ //rota funcionando 
	function ($request, $id) {
		return new Response(200, Api\Quests::getQuest($request, $id['id']), 'application/json');
	}
]);


#HISTORICO-----------------------------------------------------
$obRouter->post('/historico' , [ //rota funcionando 
	function ($request) {
		return new Response(200, Api\Historico::getHistorico($request), 'application/json');
	}
]);


$obRouter->post('/create/historico' , [ //rota funcionando 
	function ($request) {
		return new Response(200, Api\Historico::setHistorico($request), 'application/json');
	}
]);



