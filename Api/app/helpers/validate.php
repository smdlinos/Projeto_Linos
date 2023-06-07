<?php



function validate(array $validations)
{
	$result = [];
	$param = '';

	if (!function_exists('str_contains')) {
		function str_contains($haystack, $needle) {
			return $needle !== '' && mb_strpos($haystack, $needle) !== false;
		}
	}	

	foreach($validations as $field => $validate){
		$result[$field] = (!str_contains($validate, '|'))?
			singleValidation($validate, $field, $param):
			multipleValidations($validate, $field, $param);
	}

	if(in_array(false, $result)){
		return false;
	}

	return $result;
}

function singleValidation($validate, $field, $param)
{
	if(str_contains($validate, ':')){
		List($validate, $param) = explode(':', $validate);
	}
	return $validate($field, $param);
}


function multipleValidations($validate,$field, $param)
{
	$result = [];
	$explodePipeValidate = explode('|' , $validate);
	foreach ($explodePipeValidate as $validate) {
		if(str_contains($validate, ':')){
			List($validate, $param) = explode(':', $validate);
		}

		$result[$field] = $validate($field,$param);
		if (isset($result[$field]) and $result[$field] === false) {
			break;
		}
	}
	return $result[$field];
}

