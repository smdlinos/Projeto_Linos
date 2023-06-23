<?php 


//Configs 

require __DIR__.'/vendor/autoload.php';

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
