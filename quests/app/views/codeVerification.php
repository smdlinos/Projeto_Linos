<h2>Digite o Código</h2>
<?php echo getFlash('message');?>
<form action="/quests/codeVerification" method="post" >
    <label for="Código">Digite o código enviado para seu email</label><br>
	<input type="text" name="codigo" placeholder="0-0-0-0-0-0"><br>
	<input type="submit"  value="Confirmar">
</form>