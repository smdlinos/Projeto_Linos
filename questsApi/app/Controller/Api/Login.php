<?php 

namespace App\Controller\Api;

use App\Model\Entity\User;

use App\Db\Database;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;


class Login 
{	

	public static function setLogin($request)
	{
		Api::setHeaders();

		$post_body = $request['request']->getBody();
		$post_body = json_decode($post_body, true);

		foreach ($post_body as $key => $value) {
       		$_POST[$key] = $value;
    }

    if (!$post_body) {
  		echo json_encode(false);
    	http_response_code(401);
    	exit;
    }

		$login = filter_var($_POST['login'], FILTER_SANITIZE_STRING);
  	$password =filter_var($_POST['password'], FILTER_SANITIZE_STRING);

  	if(empty($login) || empty($password)){
         echo json_encode(false);
         http_response_code(401);
         exit;
      }

		$obUserEmail = User::getUserByEmail($login);
		$obUserName  = USer::getUserByName($login);

		if(!$obUserEmail instanceof User && !$obUserName instanceof User){
         echo json_encode(false);
         http_response_code(401);
         exit;
    }

    if($obUserName){

      $obUser = $obUserName;

    } else {
    	
      $obUser = $obUserEmail;

    }

    if(!(password_verify($password ,$obUser->password))){
      echo json_encode(false);
      http_response_code(401);
      exit;
    } else {

  		$payload = [
    		"exp" => time()+ ((3600*24)*7),
    		"iat" => time(),
    		"email" => $obUser->email
			]; 

			$jwt = JWT::encode($payload, $_ENV['KEY'], 'HS256');

      echo json_encode($jwt);
      http_response_code(200);
      exit;
   	}      
 		
	}


	public static function getLogin($request)
	{	
		return 'Oi, eu não retorno nada :) (não via GET bobão, mas sem autenticação tu não passas)';
	}
}