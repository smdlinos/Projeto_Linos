<?php

namespace App\Controller\Api;

use App\Model\Entity\TemasQuests as EntityTemasQuests;
use App\Model\Entity\Recompensas as EntityRecompensas;
use App\Model\Entity\UsersAwards as EntityUserAwards;
use App\Model\Entity\User as EntityUser;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;


/**
 * 
 */
class UsersAwards
{
	
	public static function getAwards($request)
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

      $data = self::filtraAwards($user);

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


  public static function setAwards($request)
	{

		$token = $request['request']->getBody(); // recebe as informações
      
  	if (!$token) { //verifica se o token existe
  		echo json_encode(false); 
    	http_response_code(401);
    	exit;
  	}

  	$token = json_decode($token); //decodifica o json

  	$decoded = JWT::decode($token->token, new Key($_ENV['KEY'], 'HS256')); //decodifica  o token

    $user = EntityUser::getUserByEmail($decoded->email); // busca o usuario

	  $award = EntityRecompensas::getRecompensa($token->id_recompensa); //busca a recompensa

	  $recompensa = new EntityUserAwards();

	  $recompensa->id_usuario = $user->id_usuario;

	  $recompensa->id_recompensa = $award->id_recompensa;

	  $recompensa->registerAward();

		return true;
	}

	public function filtraAwards($user)
	{
		if(!$user){ // verifica o usuário existe
    	echo json_encode(false);
    	http_response_code(401);
    	exit;
    }

    $awards = EntityUserAwards::getAwards(null,null,null);
    $recompensas = [];

    foreach ($awards as $key => $value) { // filtra os interesses e pega somente os temas do usuário 
      if($awards[$key]->id_usuario == $user->id_usuario){
       $recompensas[] = $value->id_recompensa;
      }
    }

    foreach ($recompensas as $key => $value) {
    	$recompensas[$key] = EntityRecompensas::getRecompensa($value);
    }
    
    $data = [
      'recompensas' => $recompensas
    ];

    return $data;
	}

  public static function removeAwards($user)
  {
      // fazer uma lista com o id dos interesses;

    $allAwards = EntityUserAwards::getAwards(null, null, null); //array
    $awards = [];

    foreach ($allAwards as $key => $value) {
      if ($allAwards[$key]->id_usuario == $user->id_usuario) {
        $awards[] = $allAwards[$key]->id_usuario_recompensa;
      }
    }

    foreach ($awards as $key => $value) {
      $obAwards = new EntityUserAwards();
      $obAwards->id_usuario_recompensa = $value;
      $obAwards->deleteAward();
    }

    return true;
  }

}