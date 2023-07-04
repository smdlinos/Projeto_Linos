<?php

namespace App\Model\Entity;

use App\Db\Database;

use \PDO;
/**
 * 
 */
class Pesquisas
{

	public $id_pesquisa;

	public $data_inicio;

	public $data_final;

	public $titulo;

	public $instituicao;

	public $id_usuario;



	public function updatePesquisa()
	{
		return (new Database('pesquisas'))->update('id_pesquisa= '.$this->$id_pesquisa,[
			'data_inicio' 	  => $this->data_inicio,
			'data_final'   	  => $this->data_final,
			'titulo' 	  	  => $this->titulo,
			'instituicao'     => $this->instituicao,
			'id_usuario' 	  => $this->id_usuario,
		]);
	}


	public function registerPesquisa()
	{

		$obDatabase = new Database('pesquisas');

		$this->id_pesquisa = $obDatabase->insert([
			'data_inicio' 	  => $this->data_inicio,
			'data_final'   	  => $this->data_final,
			'titulo' 	  	  => $this->titulo,
			'instituicao'     => $this->instituicao,
			'id_usuario' 	  => $this->id_usuario,
		]);

		return true;
	}

	public static function getPesquisaByTitulo($titulo)
	{
		return (new Database('pesquisas'))->select('titulo = "'.$titulo.'"')->fetchObject(self::class);
	}

	public static function getPesquisas($where = null, $order = null, $limit = null)
	{
		return (new Database('pesquisas'))->select($where,$order, $limit)->fetchAll(PDO::FETCH_CLASS, self::class);
	}

	public static function getPesquisa($id)
	{
		return (new Database('pesquisas'))->select('id_pesquisa = '.$id, null, null)->fetchObject(self::class);
	}

	public function deletePesquisa()
	{
		return (new Database('pesquisas'))->delete('id_pesquisa= '.$this->id_pesquisa);
	}

} 