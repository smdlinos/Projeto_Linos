<?php 

use App\Model\Entity\User;

function required($field, $content)
{	

	if( $_POST[$field] === ''){

		return false;
	}

	return filter_var($_POST[$field], FILTER_SANITIZE_STRING);
}


function email($field, $content)
{	

	$emailIsValide = filter_var($_POST[$field], FILTER_VALIDATE_EMAIL);

	if(!$emailIsValide){
		return false;
	}

	return filter_var($_POST[$field], FILTER_SANITIZE_STRING);
}

function unique($field, $content, $param)
{	
	$data = filter_var($_POST[$field], FILTER_SANITIZE_STRING);
	$user =  User::getUserByEmail($data);

	if($user instanceof User){
		return false;
	}
	
	return $data;
}

function maxlen($field, $content, $param)
{
	$data = filter_var($_POST[$field], FILTER_SANITIZE_STRING);
	if(strlen($data) > $param){
		return false;
	}
	return $data;
}
