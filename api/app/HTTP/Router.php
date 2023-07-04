<?php

namespace App\HTTP;

use \Closure;
use \ReflectionFunction;
use \App\HTTP\Middleware\Queue;

/**
 * Esse classe é responsável pelas leitura de url;
 * 
 * Seu funcionamento é respectivo aos comandos que estão atrelados as urls que 
 * devem chamar funções específicas
 * 
 * Todas as rotas estão conectadas ao objeto router, que permite a análise destas
 * para a realização de suas devidas funcionalidades.
 * 
 */

class Router
{
	private $url = '';
	private $prefix = '';
	private $routes = [];
	private $request;

	function __construct($url)
	{
		$this->request = new Request();
		$this->url 	   = $url;
		$this->setPrefix();
	}


	private function setPrefix()
	{
		$parseUrl = parse_url($this->url);

		$this->prefix = isset($parseUrl['path']) ? $parseUrl['path'] : '';
	}

	private function addRoute($method, $route, $params = [])
	{
		
		foreach ($params as $key => $value) {

			if ($value instanceof Closure || $value instanceof Response) {
				$params['controller'] = $value;
				unset($params[$key]);
				continue;
			}
		}

		$params['middlewares'] = isset($params['middlewares']) ? $params['middlewares'] : [];
		$params['variables'] = [];

		$patternVariable = '/{(.*?)}/';

		if (preg_match_all($patternVariable, $route, $matches)) {
			$route = preg_replace($patternVariable, '(.*?)', $route);
			$params['variables'] = $matches[1];
		}

		$patternRoute = '/^'.str_replace('/', '\/', $route)."$/";
		$this->routes[$patternRoute][$method] = $params;

		}


	private function getUri()
	{
		$uri = $this->request->getUri();

		$xUri = strlen($this->prefix) ? explode($this->prefix, $uri) : [$uri];

		return rtrim(end($xUri), '/');
	}


	public function getRoute()
	{
		$uri = $this->getUri();
		$http_method = $this->request->getHttpMethod();
		foreach ($this->routes as $patternRoute => $methods) {
			if(preg_match($patternRoute, $uri, $matches)){
				if(isset($methods[$http_method])){

					unset($matches[0]);

					$keys = $methods[$http_method]['variables'];
					$methods[$http_method]['variables'] = array_combine($keys, $matches);
					$methods[$http_method]['variables']['request'] = $this->request;

					return $methods[$http_method];
				}

				throw new Exception("Método não permitido", 405);

			}
		}

		throw new Exception("URL não encontrada", 404);
	}

	public function get($route, $params = [])
	{	
		return $this->addRoute('GET', $route, $params);
	}

	public function post($route, $params = [])
	{
		return $this->addRoute('POST', $route, $params);
	}

	public function put($route, $params = [])
	{
		return $this->addRoute('PUT', $route, $params);
	}

	public function delete($route, $params = [])
	{
		return $this->addRoute('DELETE', $route, $params);
	}

	public function run()
	{
		try {
			$route = $this->getRoute();

			if(!isset($route['controller'])){
				throw new Exception("A URL não foi processada", 500);
			}


			$args = [];
			
			$reflection = new ReflectionFunction($route['controller']);

			foreach ($reflection->getParameters() as $parameter ){
				$name = $parameter->getName();
				$args[$name] = isset($route['variables']) ?  $route['variables'] : '';
			}


			return (new Queue($route['middlewares'], $route['controller'], $args))->next($this->request);

			//return call_user_func_array($route['controller'],$args);

		} catch (Exception $e) {
			return new Response($e->getCode(), $e->getMessage());
		}
	}

}