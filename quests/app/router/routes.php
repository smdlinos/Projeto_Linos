<?php

return [
	'POST' => [
		'/quests/login' => 'Login@store',
		'/quests/user/store' => 'User@store'
	],
	'GET' => [
	'/quests/home' => 'Home@index',
	'/quests/user/create' => 'User@create',
	'/quests/user/[0-9]+' => 'User@show',
	'/quests/login' => 'Login@index',
	'/quests/logout' => 'Login@destroy'
	#'/quests/user/[0-9]+/name/[a-z]+' => 'User@create'
	]

];
