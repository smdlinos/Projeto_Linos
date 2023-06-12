<?php

namespace app\controllers;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Dotenv;

class Login
{

  public function store()
  {  // endpoint
    
    $dotenv = Dotenv\Dotenv::createImmutable('D:/XAMPP/htdocs/quests');
    $dotenv->load();

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Content-Type: application/json; charset=UTF-8");

    if($_SERVER['REQUEST_METHOD'] == "OPTIONS"){
       response(200, 'ok', '');
    }

    $body = file_get_contents('php://input');


    if($_SERVER['REQUEST_METHOD'] == "POST"){
      $body = file_get_contents('php://input');
      $body = json_decode($body, true);


      foreach ($body as $key => $value) {
        $_POST[$key] = $value;
      }

      
      if($body){

        $email = filter_var($_POST['email'], FILTER_SANITIZE_STRING);
        $password =filter_var($_POST['password'], FILTER_SANITIZE_STRING);


        if(empty($email) || empty($password)){
           echo json_encode(false);
           http_response_code(401);
           die();
        }

        $user = findBy('usuarios', 'email', $email);

        if(!$user){
           echo json_encode(false);
           http_response_code(401);
           die();
        }

        if(!(password_verify($password ,$user->password))){
           echo json_encode(false);
           http_response_code(401);
          die();
        }else {
          $payload = [
          "exp" => time()+10,
          "iat" => time(),
          "email" => $email
        ]; 

        $jwt = JWT::encode($payload, $_ENV['KEY'], 'HS256');

        echo json_encode($jwt);
        http_response_code(200);
        }

      } else {
        echo json_encode(false);
        http_response_code(401);
        die();
      }
      
    }

    if($_SERVER['REQUEST_METHOD'] == "GET"){
      echo json_encode("Uuu que legal, você tentou buscar algo e não achou.....");
      http_response_code(200);
    }


  }

  public function auth()
  {

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Content-Type: application/json; charset=UTF-8");    

    if($_SERVER['REQUEST_METHOD'] == "GET"){
      $dotenv = Dotenv\Dotenv::createImmutable('D:/XAMPP/htdocs/quests');
      $dotenv->load();

      $authorization = $_SERVER["HTTP_AUTHORIZATION"];

      $token = str_replace('Bearer ', '', $authorization);


      try {
        $decoded = JWT::decode($token, new Key($_SERVER['KEY'], 'HS256'));
        echo json_encode($decoded);

      } catch (Throwable $e) {

        if($e->getMessage() === 'Expired token'){
          http_response_code(401);
          die('EXPIRED');
        }

      }
    }
  }


  public function verifyUser()
  {
    $dotenv = Dotenv\Dotenv::createImmutable('D:/XAMPP/htdocs/quests');
    $dotenv->load();

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Content-Type: application/json; charset=UTF-8");

    if($_SERVER['REQUEST_METHOD'] == "OPTIONS"){
       response(200, 'ok', '');
    }

    $body = file_get_contents('php://input');

    if($_SERVER['REQUEST_METHOD'] == "POST"){
      $body = file_get_contents('php://input');
      $body = json_decode($body, true);

      $_POST['email'] = $body['email'];
      
      if($body){

        $email = filter_var($_POST['email'], FILTER_SANITIZE_STRING);

        if(empty($email)){
           echo json_encode(false);
           http_response_code(401);
           die();
        }

        $user = findBy('usuarios', 'email', $email);

        if(!$user){
           echo json_encode(false);
           http_response_code(401);
           die();
        } else {

          $codigo = substr(uniqid(rand()), 0, 6);
          $data = [
            'quem' => $email,
            'mensagem' => $codigo
          ];

          send($data);

          $payload = [
            "exp" => time()+300,
            "iat" => time(),
            "email" => $email,
            "code" => $codigo
          ];

          $jwt = JWT::encode($payload, $_ENV['KEY'], 'HS256');

          echo json_encode([true,$jwt]);
          http_response_code(200); 
          die();
        }

      } else {
        echo json_encode(false);
        http_response_code(401);
        die();
      }
      
    }

    if($_SERVER['REQUEST_METHOD'] == "GET"){
      $dotenv = Dotenv\Dotenv::createImmutable('D:/XAMPP/htdocs/quests');
      $dotenv->load();

      $authorization = $_SERVER["HTTP_AUTHORIZATION"];

      $token = str_replace('Bearer ', '', $authorization);


      try {
        $decoded = JWT::decode($token, new Key($_SERVER['KEY'], 'HS256'));
        echo json_encode($decoded);

      } catch (Throwable $e) {

        if($e->getMessage() === 'Expired token'){
          http_response_code(401);
          die('EXPIRED');
        }

      }
    }
  }

  public function vefifyCode(){

    $dotenv = Dotenv\Dotenv::createImmutable('D:/XAMPP/htdocs/quests');
    $dotenv->load();


    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Content-Type: application/json; charset=UTF-8");    

    if($_SERVER['REQUEST_METHOD'] == "POST"){


      $body = file_get_contents('php://input');

      try {
        $body = json_decode($body, true);
        $token = $body['token'];

        $decoded = JWT::decode($token, new Key($_SERVER['KEY'], 'HS256'));

        $code = $body['code'];

        $key = $decoded['code'];

        if(empty($code)){
           echo json_encode(false);
           http_response_code(401);
           die();
        }

        if($key != $code){
           echo json_encode(false);
           http_response_code(401);
           die();
        }else {

          echo json_encode(true);
          http_response_code(200); 
          die();
        }

      } catch (Throwable $e) {

        if($e->getMessage() === 'Expired token'){
          http_response_code(401);
          die('EXPIRED');
        }

      }
    }

    if($_SERVER['REQUEST_METHOD'] == "OPTIONS"){
       response(200, 'ok', '');
    }

  }

  public function changePassword(){


    $dotenv = Dotenv\Dotenv::createImmutable('D:/XAMPP/htdocs/quests');
    $dotenv->load();


    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Content-Type: application/json; charset=UTF-8");    

    if($_SERVER['REQUEST_METHOD'] == "POST"){

      $authorization = $_SERVER["HTTP_AUTHORIZATION"];
      $token = str_replace('Bearer ', '', $authorization);

      $body = file_get_contents('php://input');

      try {
        $decoded = JWT::decode($token, new Key($_SERVER['KEY'], 'HS256'));
        $body = json_decode($body, true);

        $email = $decoded['email'];

        $password1 = $body['password1'];
        $password2 = $body['password2'];


        if(empty($password1) || empty($password2)){
           echo json_encode(false);
           http_response_code(401);
           die();
        }

        if($password1 !== $password2){
           echo json_encode(false);
           http_response_code(401);
           die();
        }else {
          $password = password_hash($password1, PASSWORD_DEFAULT);

          $user = findBy('usuarios', 'email', $email);

          if(!$user){
            echo json_encode(false);
            http_response_code(401);
            die();
          }

          $data = [
            'password' => "{$password}"
          ];

          $update = update('usuarios', $data, $email);

          if(!$update){
            echo json_encode(false);
            http_response_code(401);
            die();
          } else {
            echo json_encode(true);
            http_response_code(200); 
            die();   
          }

         
        }

      } catch (Throwable $e) {

        if($e->getMessage() === 'Expired token'){
          http_response_code(401);
          die('EXPIRED');
        }

      }
    }

    if($_SERVER['REQUEST_METHOD'] == "OPTIONS"){
       response(200, 'ok', '');
    }
  }

}