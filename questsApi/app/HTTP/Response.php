<?php

namespace App\HTTP;

/**
 * Esse classe é responsável pelas respostas de requisições;
 * 
 * Possui variáveis privadas que correspondem as informações que devem comparecer em uma resposta;
 * 
 * Seus métodos configuram esses elementos que tem definição padrão e são setados no contrutor;
 * 
 * Ao instanciar um objeto se deve definir o código da resposta, o conteúdo e como este será enviado;
 */

class Response 
{
	
	private $httpCode = 200;

	private $headers = [];

	private $contentType = 'application/json';

	private $content;

	function __construct($httpCode, $content, $contentType = 'application/json')
	{
		$this->httpCode = $httpCode;
		$this->content = $content;
		$this->setContentType($contentType);
		
	}

	public function setContentType($contentType)
	{
		$this->contentType = $contentType;
		$this->addHeader('Content-Type', $contentType);
	}

	public function addHeader($key, $value)
	{
		$this->headers[$key] = $value;
	}

	public function sendResponse()
	{	
		$this->sendHeaders();
		switch ($this->contentType) {
			case 'application/json':
				echo json_encode($this->content);
				exit;
			
		}
	}

	private function sendHeaders()
	{	
		http_response_code($this->httpCode);
		foreach ($this->headers as $key => $value) {
			header($key.': '.$value);
		}
	}
}