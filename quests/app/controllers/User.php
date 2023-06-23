<?php

namespace app\controllers;


use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Dotenv;


class User
{
	public function show($params)
	{

		if(!isset($params['user'])){
			redirect('home');
		}
		$user = findBy('usuarios', 'id_usuario' , $params['user']);

		$interesses	= all('interesses');

		foreach ($interesses as $key => $value) {
			if ($value->id_usuario == $params['user']) {
				$id_tema[] = $value->id_tema;
			}
		}

		$temas = all('temas');

		foreach ($temas as $key => $value) {

			foreach ($id_tema as $id) {
				if ($value->id_tema == $id) {
					$user_interesses[] = $value;
				}
			}
		}

		$data= [
			'user' => $user,
			'interesses' => $user_interesses,
			'historico' => '',
			'pesquisas' => '',
			'certificados' => '',
			'horas' => '',
			'tabletop' => ''
		];

		echo json_encode($data,true);
		http_response_code(200);
	}



	public function create(){
		$dotenv = Dotenv\Dotenv::createImmutable('D:/XAMPP/htdocs/quests');
    	$dotenv->load();

		header("Access-Control-Allow-Origin: *");
		header("Access-Control-Allow-Headers: *");
		header("Content-Type: application/json; charset=UTF-8");

		if($_SERVER['REQUEST_METHOD'] == "OPTIONS"){
		   response(200, 'ok', '');
		}

		$body = file_get_contents('php://input');

		if($_SERVER['REQUEST_METHOD'] == "POST"){
			$body = file_get_contents('php://input');
			$body = json_decode($body, true);
			$cadastrar = [];

			foreach ($body as $key => $value) {
				if($key !== "interesses"){
					$cadastrar[$key] = $value;
				}
			}


			foreach ($cadastrar as $key => $value) {
				$_POST[$key] = $value;
			}
	
			$validate = validate([
			'name' => 'required',
			'nickname' => 'required',
			'email' => 'email|unique:usuarios',
			'password' => 'required|maxlen:9',
			'data_nascimento' => 'required',
			'genero' => 'required',
			'escolaridade' => 'required'
			], $cadastrar);

			$validate['password'] = password_hash($validate['password'], PASSWORD_DEFAULT);
			$validate['pontos'] = 0;
			$validate['posicao']= 0;

			$created = create('usuarios', $validate);

			if(!$created){
				echo json_encode(false);
				http_response_code(401);
			} else {
				$user = findBy('usuarios', 'email' , $validate['email']);
				$usuario = $user->id_usuario;
				$interesses = $body['interesses'];

				setInteresses($interesses, $usuario);

				$dataTabletop = [
					'id_usuario' => $user->id_usuario,
					'posicao' => $user->posicao,
					'ch' => 0
				]; 

				$createTabletop = create('tabletop', $dataTabletop);

				$payload = [
		          "exp" => time()+ ((3600*24)*7),
		          "iat" => time(),
		          "email" => $user->email
		        ]; 

		        $jwt = JWT::encode($payload, $_ENV['KEY'], 'HS256');

		        $data = [
		        	'token' => $jwt,
		        	'register' => true
		        ];

		        echo json_encode($data);
				http_response_code(200);
				
			}
			
		} 
	}


	public function valida(){
	
		header("Access-Control-Allow-Origin: *");
		header("Access-Control-Allow-Headers: *");
		header("Content-Type: application/json; charset=UTF-8");

		if($_SERVER['REQUEST_METHOD'] == "OPTIONS"){
		   response(200, 'ok', '');
		}


		$body = file_get_contents('php://input');


		if($_SERVER['REQUEST_METHOD'] == "POST"){
			$body = file_get_contents('php://input');
			$body = json_decode($body, true);
			$cadastrar = [];

			foreach ($body as $key => $value) {
				if($key !== "interesses"){
					$cadastrar[$key] = $value;
				}
			}

			if(sizeof($cadastrar)<7){

				echo json_encode(false);
				http_response_code(401);
				die();

			}


			foreach ($cadastrar as $key => $value) {
				$_POST[$key] = $value;
			}
			
			$validate = validate([
			'name' => 'required',
			'nickname' => 'required',
			'email' => 'email|unique:usuarios',
			'password' => 'required|maxlen:9',
			'data_nascimento' => 'required',
			'genero' => 'required',
			'escolaridade' => 'required'
			], $cadastrar);

			if($validate){
				$valida = true;
				echo json_encode($valida);
			} else {
				$valida = false;
				echo json_encode($valida);
			}
			http_response_code(200);
		}

		if($_SERVER['REQUEST_METHOD'] == "GET"){
			echo json_encode("Uuu que legal, você tentou buscar algo e não achou.....");
			http_response_code(200);
		}
	}

	public function store()
	{

		$validate = validate([
			'name' => 'required',
			'nickname' => 'required',
			'email' => 'email|unique:usuarios',
			'password' => 'required|maxlen:9',
			'data_nascimento' => 'required',
			'genero' => 'required',
			'escolaridade' => 'required'
		]);
		if(!$validate){
			return redirect('user/create');
		}

		$validate['password'] = password_hash($validate['password'], PASSWORD_DEFAULT);
		$validate['pontos'] = 0;
		$validate['posicao']= 0;

		$created = create('usuarios', $validate);

		if(!$created){
			setFlash('message', 'Ocorreu um erro ao cadastrar, tente novamente em alguns segundos');
			return redirect('user/create');
		}
		return redirect('home');
	}


	public function getQuests()
	{
		header("Access-Control-Allow-Origin: *");
		header("Access-Control-Allow-Headers: *");
		header("Content-Type: application/json; charset=UTF-8");

		$body = file_get_contents('php://input');

		if($_SERVER['REQUEST_METHOD'] == "POST"){
			$body = json_decode($body, true);
			
			if(!$body){
				echo json_encode(false);
				http_response_code(401);
			}

			$quest = findBy('questionarios', 'id_questionario', $body['id']);
			$get_temas = all('temas');
			$temas_quest = all('temas_questionario');

			foreach ($temas_quest as $key => $value) {
				if($value->id_questionario == $body['id']){
			  	$temas[] = $value->id_tema;
				}
			}
			foreach ($temas as $key => $value){
				$value = findBy('temas', 'id_tema', $value);
				$temas[$key] = $value;
			}

			$quest->temas = $temas;

			if(!$quest){
				http_response_code(401);
			}

       		echo json_encode($quest);
			http_response_code(200);
		}
	}

	public function getInteresses()
	{
	    $dotenv = Dotenv\Dotenv::createImmutable('D:/XAMPP/htdocs/quests');
	    $dotenv->load();
	    
	    header("Access-Control-Allow-Origin: *");
	    header("Access-Control-Allow-Headers: *");
	    header("Content-Type: application/json; charset=UTF-8");    
	    
	    if($_SERVER['REQUEST_METHOD'] == "GET"){
	    	header("Access-Control-Allow-Origin: *");
	    	header("Access-Control-Allow-Headers: *");
	      	$dotenv = Dotenv\Dotenv::createImmutable('D:/XAMPP/htdocs/quests');
	      	$dotenv->load();


	      $headers = getallheaders();
	      $authorization = $headers['Authorization'];

	      //fazer verificação se o header existe para retornar usuário anônimo/visitante

	      $token = str_replace('Bearer ', '', $authorization);


		      try {
		        $decoded = JWT::decode($token, new Key($_SERVER['KEY'], 'HS256'));

		        $user = findBy('usuarios', 'email', $decoded->email); // busca o usuario

		        if(!$user){ // verifica o usuário
		        http_response_code(401);
		        die();
		        }

		        $getInteresses = all('interesses'); // pesquisa todos os interesses

		        foreach ($getInteresses as $key => $value) { // filtra os interesses e pega somente os temas do usuário 
		          if($getInteresses[$key]->id_usuario == $user->id_usuario){
		           $interesses[] = $value->id_tema;
		          }
		        }

		        foreach ($interesses as $key => $value) {
		        	$interesses[$key] = findBy('temas', 'id_tema', $value);
		        }
		        
		        $data = [
		          'user' => $user,
		          'token'=> $token,
		          'interesse' => $interesses
		        ];

		        echo json_encode($data); 
		        http_response_code(200);

		      } catch (Throwable $e) {

		        if($e->getMessage() === 'Expired token'){
		          http_response_code(401);
		          die('EXPIRED');
		        }

	    	}
	    }
  	}
}