<?php

function load()
{
	$page = filter_input(INPUT_GET, 'page', FILTER_SANITIZE_STRING);
	$page = (!$page) ? 'pages/home.php' : "pages/{$page}.php";

	if(!file_exists($page)){
		throw new \Exception("Algo de errado não está certo");
	}

	return $page;
}
