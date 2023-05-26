<h2>Editar</h2>
<br>

<?php 
 $user = find('users','id',$_GET['id']);
?>
<?=get('message')?>
<form action="/curso_php2/public/pages/forms/update_user.php" method="POST" >

	<div class="form-group">

		<label for="">Nome</label><br>
		<input type="text" name="name" placeholder="Digite seu nome" value="<?=$user->name?>">

	</div>
	<br>
	<input type="hidden" name="id" value="<?=$user->id?>">
	<div class="form-group">
		<label for="message">Sobrenome</label><br>
		<input type="text" name="sobrenome" placeholder="Digite sua sobrenome" value="<?=$user->sobrenome?>">
	</div>
	<br>	<div class="form-group">

		<label for="email">Email</label><br>
		<input type="text" name="email" placeholder="Digite seu email" value="<?=$user->email?>">

	</div>
	<br>
	<input type="submit" class="btn btn-primary" value="Submit">
</form>