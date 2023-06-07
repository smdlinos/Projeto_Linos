<?php

function user()
{
    if(isset($_SESSION[LOGGED])){
        return $_SESSION[LOGGED];
    }
}

function logged(){
    return isset( $_SESSION[LOGGED]);
}


function chage(){
    if(isset($_SESSION[CHANGE])){
        return $_SESSION[CHANGE];
    }
}