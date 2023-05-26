<h2>Contato</h2>

<?=get('message')?>
<form action="/curso_php2/public/pages/forms/contato.php" method="POST" >

	<div class="form-group">

		<label for="">Nome</label><br>
		<input type="text" name="name" placeholder="Digite seu nome">

	</div>
	<br>	
	<div class="form-group">

		<label for="email">Email</label><br>
		<input type="text" name="email" placeholder="Digite seu email">

	</div>
	<br>
	<div class="form-group">

		<label for="subject">Assunto</label><br>
		<input type="text" name="subject" placeholder="Digite seu assunto">

	</div>
	<br>
	<div class="form-group">

		<label for="message">Mensagem</label><br>
		<textarea name="message" placeholder="Digite sua mensagem" cols="30" rows="10" class="form-control"></textarea>

	</div>
	<br>
	<input type="submit" class="btn btn-primary" value="Submit">
</form>