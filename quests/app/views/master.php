<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="/assets/css/styles.css">
    <title><?php echo $title; ?></title>
</head>
<body>
    <header id="header">
        <?php require 'partials/header.php' ?>
    </header>
    <div class="container">
        <?php require VIEWS.$view;?>
    </div>
</body>
</html>