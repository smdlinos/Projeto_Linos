<?php

namespace App\Controller\Api;

use App\Model\Entity\Temas as EntityTemas;

/**
 * 
 */
class Temas
{
	
	public static function getTemas($request)
	{
		Api::setHeaders();
		$allTemas = EntityTemas::getTemas(null, null, null);

		if (!$allTemas) {
			echo json_encode(false);
           	http_response_code(404);
           	exit;
		}

		return $allTemas;
	}

	public static function getTema($request, $id)
	{
		$tema = EntityTemas::getTema($id);

		if (!$tema) {
			echo json_encode(false);
           	http_response_code(404);
           	exit;
		}

		return $tema;
	}

}