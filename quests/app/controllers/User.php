<?php

namespace app\controllers;

class User
{
	public function show($params)
	{

		if(!isset($params['user'])){
			redirect('home');
		}
		$user = findBy('usuarios', 'id_usuario' , $params['user']);

		return [
			'view' => 'perfil.php',
			'data' => ['title'=> 'Perfil', 'user' => $user]
		];
	}



	public function create(){

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

				echo json_encode(true);
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

			if(sizeof($cadastrar) < 7){
				$valida = false;
				echo json_encode($valida);
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
				http_response_code(200);
				die();
			} else {
				$valida = false;
				echo json_encode($valida);
				http_response_code(401);
				die();
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
}