<?php

namespace App\Controller\Api;

use App\Model\Entity\Tabletop as EntityTabletop;

/**
 * 
 */
class Tabletop
{
	
	public static function getTabletop($request) // não finalizei ainda
	{	
		$allQuests = EntityTabletop::getTabletop();

		if (!$allQuests instanceof EntityQuests) {
			echo json_encode(false);
           	http_response_code(404);
           	exit;
		}

		return $allQuests;
	}

	public static function setTabletop($data)
	{	

		$tabletop = new EntityTabletop();
		$tabletop->id_usuario = $data['id_usuario'];
		$tabletop->posicao    = $data['posicao'];
		$tabletop->ch   	  = $data['ch'];

		$tabletop->registerTabletop()

		if(!$tabletop->id_tabletop){
			echo json_encode(false);
			http_response_code(401);
			exit;
		}

		echo json_encode(true);
		http_response_code(200);
		exit;
	}

}