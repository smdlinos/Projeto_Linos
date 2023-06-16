<?php

function arrayIsAssociative(array $arr){
	return array_keys($arr) !== range(0, count($arr)-1);
}

function isAjax()
{
}

function response($code, $confirm, $mensage)
{ // fica dentro das helpers
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");
    header("Content-Type: application/json");

    http_response_code($code);
    echo json_encode([
        "ok" => $confirm,
        "mensage" => $mensage
    ]);
}

function setInteresses($interesses, $user)
{
    // array interesses
    // id  user

    
    $allThemes = all('temas'); //array
    
	foreach ($allThemes as $key => $value) {

		for($i = 0 ; $i< sizeof($interesses) ; $i++){

			if($allThemes[$key]->tema == $interesses[$i]){

				$interesse = [
					'id_usuario' => $user,
					'id_tema' => $allThemes[$key]->id_tema
				];
				create('interesses', $interesse);
			}
		}
					
	}
}




