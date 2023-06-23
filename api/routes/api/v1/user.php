<?php

use  \App\HTTP\Response;
use  \App\Controller\Api;
use  \App\Controller\Api\Interesses;
use  \App\Controller\Api\User;
use  \App\Controller\Api\Tabletop;
use  \App\Model\Entity\Temas;

$obRouter->get('/user/auth/{id}', [
	function($id)
	{
		return new Response(200, "Usuario ".$id['id']);
	}
]);


$obRouter->get('/user/interesses', [ 
	function($request)
	{
		return new Response(200, Interesses::getInteresses($request));
	}
]);

$obRouter->post('/user/register', [ // rota funcionando
	function($request)
	{
		return new Response(200, User::setUser($request));
	}
]);

$obRouter->get('/user/testeSend', [ // rota de teste
	function()
	{
		return new Response(200, Temas::getTemas());
	}
]);
