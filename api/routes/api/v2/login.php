<?php

use  \App\HTTP\Response;
use  \App\Controller\Api; 

$obRouter->post('/login', [  //Login do usuário -> retorna o token de autenticação
	function($request)
	{
		return new Response(200, Api\Login::setLogin($request));
	}]
);


$obRouter->post('/login/reset', [  //Verifica se o usuário existe -> retorna o token com código e envia email
	function($request)
	{
		return new Response(200, Api\Login::verifyUser($request));
	}]
);

$obRouter->post('/verify/code', [  //verifica o codigo enviado pelo email 
	function($request)
	{
		return new Response(200, Api\Login::vefifyCode($request));
	}]
);

