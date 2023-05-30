<h2>Login</h2>
<br>
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