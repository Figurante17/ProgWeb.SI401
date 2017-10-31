<?php
	// Recebe as variaveis do tipo Session, que servem para trocar informações de uma pagina para outra.
	session_start();
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Contador</title>
        <link rel="stylesheet" type="text/css" href="css.css"/>
    </head>
    <body>
    <?php
    	// Percorrer todos os campos do array cadastro, que foi preenchido na páǵina cadastro.php 
		foreach ($_SESSION["cadastro"] as $campo) {
    		echo $campo;
		}
    ?>
    </body>
</html>