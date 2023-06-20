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

        $content = filter_var($_POST['email'], FILTER_SANITIZE_STRING);
        $password =filter_var($_POST['password'], FILTER_SANITIZE_STRING);


        if(empty($content) || empty($password)){
           echo json_encode(false);
           http_response_code(401);
           die();
        }

        $user1 = findBy('usuarios', 'email', $content);
        $user2 = findBy('usuarios', 'nickname', $content);

        if(!$user1 && !$user2){
           echo json_encode(false);
           http_response_code(401);
           die();
        }


        if($user1){
          $user = $user1;
        } else {
          $user = $user2;
        }



        if(!(password_verify($password ,$user->password))){
           echo json_encode(false);
           http_response_code(401);
          die();
        }else {
          $payload = [
          "exp" => time()+ ((3600*24)*7),
          "iat" => time(),
          "email" => $user->email
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
    $dotenv = Dotenv\Dotenv::createImmutable('D:/XAMPP/htdocs/quests');
    $dotenv->load();
    
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Content-Type: application/json; charset=UTF-8");    
    
    if($_SERVER['REQUEST_METHOD'] == "GET"){
      $dotenv = Dotenv\Dotenv::createImmutable('D:/XAMPP/htdocs/quests');
      $dotenv->load();


      $headers = getallheaders();
      $authorization = $headers['Authorization'];
      //fazer verificação se o header existe para retornar usuário anônimo/visitante

      $token = str_replace('Bearer ', '', $authorization);


      try {
        $decoded = JWT::decode($token, new Key($_SERVER['KEY'], 'HS256'));

        $user = findBy('usuarios', 'email', $decoded->email); // busca o usuario

        if(!$user){ // verifica o usuário
        http_response_code(401);
        die();
        }

        $tabletop = findBy('tabletop', 'id_usuario', $user->id_usuario); // busca o tabuleiro

        $recomendacao = $this->recomendar($user); // gera recomendações

        $data = [
          'user' => $user,
          'token'=> $token,
          'tabletop' => $tabletop,
          'recomendacoes' => $recomendacao
        ];

        echo json_encode($data); 
        http_response_code(200);

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

        $token = str_replace("\"", '', $token);

        $decoded = JWT::decode($token, new Key($_SERVER['KEY'], 'HS256'));

        $code = $body['code'];

        $key = $decoded->code;

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

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Content-Type: application/json; charset=UTF-8");    

    if($_SERVER['REQUEST_METHOD'] == "POST"){

      $body = file_get_contents('php://input');

      try {
        $body  = json_decode($body, true);
        $email = filter_var($body['email'], FILTER_SANITIZE_STRING);
        $password = $body['password'];

        if(empty($password)){

           echo json_encode(false);
           http_response_code(401);
           die();

        }else {
          $password = password_hash($password, PASSWORD_DEFAULT);

          $user = findBy('usuarios', 'email', $email);

          if(!$user){
            echo json_encode(false);
            http_response_code(401);
            die();
          }

          $data = [
            'password' => $password
          ];

          $update = update('usuarios', $data, ['email' => $email]);

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

  private function recomendar($user)
  {
  
        $all_quests = all('questionarios'); // pesquisa todos os questionários disponíveis

        $getInteresses = all('interesses'); // pesquisa todos os interesses

        foreach ($getInteresses as $key => $value) { // filtra os interesses e pega somente os temas do usuário 
          if($getInteresses[$key]->id_usuario == $user->id_usuario){
           $interesses[$key] = $value;
           $temas[$key] = $value->id_tema;
          }
        }

        $temas_questionario = all('temas_questionario'); // pega a associação do questionário ao tema


        foreach ($temas_questionario as $key => $value) { // filtra os questionários com o tema que o usuário tem interesse

          foreach ($temas as $tema) {
            if($value->id_tema == $tema){
              $questionarios[] = [
                'id_questionário' => $value->id_questionario,
                'id_tema' => $value->id_tema
              ];
            }
          }
        }

    // pega o objeto do questionário e guarda a informação que deve ser exibida nos recomendados
        foreach ($all_quests as $key => $value) { 
          foreach ($questionarios as $l => $quest) {
            if($value->id_questionario == $quest['id_questionário']){
              $recomendacao[$key] = $value;
            }
          }
        }

        foreach ($recomendacao as $key => $value) {
          $recomendado[]= $value;
        }


        $data = [
          $user , $all_quests, $recomendado, $questionarios
        ];

        return $data;
  }
  
}