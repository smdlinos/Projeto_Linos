<?php

function connect()
{
	return new \PDO("mysql:host=localhost:3308;dbname=quests;charset=utf8",'root', '',[
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES UTF8'
    ]);
}