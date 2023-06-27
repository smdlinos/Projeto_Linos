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

		if(!$obUserEmail && !$obUserName ){
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


  public static function verifyUser($request)
  {
    Api::setHeaders();
    
    $post_body = $request['request']->getBody();
    $post_body = json_decode($post_body, true);

    $_POST['email'] = $post_body['email'];

    $email = filter_var($_POST['email'], FILTER_SANITIZE_STRING);
      
    if(!$post_body){
      echo json_encode(false);
      http_response_code(401);
      exit;
    }
      
    if(empty($email)){
      echo json_encode(false);
      http_response_code(401);
      exit;
    }

    $user = User::getUserByEmail($email);

    if(!$user){
     echo json_encode(false);
     http_response_code(401);
     exit;
    }
    
    $codigo = substr(uniqid(rand()), 0, 6);

    $data = [
      'quem' => $email,
      'mensagem' => $codigo,
      'nome' => $user->nickname
    ];

    Api::sendEmail($data);

    $payload = [
      "exp" => time()+300,
      "iat" => time(),
      "email" => $email,
      "code" => $codigo
    ];

    $jwt = JWT::encode($payload, $_ENV['KEY'], 'HS256');

    echo json_encode([true,$jwt]);
    http_response_code(200); 
    exit;
  }

  public static function vefifyCode($request){
    
    Api::setHeaders();


    $post_body = $request['request']->getBody();
    $post_body = json_decode($post_body, true);
    $token = $request['request']->getHeaders()['Reset'];
    $token = str_replace('Bearer ', '', $token);

    if (!$post_body) {
     echo json_encode(false);
     http_response_code(401);
     exit;
    }

    try {

      $decoded = JWT::decode($token, new Key($_ENV['KEY'], 'HS256'));

      $code = $post_body['code'];

      $key = $decoded->code;

      if(empty($code)){
         echo json_encode(false);
         http_response_code(401);
         exit;
      }

      if($key != $code){
         echo json_encode(false);
         http_response_code(401);
         exit;
      }else{
        echo json_encode(true);
        http_response_code(200); 
        exit;
      }

    } catch (Throwable $e) {

      if($e->getMessage() === 'Expired token'){
        http_response_code(401);
        die('EXPIRED');
      }

    }
    

  }

}