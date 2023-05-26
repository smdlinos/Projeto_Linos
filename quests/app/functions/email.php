<?php

// function send($data)
// {
// 	$to = 'victoremanuel.vet6@gmail.com';
// 	$subject = $data->subject;
// 	$message = $data->message;
// 	$headers = "From: {$data->email}" . "\r\n" .
// 	'Reply-To: linosdesignsmd@gmail.com' . "\r\n" .
// 	'X-Mailer: PHP/' . phpversion();

// 	return mail($to, $subject, $message, $headers);
// }


function send(array $data){
	$email = new PHPMailer\PHPMailer\PHPMailer;
	$email->Charset = 'UTF-8';
	$email->SMTPSecure = 'plain';
	$email->isSMTP();
	$email->Host = 'sandbox.smtp.mailtrap.io';
	$email->Port = 2525;
	$email->SMTPAuth = true;
	$email->Username = 'b93fa6b79550b4';
	$email->Password = 'f641c2ff8138e9';
	$email->isHTML(true);
	$email->setFrom('victoremanuel.vet6@gmail.com');
	$email->FromName = $data['quem'];
	$email->addAddress($data['para']);
	$email->Body = $data['menssagem'];
	$email->Subject = $data['assunto'];
	$email->AltBody = 'Para ver esse email tenha certeza de estar vendo em um programa que aceita ver HTML';
	$email->MsgHTML($data['mensagem']);
	return $email->send();
}