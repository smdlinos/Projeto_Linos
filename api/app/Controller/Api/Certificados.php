<?php

namespace App\Controller\Api;

use App\Model\Entity\Certificados as EntityCertificados;
use App\Model\Entity\User as EntityUser;

/**
 * 
 */
class Certificados
{
	
	public static function getCertificados($user)//recebe o id do usuário
	{ 

		$certificados = EntityCertificados::getCertificados('id_usuario = '.$user);

		return $certificados;
	}

	public static function getSomaCh($user)//recebe o id do usuário
	{ 

		$certificados = self::getCertificados($user);

		$soma = 0;

		foreach ($certificados as $key => $value) {
			$soma = $soma + $value->ch_resgatada;	
		}

		return $soma;
	}

	public static function setCertificado($data)
	{	

		$certificado = new EntityCertificados();
		$certificado->id_usuario 	= $data['id_usuario'];
		$certificado->ch_resgatada = $data['ch_resgatada'];

		$certificado->createCertificado();

		if(!$certificado->id_certificado){
			echo json_encode(false);
			http_response_code(401);
			exit;
		}

		return $certificado;
	}

	public static function removeCertificados($user)
	{
	    // fazer uma lista com o id dos interesses;

	  $allCertificados = EntityCertificados::getCertificados('id_usuario = '.$user->id_usuario); //array
	  $certificados = [];

		foreach ($allCertificados as $key => $value) {
			$certificados[] = $allCertificados[$key]->id_certificado;
		}

		foreach ($certificados as $key => $value) {
			$obCertificado = new EntityCertificados();
			$obCertificado->id_certificado = $value;
			$obCertificado->deleteCertificado();
		}

		return true;
	}
	
}