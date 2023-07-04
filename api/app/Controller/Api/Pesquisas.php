<?php

namespace App\Controller\Api;

use App\Model\Entity\Pesquisas as EntityPesquisas;
use App\Model\Entity\Quests;
use App\Model\Entity\User as EntityUser;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;


/**
 *  Em breve.........
 */


class Pesquisas
{
	
	public static function getPesquisas($request)
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

        $data = self::filtraPesquisas($user);

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

  public static function setPesquisa($request)
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

	  $pesquisa = new EntityPesquisas();

		$pesquisa->data_inicio	= $token->data_inicio;
		$pesquisa->data_final		=	$token->data_final;
		$pesquisa->titulo				=	$token->titulo;
		$pesquisa->instituicao	=	$token->instituicao;
	  $pesquisa->id_usuario 	= $user->id_usuario;

	  $pesquisa->registerPesquisa();

		return true;
	}

	public function filtraPesquisas($user)
	{
		if(!$user){ // verifica o usuário
    	echo json_encode(false);
    	http_response_code(401);
    	exit;
    }

    $allPesquisas = EntityPesquisas::getPesquisas(null,null,null);
    $pesquisas = [];

    foreach ($allPesquisas as $key => $value) { // filtra as pesquisas e pega somente os do usuário 
      if($allPesquisas[$key]->id_usuario == $user->id_usuario){
       $pesquisas[] = $value->id_pesquisa;
      }
    }

    foreach ($pesquisas as $key => $value) {
    	$pesquisas[$key] = EntityPesquisas::getPesquisa($value);
    }
    
    $data = [
      'pesquisas' => $pesquisas
    ];

    return $data;
	}

  public static function removePesquisas($user)
  {
      // fazer uma lista com o id dos interesses;

    $allPesquisas = EntityPesquisas::getPesquisas(null, null, null); //array
    $pesquisas = [];

    foreach ($allPesquisas as $key => $value) {
      if ($allPesquisas[$key]->id_usuario == $user->id_usuario) {
        $pesquisas[] = $allPesquisas[$key]->id_pesquisa;
      }
    }

    foreach ($pesquisas as $key => $value) {
      $obPesquisa = new EntityPesquisas();
      $obPesquisa->id_pesquisa = $value;
      $obPesquisa->deletePesquisa();
    }

    return true;
  }

}