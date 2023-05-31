<?php

function update( $table, array $fields, array $where)
{

	if(!arrayIsAssociative($fields) || !arrayIsAssociative($where) ){
		throw new Exception("O array tem que ser associativo");
		
	}
		$connect = connect();

		$sql = "update {$table} set ";
		foreach (array_keys($fields) as $field) {
			$sql .="$field = :{$field}, ";
		}
		$sql = trim($sql, ', ');

		$whereFields = array_keys($where);
		$sql.= " where {$whereFields[0]} = :{$whereFields[0]}";

		
		$data = array_merge($fields, $where);

		$prepare = $connect->prepare($sql);	

		foreach ($data as $field => $value) {
			$prepare->bindValue(":{$field}", $value);
		}

		$prepare->execute();

		return $prepare->rowCount();
}


