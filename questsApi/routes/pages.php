<?php

use  \App\HTTP\Response;
use \App\Controller\Pages;

$obRouter->get('/', [
	function()
	{
		return new Response(200, Pages\Home::getHome());
	}]
);
 
$obRouter->get('/sobre', 
	[function()
	{
		return new Response(200, Pages\Home::getHome());
	}]
);


$obRouter->get('/user/{id}', [
	function($id)
	{
		return new Response(200, "Usuario ".$id['id']);
	}
]);

