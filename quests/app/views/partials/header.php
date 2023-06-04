

<ul id="menu_list">
    <li><a href="/quests/home">Home</a></li>
    <?php if (!logged()):?>
    <li><a href="/quests/login">Login</a></li>
    <li><a href="/quests/user/create">Create</a></li>
    <?php endif;?>
</ul>

<div id="status_login">
    Bem vindo,
    <?php if(logged()): ?>
        <?php echo user()->name; ?> | <a href="/quests/logout">Logout</a>
    <?php else: ?>
        visitante.
    <?php endif; ?>
</div>



