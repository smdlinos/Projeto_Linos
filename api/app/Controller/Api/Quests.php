<?php

namespace App\Controller\Api;

use App\Model\Entity\Quests as EntityQuests;
use App\Model\Entity\Temas as EntityTemas;
use App\Model\Entity\Interesses as EntityInteresses;
use App\Model\Entity\TemasQuests as EntityTemasQuests;
use App\Model\Entity\User as EntityUser;
use App\Controller\Api\User;
use App\Controller\Api\TemasQuests;
use App\Controller\Api\Temas;
/**
 * 
 */
class Quests
{
	
	public static function getQuests($request)
	{
		$allQuests = EntityQuests::getQuests(null, null, null);

		if (!$allQuests) {
			echo json_encode(false);
           	http_response_code(404);
           	exit;
		}

		return $allQuests;
	}

	public static function getQuest($request, $id)
	{
		$quest = EntityQuests::getQuest($id);

		$quest->temas = TemasQuests::filtraTags($quest);

		//$quest->tags = TemasQuests::getTags($request, $quest->id_questionario);
		if (!$quest) {
			echo json_encode(false);
     	http_response_code(404);
     	exit;
		}

		return $quest;
	}

	public static function getRecomendedQuests($request)
	{
		$allQuests = EntityQuests::getQuests(null, null, null);

		$data = User::getUser($request);

		$user = $data['user'];

		$interesses = $data['interesses'];

		$temas = [];

		foreach ($interesses as $key => $value) {
			//$temas[] = Temas::getTema($request, $value->id_tema);
			$temas[] = $value->id_tema;
		}	

		$temas_questionario = EntityTemasQuests::getTags(null,null,null);

		foreach ($temas_questionario as $key => $value) { // filtra os questionários com o tema que o usuário tem interesse

          foreach ($temas as $tema) {
            if($value->id_tema == $tema){
              $questionarios[] = [
                'id_questionario' => $value->id_questionario,
                'id_tema' => $value->id_tema
              ];
            }
          }
        }

        foreach ($allQuests as $key => $value) { 
          foreach ($questionarios as $l => $quest) {
            if($value->id_questionario == $quest['id_questionario']){
              	$value->temas = TemasQuests::getTags($request, $value->id_questionario);
              	$recomendacao[$key] = $value;
            }
          }
        }

        foreach ($recomendacao as $key => $value) {
          $recomendado[]= $value;
        }

        $data = [
           'recomendacoes' => $recomendado,
           'allquests' 		 => $allQuests,
           'quests' 			 => $questionarios
        ];

        return $data;
	}

	public static function setQuests($request) 
	{
		// code... Em breve
	}

}