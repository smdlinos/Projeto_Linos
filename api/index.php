<?php 

#Quests - Projeto I - Universidade Federal do Ceará - Sistemas e Mídias Digitais - @Linos

//Configs 

require __DIR__.'/vendor/autoload.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");

use Dotenv\Dotenv;
use  \App\HTTP\Router;
use \App\Db\Database;
use \App\HTTP\Middleware\Queue;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

Database::config(
	$_ENV['DB_HOST'],
	$_ENV['DB_NAME'],
	$_ENV['DB_USER'],
	$_ENV['DB_PASS'],
	$_ENV['DB_PORT']
);

define('URL', $_ENV['URL']);

// Database::config(
// 	DB_HOST,
// 	DB_NAME,
// 	DB_USER,
// 	DB_PASS,
// 	DB_PORT
// );

Queue::setMap([
	'maintenance' => \App\HTTP\Middleware\Maintenance::class,
]);

Queue::setDefault([
	'maintenance'
]);

$obRouter = new Router(URL);

include __DIR__.'/routes/api.php';

$obRouter->run()->sendResponse();

// echo "<pre>";
// print_r($teste);
// echo "</pre>"; exit;
