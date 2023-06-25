<?php

namespace App\Model\Entity;

use App\Db\Database;

use \PDO;

/**
 * 
 */
class TemasQuests
{	

	public $id_tema_quest;

	public $id_questionario;

	public $id_tema;

	public function updateTags()
	{
		return (new Database('temas_questionario'))->update('id_tema_quest = '.$this->$id_tema_quest,[
			'id_questionario' => $this->id_questionario,
			'id_tema' 		  => $this->id_tema
		]);
	}


	public function registerTags()
	{
		$obDatabase = new Database('temas_questionario');

		$this->id_tema_quest = $obDatabase->create([
			'id_questionario' => $this->id_questionario,
			'id_tema' 		  => $this->id_tema
		]);

		return true;
	}

	public static function getTags($where = null, $order = null, $limit = null)
	{
		return (new Database('temas_questionario'))->select($where,$order, $limit)
										   ->fetchAll(PDO::FETCH_CLASS, self::class);
	}

	public static function getTag($id)
	{
		return (new Database('temas_questionario'))->select('id_tema_quest = '.$id)
										   ->fetchObject(self::class);
	}

	public function deleteTags($id)
	{
		return (new Database('temas_questionario'))->delete('id_tema_quest = '.$this->id);
	}

} 