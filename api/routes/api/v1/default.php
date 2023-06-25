<?php

use  \App\HTTP\Response;
use  \App\Controller\Api\Temas;
use  \App\Controller\Api\Home;

$obRouter->get('/v1' , [ //rota de teste
	function ($request) {
		return new Response(200, '404 bro', 'application/json');
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


$obRouter->get('/home' , [ //rota funcionando
	function ($request) {
		return new Response(200, Home::getHomeContent($request), 'application/json' );
	}
]);
