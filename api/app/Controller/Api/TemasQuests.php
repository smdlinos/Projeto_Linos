<?php

namespace App\Controller\Api;

use  App\Controller\Api\Quests;

use App\Model\Entity\TemasQuests as EntityTemasQuests;
use App\Model\Entity\Temas;
use App\Model\Entity\Quests as EntityQuests;
use App\Model\Entity\User as EntityUser;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;


/**
 * 
 */
class TemasQuests
{
	
	public static function getTags($request, $id_quest)
	{
		Api::setHeaders();

		try {
      $quest = Quests::getQuest($request, $id_quest); // busca o questionário

      if (!$quest) {
      	echo json_encode(false);
	    	http_response_code(401);
	    	exit;
      }

      $data = self::filtraTags($quest);

      return $data; 
      
  	} catch (Throwable $e) {

      if($e->getMessage() === 'Expired token'){
        http_response_code(401);
        die('EXPIRED');
      }

		}

  }

  public static function setTags($quest, $tags)
	{
	    // array ags
	    // id questionario

	  $allThemes = Temas::getTemas(null, null, null); //array
		foreach ($allThemes as $key => $value) {

			for($i = 0 ; $i< sizeof($tags) ; $i++){
				
				if($allThemes[$key]->tema == $tags[$i]){
					$obTags = new EntityTemasQuests();
					$obTags->id_questionario = $quest;
					$obTags->id_tema = $allThemes[$key]->id_tema;
					$obTags->registerTags();
				}
			}
		
		}

		return $obTags;
	}

	public static function filtraTags($quest)
	{
		if(!$quest){ // verifica o questionario
    	echo json_encode(false);
    	http_response_code(401);
    	exit;
        }

    $getTags = EntityTemasQuests::getTags(); // pesquisa todas as Tags
    $tags = [];
    
    foreach ($getTags as $key => $value) { // filtra os interesses e pega somente os temas do usuário 
      if($getTags[$key]->id_questionario == $quest->id_questionario){
       $tags[] = $value->id_tema;
      }
    }

    foreach ($tags as $key => $value) {
    	$tags[$key] = Temas::getTema($value);
    }
    
    return $tags;
	}

}