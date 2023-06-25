<?php

namespace App\Controller\Api;

use App\Model\Entity\Tabletop as EntityTabletop;

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

}