<?php 

require 'bootstrap.php';

try {
    $data = router();
    if(!isset($data['data'])){
        throw new Exeption('O índice data está faltando');
    }

    if(!isset($data['data']['title'])){
        throw new Exeption('O Títle está faltando');
    }

    if(!isset($data['view'])){
        throw new Exeption('O índice view está faltando');
    }
    if(!file_exists(VIEWS.$data['view'])){
        throw new Exception("Essa view {$data['view']} não existe ");
        
    }

    extract($data['data']);

    $view = $data['view'];

    require VIEWS.'master.php';
}catch(Exeption $e){

    var_dump($e->getMessage());

}