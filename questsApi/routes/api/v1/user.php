<?php

use  \App\HTTP\Response;
use  \App\Controller\Api;
use  \App\Controller\Api\Interesses;
use  \App\Controller\Api\User;
use  \App\Controller\Api\Tabletop;

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

$obRouter->post('/user/register', [
	function($request)
	{
		return new Response(200, User::setUser($request));
	}
]);

$obRouter->get('/user/testeSend', [
	function()
	{
		$data = [
			'id_usuario'  => 20,
			'posicao' 	  => 0,
			'ch' 		  => 0
		];

		return new Response(200, Api\Tabletop::setTabletop($data));
	}
]);
