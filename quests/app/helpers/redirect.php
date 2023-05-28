<?php
function redirect($to){
    return header('location:/quests/'.$to);
}


function setMessageAndRedirect($index, $message, $redirectTo)
{
    setFlash($index, $message);
    return redirect($redirectTo);
}