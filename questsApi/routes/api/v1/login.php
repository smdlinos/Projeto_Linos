<?php

use  \App\HTTP\Response;
use  \App\Controller\Api;

$obRouter->get('/api/login', [ 
	// deixar aqui pra fazer a verificação de testes
	function($request)
	{
		return new Response(200, Api\Login::getLogin($request));
	}]
); 

$obRouter->post('/api/login', [
	function($request)
	{
		return new Response(200, Api\Login::setLogin($request));
	}]
);