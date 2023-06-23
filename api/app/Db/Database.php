<?php 

namespace App\Db;

use \PDO;
use \PDOException;
/**
 * 
 */
class Database
{
	private static $HOST;

	private static $PORT;

	private static $NAME;

	private static $USER;

	private static $PASS;

	private $table;

	private $connection;

	public function __construct($table = null)
	{
		$this->table = $table;
		$this->setConnection();
	}

	public static function config($dbHost,$dbName,$dbUser,$dbPass,$dbPort)
	{
		self::$HOST = $dbHost;
		self::$NAME = $dbName;
		self::$USER = $dbUser;
		self::$PASS = $dbPass;
		self::$PORT = $dbPort;
	}

	private function setConnection()
	{
		try {
			$this->connection = new PDO('mysql:host='.self::$HOST.';dbname='.self::$NAME.";port=".self::$PORT.";charset=utf8", self::$USER, self::$PASS, [
		        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
		        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
		        PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES UTF8'
    		]);
		} catch (PDOException $e) {
			die('ERROR: '.$e->getMessage());
		}
	}


	public function execute($query, $params = [])
	{
		try {

			$statement = $this->connection->prepare($query);
			$statement->execute($params);

			return $statement;
		} catch (PDOException $e) {
			die('ERROR: '.$e->getMessage());
		}
	}


	public function insert($values)
	{	
		$fields = array_keys($values);
		$binds = array_pad([], count($fields), ':');

		$sql = "insert into {$this->table} (";
		$sql .= implode(',', $fields).") values(";
		$sql .= ':'. implode(',:', $fields).")";



		$prepare = $this->connection->prepare($sql);

		foreach ($values as $field => $value) {
			$prepare->bindValue(":{$field}", $value);
		}
		// var_dump($sql, $prepare);
		// exit;
		$prepare->execute();

		return $this->connection->lastInsertId();
	}


	public function all($fields= '*')
	{
	    try {
	        $connect = $this->connection;

	        $query = $connect->query("select {$fields} from {$this->table}");

	        return $query->fetchAll();

	    } catch (PDOExeption $e) {

	        var_dump($e->getMessage());
	    }
	}


	public function findBy($field, $value, $fields = '*')
	{
	    try {
	       $connect = $this->connection;

	       $prepare = $connect->prepare("select ".$fields." from ".$this->table." where ".$field." = :".$field);

	       var_dump($prepare);
	       die();

	       $prepare->execute([
	        $field => $value
	       ]);

	       return $prepare->fetch();

	    } catch (PDOExeption $e) {
	        var_dump($e->getMessage());
	    }
	}


	public function create(array $data)
	{
		try{
			$connect = $this->connection;
	
			$sql = "insert into {$this->table} (";
			$sql .= implode(',', array_keys($data)).") values(";
			$sql .= ':'. implode(',:', array_keys($data)).")";
	
			$prepare = $connect->prepare($sql);	

			$prepare->execute($data);
			

			return $this->connection->lastInsertId();

			} catch(PDOException $e){
				var_dump($e->getMessage());
			}
	}


	public function select($where = null, $order = null, $limit = null, $fields = '*')
	{
		$where = strlen($where) ? 'WHERE '.$where : '';
		$order = strlen($order) ? 'ORDER BY '.$order : '';
		$limit = strlen($limit) ? 'LIMIT '.$limit : '';


		$query = 'SELECT '.$fields.' FROM '.$this->table.' '.$where.' '.$order.' '.$limit;

		return $this->execute($query);
	}


	public function update($where, $values)
	{

		$fields = array_keys($values);


		$query = 'UPDATE '.$this->table.' SET '.implode('=?,', $fields).'=? WHERE '.$where;


		$this->execute($query, array_values($values));

		return true;
	}


	public function delete($where)
	{
		$query = 'DELETE FROM '.$this->table.' WHERE '.$where;

		$this->execute($query);

		return true;
	}
}