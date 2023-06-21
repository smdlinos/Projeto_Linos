<?php

namespace app\controllers;

class Users
{
	public function index()
	{   
		//getRequest();
    	// $users = all('usuarios', 'id_usuario, email, nickname');
		// var_dump($users);
        // echo json_encode($users);

			$quest = findBy('questionarios', 'id_questionario', 3);
			$get_temas = all('temas');
			$temas_quest = all('temas_questionario');

			foreach ($temas_quest as $key => $value) {
				if($value->id_questionario == 4){
			  	$temas[] = $value->id_tema;
				}
			}
			foreach ($temas as $key => $value){
				$value = findBy('temas', 'id_tema', $value);
				$temas[$key] = $value;
			}

			$quest->temas = $temas;

			if(!$quest){
				http_response_code(401);
			}

       		echo json_encode($quest);
			http_response_code(200);
		
	}

	public function temas()
	{   
		getRequest();
        $temas = all('temas', 'id_tema, tema');
		echo json_encode($temas);
	}
	
	public function quests()
	{   
		getRequest();
        $questionarios = all('questionarios');
		echo json_encode($questionarios);
		http_response_code(200);
	}
}
