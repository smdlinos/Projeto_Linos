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
		$dotenv = Dotenv::createImmutable(dirname(__FILE__, 4));
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
		  // $email->isSMTP();
		  // $email->Host = 'smtp.gmail.com';
		  // $email->SMTPAuth = true;
		  // $email->Username = $setedEmail; # email válido
		  // $email->Password = $password; # senha válida
		  // $email->SMTPSecure = 'ssl';
		  // $email->Port = 465;
		#--------------------------------------------------

		# ENVIO FAKE DE EMAIL VIA MAILTRAP PARA TESTES
		#--------------------------------------------------
		  $email->SMTPDebug = SMTP::DEBUG_SERVER;
		  $email->isSMTP();
		  $email->Host = 'sandbox.smtp.mailtrap.io';
		  $email->SMTPAuth = true;
		  $email->Username = 'b93fa6b79550b4'; # email válido
		  $email->Password = 'f641c2ff8138e9'; # senha válida
		  $email->SMTPSecure = 'plain';
		  $email->Port = 2525;
		#--------------------------------------------------


		  $email->setFrom('linosdesignsmd@gmail.com'); #email que manda
		  $email->addAddress($data['quem']); #email que recebe

		  $email->isHTML(true);
		  $email->CharSet = 'utf-8';
		  $email->FromName = 'Quests';
		  $email->Body = "<p>Aqui está o seu código: </p>{$data['mensagem']} ";
		  $email->Subject = 'Redefinir Senha';
		  $email->AltBody = 'Para ver esse email tenha certeza de estar vendo em um programa que aceita ver HTML';
		  $email->MsgHTML($data['mensagem']);
		  return $email->send();
	}

}