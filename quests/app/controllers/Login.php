<?php

namespace app\controllers;

class Login
{
	public function index($params)
	{
		return [
			'view' => 'login.php',
			'data' => ['title'=> 'Login']
		];
	}

  public function store()
  {
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_STRING);

    if(empty($email) || empty($password)){
      return setMessageAndRedirect('message', 'Usuário e/ou senha inválidos', 'login');
    }

    $user = findBy('usuarios', 'email', $email);
      
    if(!$user){
      return setMessageAndRedirect('message', 'Usuário e/ou senha inválidos', 'login');
    }

    if(!($password === $user->password)){
      return setMessageAndRedirect('message', 'Usuário e/ou senha inválidos', 'login');
    }

    $_SESSION[LOGGED] = $user;
    return redirect('home');
  }

  public function destroy()
  {
    unset($_SESSION[LOGGED]);
    return redirect('home');
  }

  public function change()
  {
   return [
      'view' => 'changePassword.php',
      'data' => ['title'=> 'Change']
    ];
  }

  public function sendEmail()
  {
    $data = getData();
    send($data);
    return setMessageAndRedirect('message', 'Verifique seu email', 'codeVerification');
  }

  public function redirectVerify()
  {
    return [
      'view' => 'codeVerification.php',
      'data' => ['title'=> 'Código de verificação']
    ];
  }

  public function vefifyCode()
  {
    $getKey = $_SESSION[CHANGE]['mensagem'];
    $validate = validate([
      'codigo' => 'required'
    ]);

    $code = $validate['codigo'];

    if($getKey != $code){
      return setMessageAndRedirect('message', 'Código incorreto', 'changePassword');
    }

    return setMessageAndRedirect('message', 'Usuário verificado', 'chageConfirmation');
  }

  public function redirectChange()
  {
    return [
      'view' => 'change.php',
      'data' => ['title'=> 'Change Password']
    ];
  }

  public function changePassword(){
    $validate = validate([
      'password' => 'required',
      'password1' => 'required'
    ]);
    $password = $validate['password'];
    $password1 = $validate['password1'];
   
    if($password !== $password1){
      return setMessageAndRedirect('message', 'Senhas Diferentes', 'chageConfirmation');
    }

    $email = [
      'email' => "{$_SESSION[CHANGE]['quem']}"
    ];
    $user = findBy('usuarios', 'email', $email['email']);

     if(!$user){
      return setMessageAndRedirect('message', 'Usuário inexistente', 'login');
    }

    $data = [
      'password' => "{$password}"
    ];

    $update = update('usuarios', $data, $email);


    if(!$update){
      return setMessageAndRedirect('message', 'Erro ao atualizar', 'change');
    }

    unset($_SESSION[CHANGE]);
    
    return setMessageAndRedirect('message', 'Atualizado com sucesso', 'login');
  }

}