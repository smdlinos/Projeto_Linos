<?php  # |  \


function getRequest()
{
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Content-Type: application/json; charset=UTF-8");
    // header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE");
    
    if($_SERVER['REQUEST_METHOD'] == "OPTIONS"){
        response(200,true, '');
    }
    
    $body = file_get_contents('php://input');
}


