<?php

namespace App\Model\Entity;

use App\Db\Database;

use \PDO;
/**
 * 
 */
class Example
{	

	public $id;

	public $atribute1;

	public $atribute2;

	public $atribute3;

	public $data;



	public function updateExemple()
	{
		return (new Database('example'))->update('id= '.$this->$id, [
					'atribute1' => $this->atribute1,
					'atribute2' => $this->atribute2,
					'atribute3' => $this->atribute3,
					'data'  	=> $this->data
				]);
	}


	public function registerExemple()
	{
		$this->data = date('Y-m-d H:i:s');

		$obDatabase = new Database('example');

		$this->id = $obDatabase->insert([
					'atribute1' => $this->atribute1,
					'atribute2' => $this->atribute2,
					'atribute3' => $this->atribute3,
					'data'  	=> $this->data
				]);

		return true;
	}


	public static function getExamples($where = null, $order = null, $limit = null)
	{
		return (new Database('example'))->select($where,$order, $limit)
										->fetchAll(PDO::FETCH_CLASS, self::class);
	}


	public static function getExample($id)
	{
		return (new Database('example'))->select('id = '.$id)
										->fetchObject(self::class);
	}


	public function deleteExemple($value='')
	{
		return (new Database('example'))->delete('id= '.$this->id);
	}

} 