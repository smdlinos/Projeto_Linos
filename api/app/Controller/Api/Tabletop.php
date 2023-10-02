<?php

namespace App\Controller\Api;

use App\Model\Entity\Tabletop as EntityTabletop;
use App\Model\Entity\User as EntityUser;
use App\Controller\Api\Certificados;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

/**
 * 
 */
class Tabletop
{
	
	public static function getTabletop($request, $id)
	{	

		$tabletop = EntityTabletop::getTabletop($id);

		if (!$tabletop) {
			echo json_encode(false);
           	http_response_code(404);
           	exit;
		}

		return $tabletop;
	}

	public static function setTabletop($data)
	{	

		$tabletop = new EntityTabletop();
		$tabletop->id_usuario 	= $data['id_usuario'];
		$tabletop->posicao 		= $data['posicao'];
		$tabletop->ch      		= $data['ch'];

		$tabletop->createTabletop();

		if(!$tabletop->id_tabletop){
			echo json_encode(false);
			http_response_code(401);
			exit;
		}

		return $tabletop;
	}

	public static function resetCh($request)
	{	
		//Função responsável por atualizar a carga horária após
		//resgatar o certificado

		Api::setHeaders();

	    $post_body = $request['request']->getBody();
	    $post_body = json_decode($post_body, true);

	    if(!$post_body) {
	      echo json_encode(false);
	      http_response_code(401);
	      exit;
	    }

	    $decoded = JWT::decode($post_body['token'], new Key($_ENV['KEY'], 'HS256'));

	    $usuario = EntityUser::getUserByEmail($decoded->email); // busca o usuario

	    $tabletopU = EntityTabletop::getTabletops('id_usuario = '.$usuario->id_usuario); // busca o tabletop

	    $data = [
			'id_usuario'   => $usuario->id_usuario,
			'ch_resgatada' => $tabletopU[0]->ch
		];

		$posicao = intval($tabletopU[0]->posicao);
		$tabletop_ch = intval($tabletopU[0]->ch);

		if($tabletop_ch < 1){
		  echo json_encode('Você não tem horas suficientes para o resgate');
	      http_response_code(401);
	      exit;
		}
		
	    Certificados::setCertificado($data);

		$tabletop = new EntityTabletop(); //atualiza o tabuleiro
		$tabletop->id_tabletop 	= $tabletopU[0]->id_tabletop;
		$tabletop->id_usuario 	= $usuario->id_usuario;
		$tabletop->posicao 		= $posicao;
		$tabletop->ch      		= 0;
		$tabletop->updateCh();

		if(!$tabletop->id_tabletop){
			echo json_encode(false);
			http_response_code(401);
			exit;
		}


		return true;
	}

	public static function updateTabletop($request)
	{	
		//Função responsável por atualizar os dados do tabuleiro, diminuir os pontos
		//do usuário e contabilizar a carga horária disponível
		//Recebe uma requisição post do front end assim que o usuário compra a casa
		//Recebe o token e a nova posição

		Api::setHeaders();

	    $post_body = $request['request']->getBody();
	    $post_body = json_decode($post_body, true);

	    if(!$post_body) {
	      echo json_encode(false);
	      http_response_code(401);
	      exit;
	    }

	    //aplicar a verificação dos pontos futuramente -> ela está sendo feita no front end

	    $decoded = JWT::decode($post_body['token'], new Key($_ENV['KEY'], 'HS256'));

	    $usuario = EntityUser::getUserByEmail($decoded->email); // busca o usuario

	    $tabletopU = EntityTabletop::getTabletops('id_usuario = '.$usuario->id_usuario); // busca o tabletop

	    $ch_resgatada = Certificados::getSomaCh($usuario->id_usuario);

	    $posicao 		= $post_body['posicao']; //pega a nova posição que chegou do front
		$diferece		= $posicao - $tabletopU[0]->posicao ; // calcula a diferença entre a posição nova e a antiva
		$diminuiPontos	= $diferece * 10; //perguntar pra avie quantos pontos cada casa vale
	    $ch 	 		= ($posicao / 6) - $ch_resgatada;  // calcula a carga horária com base na posição do tabuleiro


	    $pontos = intval($usuario->pontos);

	    $user = new EntityUser(); //atualiza a pontuação do usuário
		$user->email 	= $usuario->email;
		$user->pontos 	= $pontos - $diminuiPontos;
		$user->updateUserPontuacao();

		$tabletop = new EntityTabletop(); //atualiza o tabuleiro
		$tabletop->id_tabletop 	= $tabletopU[0]->id_tabletop;
		$tabletop->id_usuario 	= $usuario->id_usuario;
		$tabletop->posicao 		= $posicao;
		$tabletop->ch      		= $ch;
		$tabletop->updateTabletop();

		if(!$tabletop->id_tabletop){
			echo json_encode(false);
			http_response_code(401);
			exit;
		}

		return true;
	}

	public static function removeTabletop($user)
	{
	    // fazer uma lista com o id dos interesses;

	  $allTabletops = EntityTabletop::getTabletops(null, null, null); //array
	  $tabletop = [];

		foreach ($allTabletops as $key => $value) {
			if ($allTabletops[$key]->id_usuario == $user->id_usuario) {
				$tabletop[] = $allTabletops[$key]->id_tabletop;
			}
		}

		foreach ($tabletop as $key => $value) {
			$obTabletop = new EntityTabletop();
			$obTabletop->id_tabletop = $value;
			$obTabletop->deleteTabletop();
		}

		return true;
	}
}