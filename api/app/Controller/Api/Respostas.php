<?php

namespace App\Controller\Api;

use App\Model\Entity\Respostas as EntityRespostas;
use App\Model\Entity\Quests as EntityQuests;
use App\Model\Entity\User as EntityUser;
use App\Controller\Api\Quests;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;


/**
 * 
 */
class Respostas
{
	
	public static function getRespostas($request)
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

      $data = self::filtraRespostas($user);

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


  public static function processCode($request) //essa funcão deve receber o código e e quem resgatou ele
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

      $code = $token->code;

      $resposta = EntityRespostas::getRespostaByCode($code); // busca a resposta

      if(!$resposta){
        echo json_encode(false);
        http_response_code(401);
        exit;
      }

      if ($resposta->resgatado == 1) { //verifica se o código já foi resgatado
        echo json_encode('Código já resgatado');
        http_response_code(401);
        exit;
      }

      $new = new EntityRespostas();

      $new->code = $code;
      $new->resgatado = 1;
      $new->updateResgateByCode();

      $pontuacao = $resposta->pontuacao; //pega a pontuação associada a resposta

      $usuario = new EntityUser(); //cria um objeto de usuário

      $usuario->email = $user->email;
      $usuario->pontos = $user->pontos + $pontuacao;
      $usuario->updateUserPontuacao();  //atualiza a pontuação
      
      return true;

    } catch (Throwable $e) {
      if($e->getMessage() === 'Expired token'){
        http_response_code(401);
        die('EXPIRED');
      }
    }
  }

  public static function setResposta($request)
	{

		$token = $request['request']->getBody();
    
  	if (!$token) {
  		echo json_encode(false);
    	http_response_code(401);
    	exit;
  	}

  	$token = json_decode($token);

	  $quest = EntityQuests::getQuestByLink($token->link); //busca o questionario


	  $resposta = new EntityRespostas();
    $resposta->data_resposta   = $token->data_resposta;
    $resposta->hora_resposta   = $token->hora_resposta;
    $resposta->pontuacao       = $quest->pontuacao;
    $resposta->pesquisa        = $quest->id_pesquisa;
	  $resposta->questionario    = $quest->id_questionario;
    $resposta->usuario         = null;
    $resposta->code            = $token->code;
    $resposta->resgatado       = 0;

	  $resposta->registerResposta();

		return true;
	}

	public function filtraRespostas($user)
	{
		if(!$user){ // verifica o usuário
    	echo json_encode(false);
    	http_response_code(401);
    	exit;
    }

    $allResponses = EntityRespostas::getRespostas(null,null,null);
    $respostas = [];

    foreach ($allResponses as $key => $value) { // filtra os interesses e pega somente os temas do usuário 
      if($allResponses[$key]->usuario == $user->id_usuario){
       $respostas[] = $value->id_resposta;
      }
    }

    foreach ($respostas as $key => $value) {
    	$respostas[$key] = EntityRespostas::getResposta($value);
    }
    
    $data = [
      'respostas' => $respostas
    ];

    return $data;
	}


  public static function removeRespostas($user)
  {
      // fazer uma lista com o id dos interesses;

    $allResponses = EntityRespostas::getRespostas(null,null,null);
    $respostas = [];

    foreach ($allResponses as $key => $value) { // filtra os interesses e pega somente os temas do usuário 
      if($allResponses[$key]->usuario == $user->id_usuario){
       $respostas[] = $value->id_resposta;
      }
    }

    foreach ($respostas as $key => $value) {
      $obRespostas = new EntityRespostas();
      $obRespostas->id_resposta = $value;
      $obRespostas->deleteResposta();
    }

    return true;
  }
}