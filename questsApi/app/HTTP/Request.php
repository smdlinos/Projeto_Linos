<?php 

namespace App\HTTP;

/**
 * Esse classe é responsável pelo obtenção de informações das requisições;
 * 
 * Possui variáveis privadas que correspondem as informações que devem comparecer em uma requisição;
 * 
 * Seus métodos retornam esses elementos que tem definição padrão e são setados no contrutor;
 * 
 * As variáveis privadas contém valores obtidos através variáveis super globais que guardam informações do servidor
 * 
 * Ao instanciar um objeto se deve definir o código da resposta, o conteúdo e como este será enviado;
 */

class Request
{
	private $http_method;

	private $uri;

	private $query_params = [];

	private $post_vars = [];

	private $headers = []; 

	private $body = [];

	public function __construct()
	{
		$this->query_params = empty($_GET) ? [] : $_GET;
		$this->post_vars =  empty($_POST) ? [] : $_POST;
		$this->headers = getallheaders();
		$this->http_method = empty($_SERVER['REQUEST_METHOD']) ? '' : $_SERVER['REQUEST_METHOD'];
		$this->uri = empty($_SERVER['REQUEST_URI']) ? '' : $_SERVER['REQUEST_URI'] ;
		$this->body = empty(file_get_contents('php://input')) ? [] : file_get_contents('php://input');

	}


	public function getHttpMethod()
	{
		return $this->http_method;
	}

	public function getUri()
	{
		return $this->uri;
	}

	public function getHeaders()
	{
		return $this->headers;
	}

	public function getQueryParams()
	{
		return $this->query_params;
	}

	public function getPostVars()
	{
		return $this->post_vars;
	}

	public function getbody()
	{
		return $this->body;
	}
}