<?php

use  \App\HTTP\Response;
use  \App\Controller\Api;
use  \App\Controller\Api\Interesses;
use  \App\Controller\Api\User;
use  \App\Controller\Api\Tabletop;
use  \App\Controller\Api\UsersAwards;
use  \App\Controller\Api\Pesquisas;
use  \App\Controller\Api\Respostas;
use  \App\Model\Entity\Temas;


#DADOS_BASE----------------------------------------------
$obRouter->post('/user/auth', [ //rota funcionando
	function($request, $id)
	{
		return new Response(200, User::getUser($request));
	}
]);

$obRouter->post('/user/interesses', [ // rota funcionando
	function($request)
	{
		return new Response(200, Interesses::getInteresses($request));
	}
]);

$obRouter->post('/user/tabletop', [ // rota funcionando
	function($request)
	{
		return new Response(200, User::getUserTabletop($request));
	}
]);

$obRouter->post('/update/tabletop', [ // rota funcionando
	function($request)
	{
		return new Response(200, Tabletop::updateTabletop($request));
	}
]);

$obRouter->post('/reset/tabletop', [ // rota funcionando
	function($request)
	{
		return new Response(200, Tabletop::resetCh($request));
	}
]);

#CADASTRO-----------------------------------------------

$obRouter->post('/user/register', [ // rota funcionando
	function($request)
	{
		return new Response(200, User::setUser($request));
	}
]);

$obRouter->post('/register/validate', [ // rota funcionando
	function($request)
	{
		return new Response(200, User::dataValidate($request));
	}
]);

$obRouter->post('/user/password', [ // rota funcionando
	function($request)
	{
		return new Response(200, User::changePassword($request));
	}
]);

$obRouter->post('/user/delete', [ // rota funcionando
	function($request)
	{
		return new Response(200, User::verifyPasswordToDelete($request));
	}
]);

$obRouter->post('/change/password', [ // rota funcionando
	function($request)
	{
		return new Response(200, User::verifyPasswordToChange($request));
	}
]);



#RECOMPENSAS--------------------------------------------

$obRouter->post('/user/awards', [ // rota funcionando
	function($request)
	{
		return new Response(200, UsersAwards::getAwards($request));
	}
]);

$obRouter->post('/create/awards', [ // rota funcionando
	function($request)
	{
		return new Response(200, UsersAwards::setAwards($request));
	}
]);

#PESQUISAS----------------------------------------------

$obRouter->post('/user/search', [ // rota funcionando
	function($request)
	{
		return new Response(200, Pesquisas::getPesquisas($request));
	}
]);

$obRouter->post('/create/search', [ // rota funcionando
	function($request)
	{
		return new Response(200, Pesquisas::setPesquisa($request));
	}
]);

#RESPOSTAS----------------------------------------------

$obRouter->post('/user/responses', [ // rota funcionando
	function($request)
	{
		return new Response(200, Respostas::getRespostas($request));
	}
]);

$obRouter->post('/create/response', [ // rota funcionando
	function($request)
	{
		return new Response(200, Respostas::setResposta($request));
	}
]);

$obRouter->post('/verify/response', [ // rota funcionando
	function($request)
	{
		return new Response(200, Respostas::processCode($request));
	}
]);


#ATUALIZAR----------------------------------------------------

$obRouter->post('/user/update', [ // rota funcionando
	function($request)
	{
		return new Response(200, User::updateUser($request));
	}
]);

