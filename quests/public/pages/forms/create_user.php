<?php

require "../../../bootstrap.php";


if(isEmpty()){
	flash('message', 'Preencha todos os campos');
	return redirect('create_user');
}

$validate = validate([
	'name' => 's',
	'sobrenome' => 's',
	'email' => 'e',
	'password' => 's'
]);


$cadastrado = create('users', $validate);

if($cadastrado){
	flash('message', 'Usuário cadastrado com sucesso', 'success');

	return redirect("home");
} 

flash('message', 'Erro ao cadastrar');
redirect('create_user');	
