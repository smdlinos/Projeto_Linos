<?php

namespace App\Model\Entity;

use App\Db\Database;

use \PDO;
/**
 * 
 */
class Respostas
{


	public $id_resposta;

	public $data_resposta;

	public $hora_resposta;

	public $pontuacao;

	public $pesquisa;

	public $questionario;

	public $usuario;

	public $code;

	public $resgatado;


	public function updateResposta()
	{
		return (new Database('respostas'))->update('id_resposta= '.$this->$id_resposta,[
			'data_resposta'   => $this->data_resposta,
			'hora_resposta'   => $this->hora_resposta,
			'pontuacao' 	  => $this->pontuacao,
			'pesquisa'	 	  => $this->pesquisa,
			'questionario'    => $this->questionario,
			'usuario'  	      => $this->usuario,
			'code'    		  => $this->code,
			'resgatado'  	  => $this->resgatado
		]);
	}


	public function registerResposta()
	{

		$obDatabase = new Database('respostas');

		$this->id_resposta = $obDatabase->insert([
			'data_resposta'   => $this->data_resposta,
			'hora_resposta'   => $this->hora_resposta,
			'pontuacao' 	  => $this->pontuacao,
			'pesquisa'	 	  => $this->pesquisa,
			'questionario'    => $this->questionario,
			'usuario'  	      => $this->usuario,
			'code'    		  => $this->code,
			'resgatado'  	  => $this->resgatado
		]);

		return true;
	}

	public function updateResgateByCode()
	{
		return (new Database('respostas'))->update('code= "'.$this->code.'"',[
			'resgatado'  	  => $this->resgatado
		]);
	}

	public static function getRespostaByQuest($quest)
	{
		return (new Database('respostas'))->select('questionario = "'.$quest.'"')->fetchObject(self::class);
	}

	public static function getRespostaByCode($code)
	{
		return (new Database('respostas'))->select('code = "'.$code.'"')->fetchObject(self::class);
	}

	public static function getRespostas($where = null, $order = null, $limit = null)
	{
		return (new Database('respostas'))->select($where,$order, $limit)->fetchAll(PDO::FETCH_CLASS, self::class);
	}

	public static function getResposta($id)
	{
		return (new Database('respostas'))->select('id_resposta = '.$id, null, null)->fetchObject(self::class);
	}

	public function deleteResposta()
	{
		return (new Database('respostas'))->delete('id_resposta= '.$this->id_resposta);
	}

} 