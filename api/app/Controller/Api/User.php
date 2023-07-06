<?php

namespace App\Controller\Api;

use App\Model\Entity\Interesses as EntityInteresses;

use App\Controller\Api\Interesses;
use App\Controller\Api\Certificados;
use App\Controller\Api\Pesquisas;
use App\Controller\Api\Tabletop;
use App\Controller\Api\Api;
use App\Controller\Api\UsersAwards;
use App\Controller\Api\Historico;
use App\Controller\Api\Respostas;


use Firebase\JWT\JWT;
use Firebase\JWT\Key;

use App\Model\Entity\User as EntityUser;

use App\Model\Entity\Tabletop as EntityTabletop;
/**
 * 
 */
class User
{
	
	public static function getUserTabletop($request)
	{	
		$user = self::getUser($request);

		if (!$user) {
			echo json_encode(false);
	    	http_response_code(401);
	    	exit;
		}

		$tabletop = EntityTabletop::getTabletops('id_usuario = '.$user['user']->id_usuario);

		return $tabletop;
	}	

	public static function getUser($request)
	{
		Api::setHeaders();
    
        $token = $request['request']->getBody();
        
	  	if (!$token) {
	  		echo json_encode(false);
	    	http_response_code(401);
	    	exit;
	  	}

	  	$token = json_decode($token);
	  	

    	try {

	        $decoded = JWT::decode($token->token, new Key($_ENV['KEY'], 'HS256'));

	        $user = EntityUser::getUserByEmail($decoded->email); // busca o usuario

	    	unset($user->password);

	        $tabletop = EntityTabletop::getTabletops('id_usuario = '.$user->id_usuario);

	        $interesses= EntityInteresses::getInteresses('id_usuario = '.$user->id_usuario);
	 
	        $data = [
	        	'user' => $user,
	        	'tabletop' => $tabletop,
	        	'interesses' => $interesses
	        ];

	        // echo json_encode($data);
	        // http_response_code(200);

	        return $data;

      	} catch (Throwable $e) {

	        if($e->getMessage() === 'Expired token'){
	          http_response_code(401);
	          die('EXPIRED');
	        }

	  	}
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
			'name' 			  => 'required',
			'nickname' 		  => 'required|unique:usuarios',
			'email' 		  => 'email|unique:usuarios',
			'password' 		  => 'required|maxlen:15',
			'data_nascimento' => 'required',
			'genero' 		  => 'required',
			'escolaridade' 	  => 'required'
		], $cadastrar);

		if(in_array(false, $validate)){

	    	$data= [];

	    	foreach ($validate as $key => $value) {
	    		if (!$value) {
	    			$data[] = $key;
	    		}
	    	}
			
			echo json_encode([false, $data]);
			http_response_code(401);
			exit;
		}

	    $validate['password'] = password_hash($validate['password'], PASSWORD_DEFAULT);
		$validate['pontos'] = 0;


		$user = new EntityUser();

		$user->name 		   = $validate['name'];
		$user->nickname 	   = $validate['nickname'];
		$user->email 		   = $validate['email'];
		$user->password 	   = $validate['password'];
		$user->custom 		   = 1;
		$user->data_nascimento = $validate['data_nascimento'];
		$user->genero 		   = $validate['genero'];
		$user->escolaridade    = $validate['escolaridade'];
		$user->pontos 		   = $validate['pontos'];

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


	public static function setDependences( $user, array $interesses)
	{


		Interesses::setInteresses($user->id_usuario, $interesses);

		$dataTabletop = [
			'id_usuario'  => $user->id_usuario,
			'posicao' 	  => 0,
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

	public static function changePassword($request){
	
		Api::setHeaders();

	    $post_body = $request['request']->getBody();
	    $post_body = json_decode($post_body, true);

	    if (!$post_body) {
	    	echo json_encode(false);
	    	http_response_code(401);
	    	exit;
	    }

	    $decoded = JWT::decode($post_body['token'], new Key($_SERVER['KEY'], 'HS256'));


      	try {

	        $email = filter_var($decoded->email, FILTER_SANITIZE_STRING);
	        $password = $post_body['password'];


	        if(empty($password)){

	           echo json_encode(false);
	           http_response_code(401);
	           exit;
	        }

	     	$password = password_hash($password, PASSWORD_DEFAULT);

	      	$user = new EntityUser();
	      	$user->password = $password;
		    $user->updateUserPassword($email);

	      	if(!$user instanceof EntityUser){
		        echo json_encode(false);
		        http_response_code(401);
		        exit;
	      	}

	        echo json_encode(true);
	        http_response_code(200); 
	        exit;

	    } catch (Throwable $e) {
	      	echo $e->getMessage();
	    }

  	}

  	public static function dataValidate($request)
  	{	
	  	Api::setHeaders();


		$post_body = $request['request']->getBody();
		$post_body = json_decode($post_body, true);
		$cadastrar = [];

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

		if(sizeof($cadastrar)<7){

			echo json_encode(false);
			http_response_code(401);
			die();

		}

		foreach ($cadastrar as $key => $value) {
	   		$_POST[$key] = $value;

	    }

	    $validate = validate([
			'name' 			  => 'required',
			'nickname' 		  => 'required|unique:usuarios',
			'email' 		  => 'email|unique:usuarios',
			'password'		  => 'required|maxlen:15',
			'data_nascimento' => 'required',
			'genero' 		  => 'required',
			'escolaridade' 	  => 'required'
		], $cadastrar);


	    if(in_array(false, $validate)){

	    	$data= [];

	    	foreach ($validate as $key => $value) {
	    		if (!$value) {
	    			$data[] = $key;
	    		}
	    	}
			
			echo json_encode([false, $data]);
			http_response_code(401);
			exit;
		}


		echo json_encode(true);
	    http_response_code(200);
	    exit;
	}

	public static function updateUser($request)
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

	    $decoded = JWT::decode($post_body['token'], new Key($_ENV['KEY'], 'HS256'));

	    $usuario = EntityUser::getUserByEmail($decoded->email); // busca o usuario

		foreach ($post_body as $key => $value) {
			if($key !== "interesses" && $key !== "token"){
				$cadastrar[$key] = $value;
			}
		}


		foreach ($cadastrar as $key => $value) {
       		$_POST[$key] = $value;

	    }

	    $validate = validate([
			'name' 			  => 'required',
			'nickname' 		  => 'required|unique:usuarios',
			'email'  		  => 'email|unique:usuarios',
			'password' 		  => 'required|maxlen:15',
			'data_nascimento' => 'required',
			'genero' 		  => 'required',
			'escolaridade' 	  => 'required'
		], $cadastrar);

		if(in_array(false, $validate)){

	    	$data= [];

	    	foreach ($validate as $key => $value) {
	    		if (!$value) {
	    			$data[] = $key;
	    		}
	    	}
			
			echo json_encode([false, $data]);
			http_response_code(401);
			exit;
		}

	    $validate['password'] = password_hash($validate['password'], PASSWORD_DEFAULT);
		$validate['pontos'] = 0;

		$user = new EntityUser();

		$user->id_usuario	   = $usuario->id_usuario;
		$user->name 		   = $validate['name'];
		$user->nickname 	   = $validate['nickname'];
		$user->email 		   = $validate['email'];
		$user->password 	   = $validate['password'];
		$user->custom 		   = $cadastrar['custom'];
		$user->data_nascimento = $validate['data_nascimento'];
		$user->genero 		   = $validate['genero'];
		$user->escolaridade    = $validate['escolaridade'];
		$user->pontos 		   = $validate['pontos'];
		$user->updateUser();

		if(!$user->id_usuario){
			echo json_encode(false);
			http_response_code(401);
			exit;
		}

		$remove = Interesses::removeInteresses($usuario); // remover os interesses do usuário

		if (!$remove) {
			echo json_encode(false);
			http_response_code(401);
			exit;
		}

		Interesses::setInteresses($usuario->id_usuario, $interesses);

		self::auth($user);
	}
	
	public static function verifyPasswordToDelete($request)
	{
	    Api::setHeaders();

	    $post_body = $request['request']->getBody();
	    $post_body = json_decode($post_body, true);

	    if(!$post_body) {
	      echo json_encode(false);
	      http_response_code(401);
	      exit;
	    }

	    $password = $post_body['password'];

	    $decoded = JWT::decode($post_body['token'], new Key($_ENV['KEY'], 'HS256'));

	    $usuario = EntityUser::getUserByEmail($decoded->email); // busca o usuario

	    if(empty($password)){
	      echo json_encode(false);
	      http_response_code(401);
	      exit;
	    }

	    if(!(password_verify($password ,$usuario->password))){
	      echo json_encode(false);
	      http_response_code(401);
	      exit;

	    } else {

	      $removeInteresses  = Interesses::removeInteresses($usuario);
	      $removeTabletop    = Tabletop::removeTabletop($usuario);
	      $removePesquisas	 = Pesquisas::removePesquisas($usuario);
	      $removeRecompensas = UsersAwards::removeAwards($usuario);
	      $removeHistorico   = Historico::removeHistorico($usuario);
	      $removeRespostas   = Respostas::removeRespostas($usuario);
	      $removeCertificados= Certificados::removeCertificados($usuario);

	      $user = new EntityUser();
	      $user->id_usuario = $usuario->id_usuario;
		  $user->deleteUser();

	      echo json_encode(true);
	      http_response_code(200);
	      exit;
	    }      
	    
	}

	public static function verifyPasswordToChange($request)
	{
	    Api::setHeaders();

	    $post_body = $request['request']->getBody();
	    $post_body = json_decode($post_body, true);

	    if(!$post_body) {
	      echo json_encode(false);
	      http_response_code(401);
	      exit;
	    }

	    $oldPassword = $post_body['password'];
	    $newPassword = $post_body['newPassword'];

	    $decoded = JWT::decode($post_body['token'], new Key($_ENV['KEY'], 'HS256'));

	    $usuario = EntityUser::getUserByEmail($decoded->email); // busca o usuario

	    if(empty($oldPassword)){
	      echo json_encode(false);
	      http_response_code(401);
	      exit;
	    }

	    if(!(password_verify($oldPassword ,$usuario->password))){
	      echo json_encode(false);
	      http_response_code(401);
	      exit;

	    } else {

	      $newPassword = password_hash($newPassword, PASSWORD_DEFAULT);

	      $user = new EntityUser();
	      $user->password = $newPassword;
		  $user->updateUserPassword($decoded->email);

	      echo json_encode(true);
	      http_response_code(200);
	      exit;
	    }      
	    
	}

}


#post para a url de teste

// {"name":"Carlos Filho","nickname":"Carlos","email":"carlosjunior356@hotmail.com","password":"12345","data_nascimento":"2004-03-30","genero":"Masculino","escolaridade":"Ensino Fundamental Incompleto","interesses":["Design Centrado no Usuário","Audiovisual","Inteligência Artificial"]}
