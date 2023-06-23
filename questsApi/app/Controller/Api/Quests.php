<?php

namespace App\Controller\Api;

use App\Model\Entity\Quest as EntityQuests;

/**
 * 
 */
class Quests
{
	
	public static function getQuests($request)
	{
		$allQuests = EntityQuests::getQuests(null, null, null);

		if (!$allQuests instanceof EntityQuests) {
			echo json_encode(false);
           	http_response_code(404);
           	exit;
		}

		return $allQuests;
	}

	public static function getQuest($request, $id)
	{
		$quest = EntityQuests::getQuest($id);

		if (!$quest instanceof EntityQuests) {
			echo json_encode(false);
           	http_response_code(404);
           	exit;
		}

		return $quest;
	}


}