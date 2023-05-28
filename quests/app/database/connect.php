<?php

function connect()
{
	return new \PDO("mysql:host=localhost;dbname=quests;chatset=utf8",'root', 'batata2103',[
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ
    ]);
}