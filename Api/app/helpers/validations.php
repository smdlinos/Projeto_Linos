<?php 
function required($field, $content)
{	
	// foreach ($content as $key => $value) {
	// 	if($key == $field){
	// 		$_POST[$field] = $value; 
	// 	}
	// }


	if( $_POST[$field] === ''){
		setFlash($field, 'O campo é obrigatório');
		return false;
	}

	return filter_var($_POST[$field], FILTER_SANITIZE_STRING);
}


function email($field, $content)
{	

	$emailIsValide = filter_var($_POST[$field], FILTER_VALIDATE_EMAIL);

	if(!$emailIsValide){
		setFlash($field, 'O campo tem que ser um email válido');
		return false;
	}
	return filter_var($_POST[$field], FILTER_SANITIZE_STRING);
}

function unique($field, $content, $param)
{	

	$data = filter_var($_POST[$field], FILTER_SANITIZE_STRING);
	$user =  findBy($param, $field, $data);

	if($user){
		if (isset($_SESSION[CHANGE])){
		return $data;
		} else {
		setFlash($field,"Esse valor já existe");
		return false;
		}
	}
	return $data;
}

function maxlen($field, $content, $param)
{
	$data = filter_var($_POST[$field], FILTER_SANITIZE_STRING);
	if(strlen($data) > $param){
		setFlash($field,"Esse campo não pode passar {$param} caracteres.");
		return false;
	}
	return $data;
}
