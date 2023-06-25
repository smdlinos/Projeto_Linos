<?php

use  \App\HTTP\Response;
use  \App\Controller\Api;
use  \App\Controller\Api\Interesses;
use  \App\Controller\Api\User;
use  \App\Controller\Api\Tabletop;
use  \App\Model\Entity\Temas;

$obRouter->get('/user/auth', [ //rota funcionando
	function($request, $id)
	{
		return new Response(200, User::getUser($request));
	}
]);


$obRouter->get('/user/interesses', [ // rota funcionando
	function($request)
	{
		return new Response(200, Interesses::getInteresses($request));
	}
]);

$obRouter->get('/user/tabletop', [ // rota funcionando
	function($request)
	{
		return new Response(200, User::getUserTabletop($request));
	}
]);

$obRouter->post('/user/register', [ // rota funcionando
	function($request)
	{
		return new Response(200, User::setUser($request));
	}
]);


$obRouter->post('/user/password', [ // rota funcionando
	function($request)
	{
		return new Response(200, User::changePassword($request));
	}
]);

$obRouter->post('/register/validate', [ // rota funcionando
	function($request)
	{
		return new Response(200, User::dataValidate($request));
	}
]);