<?php 
function required($field)
{
	if( $_POST[$field] === ''){
		setFlash($field, 'O campo é obrigatório');
		return false;
	}

	return filter_input(INPUT_POST, $field, FILTER_SANITIZE_STRING);
}


function email($field)
{	

	$emailIsValide = filter_input(INPUT_POST, $field, FILTER_VALIDATE_EMAIL);
	if(!$emailIsValide){
		setFlash($field, 'O campo tem que ser um email válido');
		return false;
	}
	return filter_input(INPUT_POST, $field, FILTER_SANITIZE_STRING);
}

function unique($field, $param)
{
	$data = filter_input(INPUT_POST, $field, FILTER_SANITIZE_STRING);
	$user =  findBy($param, $field, $data);

	if($user){
		if ($_SESSION[CHANGE]){
		return $data;
		} else {
		setFlash($field,"Esse valor já existe");
		return false;
		}
	}
	return $data;
}

function maxlen($field, $param)
{
	$data = filter_input(INPUT_POST, $field, FILTER_SANITIZE_STRING);
	if(strlen($data) > $param){
		setFlash($field,"Esse campo não pode passar {$param} caracteres.");
		return false;
	}
	return $data;
}
