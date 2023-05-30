<?php



function validate(array $validations)
{
	$result = [];
	$param = '';

	if (!function_exists('str_contains')) {
		function str_contains($haystack, $needle) {
			return $needle !== '' && mb_strpos($haystack, $needle) !== false;
		}
	}	

	foreach($validations as $field => $validate){
		$result[$field] = (!str_contains($validate, '|'))?
			singleValidation($validate, $field, $param):
			multipleValidations($validate, $field, $param);
	}

	if(in_array(false, $result)){
		return false;
	}

	return $result;
}

function singleValidation($validate, $field, $param)
{
	if(str_contains($validate, ':')){
		List($validate, $param) = explode(':', $validate);
	}
	return $validate($field, $param);
}


function multipleValidations($validate,$field, $param)
{
	$result = [];
	$explodePipeValidate = explode('|' , $validate);
	foreach ($explodePipeValidate as $validate) {
		if(str_contains($validate, ':')){
			List($validate, $param) = explode(':', $validate);
		}
		$result = $validate($field,$param);
	}
	return $result;
}

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
