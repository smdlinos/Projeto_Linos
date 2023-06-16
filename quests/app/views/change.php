<h2>Redefinir Senha</h2>
<?php echo getFlash('message');?>
<?php if(isset($_SESSION[CHANGE])): ?>
	<form action="/quests/change" method="post" >
    <label for="Código">Digite sua nova senha</label><br>
	<input type="password" name="password" placeholder='Digite sua senha'>
	<input type="password" name="password1" placeholder='Confirmar senha'>
	<br>
	<input type="submit"  value="Confirmar">
	<?php endif?>
</form>
