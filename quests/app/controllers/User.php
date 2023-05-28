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
	}

	public function create($params){
		return [
			'view' => 'createUser.php',
			'data' => ['title'=> 'Create']
		];
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

		//$validate['password'] = password_hash($validate['password'], PASSWORD_DEFAULT);
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