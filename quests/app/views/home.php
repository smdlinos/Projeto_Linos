<h1>Quests<h1>

 <?php if(logged()):?>
<h2>Questionários recomendados para você <?php echo user()->name ?></h2> 
 <?php endif; ?>
<ul>
    <?php # foreach ($users as $user):?>
        <?php if(logged()):?>
        <li> Perfil | <a href="/quests/user/<?php echo user()->id_usuario;?>">Ver detalhes</a></li>
    <? # php endforeach;?>
    <?php else: ?>
    <li>Questionários que você talvez possa gostar</li>
    <?php endif; ?>
</ul>