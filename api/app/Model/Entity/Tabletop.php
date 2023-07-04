<?php

namespace App\Model\Entity;

use App\Db\Database;

use \PDO;

/**
 * 
 */
class Tabletop
{	

	public $id_tabletop;

	public $id_usuario;

	public $posicao;

	public $ch;

	public function updateTabletop()
	{
		return (new Database('tabletop'))->update('id_tabletop = '.$this->$id_tabletop,[
			'posicao' => $this->posicao,
			'ch' => $this->ch
		]);
	}

	public function updateCh()
	{
		return (new Database('tabletop'))->update('id_tabletop = '.$this->$id_tabletop,[
			'ch' => $this->ch
		]);
	}

	public function updatePosicao()
	{
		return (new Database('tabletop'))->update('id_tabletop = '.$this->$id_tabletop,[
			'posicao' => $this->posicao
		]);
	}

	public function createTabletop()
	{	
		$obDatabase = new Database('tabletop');

		$this->id_tabletop = $obDatabase->create([
			'id_usuario' 	  => $this->id_usuario,
			'posicao' 	  => $this->posicao,
			'ch' 		  => $this->ch
		]);
		
		return true;
	}

	public static function getTabletops($where = null, $order = null, $limit = null)
	{
		return (new Database('tabletop'))->select($where,$order, $limit)
										   ->fetchAll(PDO::FETCH_CLASS, self::class);
	}

	public static function getTabletop($id)
	{
		return (new Database('tabletop'))->select('id_tabletop = '.$id)
										   ->fetchObject(self::class);
	}

	public static function getTabletopByUser($user)
	{
		return (new Database('tabletop'))->select('id_usuario = '.$user)
										   ->fetchObject(self::class);
	}

	public function deleteTabletop()
	{
		return (new Database('tabletop'))->delete('id_tabletop = '.$this->id_tabletop);
	}

} 