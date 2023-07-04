<?php

namespace App\Model\Entity;

use App\Db\Database;

use \PDO;

/**
 * 
 */
class UsersAwards
{	

	public $id_usuario_recompensa;

	public $id_usuario;

	public $id_recompensa;

	public function updateAward()
	{
		return (new Database('usuario_recompensa'))->update('id_usuario_recompensa = '.$this->$id_usuario_recompensa,[
			'id_usuario' 	=> $this->id_usuario,
			'id_recompensa' => $this->id_recompensa
		]);
	}


	public function registerAward()
	{
		$obDatabase = new Database('usuario_recompensa');

		$this->id_usuario_recompensa = $obDatabase->create([
			'id_usuario' 	=> $this->id_usuario,
			'id_recompensa' => $this->id_recompensa
		]);

		return true;
	}

	public static function getAwards($where = null, $order = null, $limit = null)
	{
		return (new Database('usuario_recompensa'))->select($where,$order, $limit)
										   ->fetchAll(PDO::FETCH_CLASS, self::class);
	}

	public static function getAward($id)
	{
		return (new Database('usuario_recompensa'))->select('id_usuario_recompensa = '.$id)
										   ->fetchObject(self::class);
	}

	public function deleteAward()
	{
		return (new Database('usuario_recompensa'))->delete('id_usuario_recompensa = '.$this->id_usuario_recompensa);
	}

} 