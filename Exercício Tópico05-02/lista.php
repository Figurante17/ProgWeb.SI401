<?php
	// Recebe as variaveis do tipo Session, que servem para trocar informações de uma pagina para outra.
	session_start();
        foreach ($_SESSION['cadastro'] as $key => $value) {
    		echo $key .':' . $value, '<br>';
		}
    ?>
