<h2>Cadastro</h2>
<br>
<?=get('message')?>
<form action="/curso_php2/public/pages/forms/create_user.php" method="POST" >

	<div class="form-group">

		<label for="">Nome</label><br>
		<input type="text" name="name" placeholder="Digite seu nome">

	</div>
	<br>
	<div class="form-group">
		<label for="message">Sobrenome</label><br>
		<input type="text" name="sobrenome" placeholder="Digite sua sobrenome">
	</div>
	<br>	<div class="form-group">

		<label for="email">Email</label><br>
		<input type="text" name="email" placeholder="Digite seu email">

	</div>
	<br>
	<div class="form-group">

		<label for="password">Password</label><br>
		<input type="password" name="password" placeholder="Digite sua senha">

	</div>
	<br>
	<input type="submit" class="btn btn-primary" value="Submit">
</form>