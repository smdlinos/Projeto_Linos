<?php


function exectMathUriInArrayRoutes($routes,$uri)
{
	return (array_key_exists($uri, $routes)) ? [$uri=>$routes[$uri]] : [];
}


function regularExpressionMatchAraryRoutes($routes, $uri)
{
	return $matchedUri = array_filter(
			$routes,
			function ($value) use($uri){
				$rejex = str_replace('/', '\/', ltrim($value, '/'));
				return preg_match("/^$rejex$/", ltrim($uri, '/'));
			}, ARRAY_FILTER_USE_KEY
		);
}

function params($uri, $matchedUri)
{
	if(!empty($matchedUri)){
		$matchedToGetParams = array_keys($matchedUri)[0];
		return array_diff(
			$uri,
			explode('/',ltrim($matchedToGetParams, '/'))
		);
	}
	return [];
}


function formatParams($uri, $params)
{
	$paramsData = [];
	foreach ($params as $index => $param) {
		$paramsData[$uri[$index	-1]] = $param;
	}
	return $paramsData;
}

function router()
{
	$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
	$routes = require 'routes.php';

	$requestMethod = $_SERVER['REQUEST_METHOD'];

	
	$matchedUri = exectMathUriInArrayRoutes($routes[$requestMethod],$uri);

	$params = [];
	if(empty($matchedUri)){
		$matchedUri = regularExpressionMatchAraryRoutes($routes[$requestMethod], $uri);
		$uri = explode('/', ltrim($uri, '/'));
		$params = params($uri, $matchedUri);
		$params	= formatParams($uri, $params);
	}

	if(!empty($matchedUri))
	{
		return controller($matchedUri, $params);
	}

	throw new Exeption('Algo deu errado');
}