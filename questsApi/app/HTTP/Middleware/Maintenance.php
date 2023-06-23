<?php

namespace App\HTTP\Middleware;

/**
 * 
 */
class Maintenance
{
	
	public function handle($request, $next)
	{
		if($_ENV['MAINTENANCE'] == 'true'){
			throw new \Exception("Página em manutenção, tente novamente mais tarde", 200);
		}
		return	$next($request);
	}
}