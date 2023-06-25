<?php

namespace App\Controller\Api;
use Dotenv\Dotenv;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
/**
 * TRANSFORMAR O NICKNAME EM UNICO
 */
class Api
{

	public static function setHeaders(){
		$dotenv = Dotenv::createImmutable(dirname(__DIR__.'/../../../api'));
		$dotenv->load();
	    header("Access-Control-Allow-Origin: *");
	    header("Access-Control-Allow-Headers: *");
		header("Content-Type: application/json; charset=UTF-8");

	}


	public static function sendEmail(array $data)
	{
		self::setHeaders();

		$setedEmail = $_ENV['EMAIL']; // email que vai enviar os emails
		$password = $_ENV['PASSWORD']; // senha ou autenticação do respectivo email

		#Importante - a autenticação de duas etapas do email deve estar ativada e este
		#deve ter uma chave de aplicativo para utilizar como senha.

		$email = new PHPMailer(true);

		# ENVIO REAL DE EMAIL VIA GMAIL
		#--------------------------------------------------
		 // $email->SMTPDebug = SMTP::DEBUG_SERVER;
		  $email->isSMTP();
		  $email->Host = 'smtp.gmail.com';
		  $email->SMTPAuth = true;
		  $email->Username = $setedEmail; # email válido
		  $email->Password = $password; # senha válida
		  $email->SMTPSecure = 'ssl';
		  $email->Port = 465;
		#--------------------------------------------------

		# ENVIO FAKE DE EMAIL VIA MAILTRAP PARA TESTES
		#--------------------------------------------------
		  //$email->SMTPDebug = SMTP::DEBUG_SERVER;
		//   $email->isSMTP();
		//   $email->Host = 'sandbox.smtp.mailtrap.io';
		//   $email->SMTPAuth = true;
		//   $email->Username = 'b93fa6b79550b4'; # email válido
		//   $email->Password = 'f641c2ff8138e9'; # senha válida
		//   $email->SMTPSecure = 'plain';
		//   $email->Port = 2525;
		// #--------------------------------------------------


		  $email->setFrom('linosdesignsmd@gmail.com'); #email que manda
		  $email->addAddress($data['quem']); #email que recebe

		  $email->isHTML(true);
		  $email->CharSet = 'utf-8';
		  $email->FromName = 'Quests';
		  $email->Body = '
		  	<html lang="en">

				<head>
				  <meta charset="UTF-8">
				  <meta http-equiv="X-UA-Compatible" content="IE=edge">
				  <meta name="viewport" content="width=device-width, initial-scale=1.0">
				  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"
				    integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
				  <title>Recuperação de Senha</title>
				  <style>
				    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

				    body {
				      font-family: "Poppins";
				      color: #127CA6FF;
				    }

				    h1 {
				      margin-top: 40px;
				      font-family: "Poppins", Bold;
				    }
				    p {
				    }
				  </style>
				</head>

				<body>
				  <div align="center">
				  <img
				      src="https://lh3.google.com/u/0/d/1k5wo9UIOZAs5gGfn1CiTbyNl7o0yn7cs=w1366-h663-iv1"
				      alt="Logo Quests" width="100px" style="margin-top:20px;">
				    <h1>Recuperação de Senha</h1>
				    <p>Olá, '.$data['nome'].'</p>
				    <p>Recebemos uma solicitação para recuperação de senha em sua conta. Utilize o código abaixo para redefinir sua
				      senha:</p>
				    <p><strong>Código de Recuperação: </strong>'.$data['mensagem'].'</p>
				    <p>Insira o código acima na página de recuperação de senha para continuar o processo. Se você não solicitou a
				      recuperação de senha, por favor, ignore este e-mail.</p>
				    <p>Atenciosamente,</p>
				    <p>A equipe de suporte</p>
				    
				  <p style="font-size: 13px;">linosdesignsmd@gmail.com</p>
				  </div>
				</body>

				</html>';

	  $email->Subject = 'Redefinir Senha';
	  $email->AltBody = 'Código de Recuperação: '.$data['mensagem'];
	  //$email->MsgHTML($data['mensagem']);
	  return $email->send();
	}

}



