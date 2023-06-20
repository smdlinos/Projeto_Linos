<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

function send(array $data)
{
  $email = new PHPMailer(true);

# ENVIO REAL DE EMAIL VIA GMAIL
#--------------------------------------------------
  // $email->SMTPDebug = SMTP::DEBUG_SERVER;
  // $email->isSMTP();
  // $email->Host = 'smtp.gmail.com';
  // $email->SMTPAuth = true;
  // $email->Username = 'linosdesignsmd@gmail.com'; # email válido
  // $email->Password = 'smdolaiuguywyylr'; # senha válida
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