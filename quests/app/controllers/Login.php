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
    $getKey = $_SESSION[CHANGE]->mesagem;
    $validate = [
      'code' => 'required'
    ];

    $code = $validate['code'];

    if($getKey != $code){
      return setMessageAndRedirect('message', 'código incorreto', 'changePassword');
    }

    return [
      'view' => 'change.php',
      'data' => ['title'=> 'Change Password']
    ];
  }

  public function changePassword(){
    $validate = [
      'password' => 'required',
      'password1' => 'required'
    ];

    if($validate->password != $validate->password1){
      return setMessageAndRedirect('message', 'Senhas diferentes', 'change');
    }

    $email = $_SESSION[CHANGE]->email;
    $user = findBy('usuarios', 'email', $email);

     if(!$user){
      return setMessageAndRedirect('message', 'Usuário não inexistente', 'login');
    }

    $data = [
      'password' => "$validate->password",
      'email' => "$email"
    ];

    updatePassword($data);

    if(!updatePassword($data)){
      return setMessageAndRedirect('message', 'Erro ao atualizar', 'login');
    }
    

    return setMessageAndRedirect('message', 'Senha redefinida com sucesso', 'login');
  }

}