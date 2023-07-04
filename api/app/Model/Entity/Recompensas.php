<?php

namespace App\Model\Entity;

use App\Db\Database;

use \PDO;

/**
 * 
 */
class Recompensas
{	

	public $id_recompensa;

	public $recompensa;


	public static function getRecompensa($id)
	{
		return (new Database('recompensas'))->select('id_recompensa = '.$id)->fetchObject(self::class);
  	}

  	public static function getRecompensas($where = null, $order = null, $limit = null)
	{
		return (new Database('recompensas'))->select($where, $order, $limit)->fetchAll(PDO::FETCH_CLASS, self::class);
	}
} 