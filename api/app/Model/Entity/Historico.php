<?php

namespace App\Model\Entity;

use App\Db\Database;

use \PDO;

/**
 * 
 */
class Historico
{	

	public $id_historico;

	public $id_usuario;

	public $id_questionario;

	public function updateHistorico()
	{
		return (new Database('historico'))->update('id_historico = '.$this->$id_historico,[
			'id_questionario' => $this->id_questionario
		]);
	}


	public function registerHistorico()
	{
		$obDatabase = new Database('historico');

		$this->id_historico = $obDatabase->create([
			'id_usuario' 	  	=> $this->id_usuario,
			'id_questionario' 	=> $this->id_questionario
		]);

		return true;
	}

	public static function getHistoricos($where = null, $order = null, $limit = null)
	{
		return (new Database('historico'))->select($where,$order, $limit)
										   ->fetchAll(PDO::FETCH_CLASS, self::class);
	}

	public static function getHistorico($id)
	{
		return (new Database('historico'))->select('id_historico = '.$id)
										   ->fetchObject(self::class);
	}

	public static function getHistoricoByQuest($id)
	{
		return (new Database('historico'))->select('id_questionario = '.$id)
										   ->fetchObject(self::class);
	}

	public static function getHistoricoByUser($id)
	{
		return (new Database('historico'))->select('id_usuario = '.$id)
										   ->fetchObject(self::class);
	}

	public function deleteHistorico()
	{
		return (new Database('historico'))->delete('id_historico = '.$this->id_historico);
	}

} 