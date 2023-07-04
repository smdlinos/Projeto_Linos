<?php

namespace App\Controller\Api;

use App\Model\Entity\Recompensas as EntityRecompensas;

/**
 * 
 */
class Recompensas
{
	
	public static function getRecompensas($request)
	{
		Api::setHeaders();
		$allRecompensas = EntityRecompensas::getRecompensas(null, null, null);

		if (!$allRecompensas) {
			echo json_encode(false);
           	http_response_code(404);
           	exit;
		}

		return $allRecompensas;
	}

	public static function getRecompensa($request, $id)
	{
		$recompensa = EntityRecompensas::getRecompensa($id);

		if (!$recompensa) {
			echo json_encode(false);
           	http_response_code(404);
           	exit;
		}

		return $recompensa;
	}

}