<h2>Cadastro</h2>
<br>
<?php echo getFlash('message'); ?>
<form action="/quests/user/store" method="POST" >

    <div class="form-group">
        
        <label for="name">Nome Completo</label><br>
		<input type="text" name="name" placeholder="Digite seu nome completo">
        <?php echo getFlash('name'); ?>
        
	</div>
	<br>
	<div class="form-group">
        <label for="nickname">Nickname</label><br>
		<input type="text" name="nickname" placeholder="Digite seu nome de Usuário">
        <?php echo getFlash('nickname'); ?>
	</div>
	<br>	
    
    <div class="form-group">
        
        <label for="email">Email</label><br>
		<input type="text" name="email" placeholder="Digite seu email">
        <?php echo getFlash('email') ;?>
        
	</div>
	<br>
	<div class="form-group">
        
        <label for="password">Password</label><br>
		<input type="password" name="password" placeholder="Digite sua senha">
        <?php echo getFlash('password'); ?>

	</div>
	<br>
    <div class="form-group">

		<label for="escolaridade">Qual a sua escolaridade</label><br>
        <select name="escolaridade">
            <option value="">Default</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
        <br>
        <label for="genero">Com qual gênero você se identifica</label><br>
        <select name="genero">
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
	</div>
	<br>
    <label for="data_nascimento">Data de nascimento</label><br>
    <input name= "data_nascimento" type="date">
	<input type="submit" class="btn btn-primary" value="Submit">
</form>