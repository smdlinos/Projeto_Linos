<?php
function send(array $data)
{
  $email = new PHPMailer\PHPMailer\PHPMailer;
  $email->SMTPSecure = 'plain';
  $email->isSMTP();
  $email->Host = 'sandbox.smtp.mailtrap.io';
  $email->Port = 2525;
  $email->SMTPAuth = true;
  $email->Username = 'b93fa6b79550b4'; # email válido
  $email->Password = 'f641c2ff8138e9'; # senha válida

  $email->setFrom('linosdesignsmd@gmail.com'); #email que manda

  $email->addAddress($data['quem']); #email que recebe

  $email->isHTML(true);
  $email->CharSet = 'utf-8';
  $email->FromName = 'Quests';
  $email->Body = "Aqui está o seu código {$data['mensagem']} ";
  $email->Subject = 'Redefinir Senha';
  $email->AltBody = 'Para ver esse email tenha certeza de estar vendo em um programa que aceita ver HTML';
  $email->MsgHTML($data['mensagem']);
  return $email->send();
}