<?php

namespace App\Model\Entity;

use App\Db\Database;

use \PDO;

/**
 * 
 */
class Interesses
{	

	public $id_interesse;

	public $id_usuario;

	public $id_tema;

	public function updateInteresse()
	{
		return (new Database('interesses'))->update('id_interesse = '.$this->$id_interesse,[
			'id_tema' => $this->id_tema
		]);
	}


	public function registerInteresse()
	{
		$obDatabase = new Database('interesses');

		$this->id_interesse = $obDatabase->create([
			'id_usuario' 	  => $this->id_usuario,
			'id_tema' 	  	  => $this->id_tema
		]);

		return true;
	}

	public static function getInteresses($where = null, $order = null, $limit = null)
	{
		return (new Database('interesses'))->select($where,$order, $limit)
										   ->fetchAll(PDO::FETCH_CLASS, self::class);
	}

	public static function getInteresse($id)
	{
		return (new Database('interesses'))->select('id_interesse = '.$id)
										   ->fetchObject(self::class);
	}

	public function deleteInteresse()
	{
		return (new Database('interesses'))->delete('id_interesse = '.$this->id_interesse);
	}

} 