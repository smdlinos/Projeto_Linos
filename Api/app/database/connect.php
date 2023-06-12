<?php

function connect()
{
	return new \PDO("mysql:host=localhost;dbname=quests;charset=utf8",'root', 'batata2103',[
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES UTF8'
    ]);
}