<?php

return [
	'POST' => [
		'/quests/login' => 'Login@store',
		'/quests/user/store' => 'User@store',
		'/quests/changePassword' => 'Login@sendEmail',
		'/quests/codeVerification' => 'Login@vefifyCode',
		'/quests/change' => 'Login@changePassword'
	],
	'GET' => [
		'/quests/home' => 'Home@index',
		'/quests/user/create' => 'User@create',
		'/quests/user/[0-9]+' => 'User@show',
		'/quests/login' => 'Login@index',
		'/quests/logout' => 'Login@destroy',
		'/quests/codeVerification' => 'Login@redirectVerify',
		'/quests/changePassword' => 'Login@change'
	#'/quests/user/[0-9]+/name/[a-z]+' => 'User@create'
	]

];
