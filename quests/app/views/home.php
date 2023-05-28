<h2>Usuários<h2>

<ul>
    <?php foreach ($users as $user):?>
        <li><?php echo $user->name ?> 
    <!-- | <a href="/quests/user/<?php echo $user->id_usuario;?>">Ver detalhes</a></li> -->
    <?php endforeach;?>
</ul>