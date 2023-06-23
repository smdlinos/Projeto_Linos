<?php

namespace App\Model\Entity;

use App\Db\Database;

use \PDO;

/**
 * 
 */
class Temas
{	

	public $id_tema;

	public $tema;


	public static function getTema($id)
	{
		return (new Database('temas'))->select('id_tema = '.$id)->fetchObject(self::class);
  	}

  	public static function getTemas($where = null, $order = null, $limit = null)
	{
		return (new Database('temas'))->select($where, $order, $limit)->fetchAll(PDO::FETCH_CLASS, self::class);
	}
} 