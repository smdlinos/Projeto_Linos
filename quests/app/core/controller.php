<?php


function controller($matchedUri, $params)
{
	List($controller, $method) = explode('@',array_values($matchedUri)[0]);

	$controllerWithNamespaces = CONTROLER_PATH.$controller;

	if(!class_exists($controllerWithNamespaces)){

		throw new Exception("Controller {$controller} não existe");
		
	}

	$controllerInstance = new $controllerWithNamespaces;

	if(!method_exists($controllerInstance, $method)){
		throw new Exception("Esse método {$method} não existe no controller {$controller}");
	}

	$controller = $controllerInstance->$method($params);
	if($_SERVER['REQUEST_METHOD'] === 'POST'){
		die();
	}
	return $controller;
}