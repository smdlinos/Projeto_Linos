<?php

namespace App\Model\Entity;

use App\Db\Database;

use \PDO;

/**
 * 
 */

class Certificados
{	

	public $id_certificado;

	public $id_usuario;

	public $ch_resgatada;

	public function updateCertificado()
	{
		return (new Database('certificados'))->update('id_certificado = '.$this->$id_certificado,[
			'id_usuario' 	=> $this->id_usuario,
			'ch_resgatada'	=> $this->ch_resgatada
		]);
	}

	public function createCertificado()
	{	
		$obDatabase = new Database('certificados');

		$this->id_certificado = $obDatabase->create([
			'id_usuario' 	=> $this->id_usuario,
			'ch_resgatada'  => $this->ch_resgatada
		]);
		
		return true;
	}

	public static function getCertificados($where = null, $order = null, $limit = null)
	{
		return (new Database('certificados'))->select($where,$order, $limit)
										   ->fetchAll(PDO::FETCH_CLASS, self::class);
	}

	public static function getCertificado($id)
	{
		return (new Database('certificados'))->select('id_certificado = '.$id)
										   ->fetchObject(self::class);
	}

	public function deleteCertificado()
	{
		return (new Database('tabletop'))->delete('id_certificado = '.$this->id_certificado);
	}

} 