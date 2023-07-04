<?php

namespace App\Controller\Api;

use App\Model\Entity\Historico as EntityHistorico;
use App\Model\Entity\Quests as EntityQuests;
use App\Model\Entity\User as EntityUser;
use App\Controller\Api\Quests;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;


/**
 * 
 */
class Historico
{
	
	public static function getHistorico($request)
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

      $data = self::filtraHistorico($user);

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

  public static function setHistorico($request)
	{

		$token = $request['request']->getBody();
      
  	if (!$token) {
  		echo json_encode(false);
    	http_response_code(401);
    	exit;
  	}

  	$token = json_decode($token);

  	$decoded = JWT::decode($token->token, new Key($_ENV['KEY'], 'HS256'));

    $user = EntityUser::getUserByEmail($decoded->email); // busca o usuario

	  $quest = EntityQuests::getQuest($token->id_quest); //busca o questionario

	  $historico = new EntityHistorico();

	  $historico->id_usuario = $user->id_usuario;

	  $historico->id_questionario = $quest->id_questionario;

	  $historico->registerHistorico();

		return true;
	}

	public function filtraHistorico($user)
	{
		if(!$user){ // verifica o usuário
    	echo json_encode(false);
    	http_response_code(401);
    	exit;
    }

    $historicos = EntityHistorico::getHistoricos(null,null,null);
    $questionarios = [];

    foreach ($historicos as $key => $value) { // filtra os interesses e pega somente os temas do usuário 
      if($historicos[$key]->id_usuario == $user->id_usuario){
       $questionarios[] = $value->id_questionario;
      }
    }

    foreach ($questionarios as $key => $value) {
    	$questionarios[$key] = EntityQuests::getQuest($value);
    }
    
    $data = [
      'historico' => $questionarios
    ];

    return $data;
	}

  public static function removeHistorico($user)
  {
      // fazer uma lista com o id dos interesses;

    $allHistoricos = EntityHistorico::getHistoricos(null, null, null); //array
    $historicos = [];

    foreach ($allHistoricos as $key => $value) {
      if ($allHistoricos[$key]->id_usuario == $user->id_usuario) {
        $historicos[] = $allHistoricos[$key]->id_historico;
      }
    }

    foreach ($historicos as $key => $value) {
      $obHistorico = new EntityHistorico();
      $obHistorico->id_historico = $value;
      $obHistorico->deleteHistorico();
    }

    return true;
  }

}