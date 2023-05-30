<?php

function updatePassword($data)
{
	try{
		$connect = connect();

		$sql = "update usuarios set password = {$data->password}";
		$sql .= "where email = {$data->email}";

		$prepare = $connect->prepare($sql);	
	
		return $prepare->execute($data);
		} catch(PDOException $e){
			var_dump($e->getMessage());
		}
}
