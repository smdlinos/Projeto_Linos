<?php 
function getData()
{   
    $_SESSION[CHANGE] = true;
    $validate = validate([
      'email' => 'email|unique:usuarios'
    ]);
    if(!$validate){
      return setMessageAndRedirect('message', 'Usuário não encontrado', 'login');
    }

    $codigo = substr(uniqid(rand()), 0, 6);
    $data = [
      'quem' => $validate['email'],
      'mensagem' => $codigo
    ]; 
    $_SESSION[CHANGE] = $data;
    return $_SESSION[CHANGE];
}