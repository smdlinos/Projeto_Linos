<?php

namespace App\Controller\Api;

use App\Model\Entity\Interesses as EntityInteresses;
use App\Model\Entity\Temas;
use App\Model\Entity\User as EntityUser;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;


/**
 * 
 */
class Interesses
{
	
	public static function getInteresses($request)
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

	        $data = self::filtraInteresses($user);

	        echo json_encode($data); 
	        http_response_code(200);
	        exit;

      	} catch (Throwable $e) {

	        if($e->getMessage() === 'Expired token'){
	          http_response_code(401);
	          die('EXPIRED');
	        }

	  	}
      

  	}

  public static function setInteresses($user, $interesses)
	{
	    // array interesses
	    // id  user

	  $allThemes = Temas::getTemas(null, null, null); //array
		foreach ($allThemes as $key => $value) {

			for($i = 0 ; $i< sizeof($interesses) ; $i++){
				
				if($allThemes[$key]->tema == $interesses[$i]){
					$obInteresse = new EntityInteresses();
					$obInteresse->id_usuario = $user;
					$obInteresse->id_tema = $allThemes[$key]->id_tema;
					$obInteresse->registerInteresse();
				}
			}
		
		}

		return $obInteresse;
	}




	public static function filtraInteresses($user)
	{
		if(!$user){ // verifica o usuário
    	echo json_encode(false);
    	http_response_code(401);
    	exit;
    }

    $getInteresses = EntityInteresses::getInteresses(); // pesquisa todos os interesses

    foreach ($getInteresses as $key => $value) { // filtra os interesses e pega somente os temas do usuário 
      if($getInteresses[$key]->id_usuario == $user->id_usuario){
       $interesses[] = $value->id_tema;
      }
    }

    foreach ($interesses as $key => $value) {
    	$interesses[$key] = Temas::getTema($value);
    }
    
    $data = [
      'interesses' => $interesses
    ];

    return $data;
	}

	public static function removeInteresses($user)
	{
	    // fazer uma lista com o id dos interesses;

	  $allInteresses = EntityInteresses::getInteresses(null, null, null); //array
	  $interesses = [];

		foreach ($allInteresses as $key => $value) {
			if ($allInteresses[$key]->id_usuario == $user->id_usuario) {
				$interesses[] = $allInteresses[$key]->id_interesse;
			}
		}

		foreach ($interesses as $key => $value) {
			$obInteresse = new EntityInteresses();
			$obInteresse->id_interesse = $value;
			$obInteresse->deleteInteresse();
		}

		return true;
	}

}