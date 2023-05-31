<?php if(!logged()): ?>
<h2>Login</h2>
<?php echo getFlash('message');?>
<form action="/quests/login" method="post" >

    <label for="email">Email</label><br>
	<input type="text" name="email" placeholder="Digite seu email">
	<br>
	<label for="password">Password</label><br>
	<input type="password" name="password" placeholder="Digite sua senha">
	<br>

	<input type="submit"  value="Login">
</form>
<a href="/quests/changePassword">Esqueceu a senha?</a>
<?php else: ?>
<h2>Usuário já está logado</h2>
<?php endif; ?>