<?php

return [
	'OPTIONS' => [
		'quests/user/create/validate' => 'User@valida',
		'/quests/user/create' => 'User@create',
		'/quests/login' => 'Login@store',
		'/quests/login/auth' => 'Login@auth',
		'/quests/reset' => 'Login@verifyUser',
		'/quests/codeConfirmation' => 'Login@vefifyCode',
		'/quests/changePassword' => 'Login@changePassword'
	],
	'POST' => [
		'quests/user/create/validate' => 'User@valida',
		'/quests/login' => 'Login@store',
		'/quests/user/store' => 'User@store',
		'/quests/login/auth' => 'Login@auth',
		'/quests/change' => 'Login@changePassword',
		'/quests/user/create' => 'User@create',
		'/quests/reset' => 'Login@verifyUser',
		'/quests/codeConfirmation' => 'Login@vefifyCode',
		'/quests/changePassword' => 'Login@changePassword'
	],
	'GET' => [
		'quests/user/create/validate' => 'User@valida',
		'/quests/home' => 'Home@index',
		'/quests/user/create' => 'User@create',
		'/quests/users' => 'Users@index',
		'/quests/temas' => 'Users@temas',
		'/quests/user/[0-9]+' => 'User@show',
		'/quests/login' => 'Login@store',
		'/quests/login/auth' => 'Login@auth',
		'/quests/logout' => 'Login@destroy',
		'/quests/reset' => 'Login@verifyUser',
		'/quests/changePassword' => 'Login@changePassword',
		'/quests/codeConfirmation' => 'Login@vefifyCode'
	#'/quests/user/[0-9]+/name/[a-z]+' => 'User@create'
	]

];
