<?php

function all($tables, $fields= '*')
{
    try {
        $connect = connect();

        $query = $connect->query("select {$fields} from {$tables}");
        return $query->fetchAll();
    } catch (PDOExeption $e) {
        var_dump($e->getMessage());
    }
}


function findBy($table, $field, $value, $fields = '*'){
    try {
       $connect = connect();

       $prepare = $connect->prepare("select {$fields} from {$table} where {$field} = :{$field}");
       $prepare->execute([
        $field => $value
       ]);
       return $prepare->fetch();

    } catch (PDOExeption $e) {
        var_dump($e->getMessage());
    }
}