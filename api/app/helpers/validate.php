<?php



function validate(array $validations, $body)
{
	$result = [];
	$param = '';

	$content = $body;

	if (!function_exists('str_contains')) { // verifica o str contains
		function str_contains($haystack, $needle) {
			return $needle !== '' && mb_strpos($haystack, $needle) !== false;
		}
	}	

	foreach($validations as $field => $validate){
		$result[$field] = (!str_contains($validate, '|'))?
			singleValidation($validate, $field, $param, $content):
			multipleValidations($validate, $field, $param, $content);
	}

	return $result;
}

function singleValidation($validate, $field, $param, $content)
{

	if(str_contains($validate, ':')){
		List($validate, $param) = explode(':', $validate);
	}

	return $validate($field, $content, $param);
}


function multipleValidations($validate,$field, $param, $content)
{
	$result = [];
	$explodePipeValidate = explode('|' , $validate);
	foreach ($explodePipeValidate as $validate) {
		if(str_contains($validate, ':')){
			List($validate, $param) = explode(':', $validate);
		}

		$result[$field] = $validate($field,$content,$param);
		if (isset($result[$field]) and $result[$field] === false) {
			break;
		}
	}
	return $result[$field];
}

