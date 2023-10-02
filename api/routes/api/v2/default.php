<?php

use  \App\HTTP\Response;
use  \App\Controller\Api\Temas;
use  \App\Controller\Api\Home;

$obRouter->get('/v2' , [ //rota de teste
	function ($request) {
		return new Response(200, include 'app/View/home.php', 'text/html');
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
