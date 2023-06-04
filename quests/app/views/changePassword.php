<h2>Redefinir Senha</h2>
	<?php echo getFlash('message');?>
	<form action="/quests/changePassword" method="post" >
	    <label for="email">Email</label><br>
		<input type="text" name="email" placeholder="Digite seu email">
		<br>
		<input type="submit"  value="Enviar">
	</form>
<br>


