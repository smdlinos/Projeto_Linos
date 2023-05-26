<?php require "../bootstrap.php";?>

<!DOCTYPE html>
<html lang="pt-br">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Curso de php devclass</title>
		<link rel="stylesheet" href="./assets/css/bootstrap.min.css">
	</head>
	<body>
		<div class="container">
			<?php 

			try{

			 require load(); 

			} catch (Exeption $e){

				echo $e->getMessage();

			}

			?>
		</div>
	</body>
</html>
