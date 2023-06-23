<?php

namespace App\Controller\Api;

use App\Model\Entity\Interesses as EntityInteresses;

use App\Controller\Api\Interesses;
use App\Controller\Api\Tabletop;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

use App\Model\Entity\User as EntityUser;

use App\Model\Entity\Tabletop as EntityTabletop;
/**
 * 
 */
class User
{
	
	public static function getUser($request)
	{
		$allQuests = EntityQuests::getQuests(null, null, null);

		if (!$allQuests instanceof EntityQuests) {
			echo json_encode(false);
           	http_response_code(404);
           	exit;
		}

		return $allQuests;
	}

	public static function setUser($request)
	{
		Api::setHeaders();

		$post_body = $request['request']->getBody();
		$post_body = json_decode($post_body, true);
		$cadastrar = [];
	    $interesses = $post_body['interesses'];

	    if (!$post_body) {
	  		echo json_encode(false);
	    	http_response_code(401);
	    	exit;
	    }

		foreach ($post_body as $key => $value) {
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
			'password' => 'required|maxlen:15',
			'data_nascimento' => 'required',
			'genero' => 'required',
			'escolaridade' => 'required'
		], $cadastrar);


	    $validate['password'] = password_hash($validate['password'], PASSWORD_DEFAULT);
		$validate['pontos'] = 0;
		$validate['posicao']= 0;


		$user = new EntityUser();

		$user->name = $validate['name'];
		$user->nickname = $validate['nickname'];
		$user->email = $validate['email'];
		$user->password = $validate['password'];
		$user->data_nascimento = $validate['data_nascimento'];
		$user->genero = $validate['genero'];
		$user->escolaridade = $validate['escolaridade'];
		$user->pontos = $validate['pontos'];
		$user->posicao =$validate['posicao'];

		$user->registerUser();

		if(!$user->id_usuario){
			echo json_encode(false);
			http_response_code(401);
			exit;
		}

		$response = self::setDependences($user, $interesses);

		if (!$response) {
			echo json_encode(false);
			http_response_code(401);
			exit;
		}

		self::auth($user);
	}


	public static function setDependences($user, array $interesses)
	{

		Interesses::setInteresses($user->id_usuario, $interesses);
		
		$dataTabletop = [
			'id_usuario'  => $user->id_usuario,
			'posicao' 	  => $user->posicao,
			'ch' 		  => 0
		];

		Tabletop::setTabletop($dataTabletop);

		return true;
	}


	public static function auth($user)
	{
		Api::setHeaders();
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
		exit;
	} 
	
}

#post para a url de teste

// {"name":"Carlos Filho","nickname":"Carlos","email":"carlosjunior356@hotmail.com","password":"12345","data_nascimento":"2004-03-30","genero":"Masculino","escolaridade":"Ensino Fundamental Incompleto","interesses":["Design Centrado no Usuário","Audiovisual","Inteligência Artificial"]}