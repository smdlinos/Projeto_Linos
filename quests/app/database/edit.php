<?php

function updatePassword($data)
{
	try{

		$password = $data['password'];
		$email = $data['email'];
		$connect = connect();

		$sql = "update usuarios set password = {$password} where email = {$email}";

		$prepare = $connect->prepare($sql);	
		

		return $prepare->execute($data);
		} catch(PDOException $e){
			var_dump($e->getMessage());
		}
}


