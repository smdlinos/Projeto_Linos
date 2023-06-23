<?php

namespace App\Model\Entity;

use App\Db\Database;

use \PDO;
/**
 * 
 */
class User
{	

	public $id_usuario;

	public $name;

	public $nickname;

	public $email;

	public $password;

	public $data_nascimento;

	public $genero;

	public $escolaridade;

	public $pontos;

	public $posicao;



	public function updateUser()
	{
		return (new Database('usuarios'))->update('id_usuario= '.$this->$id_usuario,[
			'name' 	  		  => $this->name,
			'nickname' 		  => $this->nickname,
			'email'   		  => $this->email,
			'password' 		  => $this->password,
			'data_nascimento' => $this->data_nascimento,
			'genero'   		  => $this->genero,
			'escolaridade'	  => $this->escolaridade,
			'pontos'   		  => $this->pontos,
			'posicao'  		  => $this->posicao
		]);
	}


	public function registerUser()
	{
		$obDatabase = new Database('usuarios');

		$this->id_usuario = $obDatabase->insert([
			'name' 	  		  => $this->name,
			'nickname' 		  => $this->nickname,
			'email'   		  => $this->email,
			'password' 		  => $this->password,
			'data_nascimento' => $this->data_nascimento,
			'genero'   		  => $this->genero,
			'escolaridade'	  => $this->escolaridade,
			'pontos'   		  => $this->pontos,
			'posicao'  		  => $this->posicao
		]);

		return true;
	}


	public static function getUserByEmail($email)
	{
		return (new Database('usuarios'))->select('email = "'.$email.'"')->fetchObject(self::class);
	}

	public static function getUserByName($name)
	{	
		return (new Database('usuarios'))->select('nickname = "'.$name.'"')->fetchObject(self::class);
	}

	public static function getUsers($where = null, $order = null, $limit = null)
	{
		return (new Database('usuarios'))->select($where,$order, $limit)
										->fetchAll(PDO::FETCH_CLASS, self::class);
	}

	public static function getUser($id)
	{
		return (new Database('usuarios'))->select('id_usuario = '.$id)
										->fetchObject(self::class);
	}

	public function deleteUser($value='')
	{
		return (new Database('usuarios'))->delete('id_usuario = '.$this->id);
	}


} 