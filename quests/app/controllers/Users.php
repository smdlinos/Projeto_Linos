<?php

namespace app\controllers;

class Users
{
	public function index()
	{   
    	$users = all('usuarios', 'id_usuario, email, nickname');
		var_dump($users);
        echo json_encode($users);

	}

	public function temas()
	{   
		getRequest();
        $temas = all('temas', 'id_tema, tema');
		echo json_encode($temas);
	}
	
}
