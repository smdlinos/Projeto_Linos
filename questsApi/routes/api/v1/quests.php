<?php

use  \App\HTTP\Response;
use  \App\Controller\Api;


$obRouter->get('/api/v1/quests' , [
	function ($request) {
		return new Response(200, Api\Quests::getQuests($request), 'application/json');
	}
]);


$obRouter->get('/api/v1/quests/{id}' , [
	function ($request, $id) {
		return new Response(200, Api\Quests::getQuest($request, $id), 'application/json');
	}
]);