<?php

namespace App\Model\Entity;

use App\Db\Database;

use \PDO;
/**
 * 
 */
class Quests
{

	public $id_questionario;

	public $titulo;

	public $autor;

	public $instituicao;

	public $data_inicio;

	public $data_final;

	public $descricao;

	public $link;

	public $pontuacao;

	public $id_pesquisa;



	public function updateQuest()
	{
		return (new Database('questionarios'))->update('id_questionario= '.$this->$id_questionario,[
			'titulo' 	  	  => $this->titulo,
			'autor' 		  => $this->autor,
			'instituicao'     => $this->instituicao,
			'data_inicio' 	  => $this->data_inicio,
			'data_final'   	  => $this->data_final,
			'descricao' 	  => $this->descricao,
			'link'	 		  => $this->link,
			'pontuacao'   	  => $this->pontuacao,
			'id_pesquisa'  	  => $this->id_pesquisa
		]);
	}


	public function registerQuest()
	{

		$obDatabase = new Database('questionarios');

		$this->id_questionario = $obDatabase->insert([
			'titulo' 	  	  => $this->titulo,
			'autor' 		  => $this->autor,
			'instituicao'     => $this->instituicao,
			'data_inicio' 	  => $this->data_inicio,
			'data_final'   	  => $this->data_final,
			'descricao' 	  => $this->descricao,
			'link'	 		  => $this->link,
			'pontuacao'   	  => $this->pontuacao,
			'id_pesquisa'  	  => $this->id_pesquisa
		]);

		return true;
	}

	public static function getQuestByName($name)
	{
		return (new Database('questionarios'))->select('name = "'.$name.'"')->fetchObject(self::class);
	}

	public static function getQuestByLink($link)
	{
		return (new Database('questionarios'))->select('link = "'.$link.'"')->fetchObject(self::class);
	}

	public static function getQuests($where = null, $order = null, $limit = null)
	{
		return (new Database('questionarios'))->select($where,$order, $limit)->fetchAll(PDO::FETCH_CLASS, self::class);
	}

	public static function getQuest($id)
	{
		return (new Database('questionarios'))->select('id_questionario = '.$id, null, null)->fetchObject(self::class);
	}

	public function deleteQuest($value='')
	{
		return (new Database('questionarios'))->delete('id_questionario= '.$this->id_questionario);
	}

} 