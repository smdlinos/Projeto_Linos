<?php

use  \App\HTTP\Response;

$obRouter->get('/api/v1' , [
	function ($request) {
		return new Response(200, '404 bro', 'application/json');
	}
]);