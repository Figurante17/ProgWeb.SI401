<?php
// Inicia uma session para que seja possível utilizar o array aluno em outras páginas 
	session_start();
	$_SESSION['cadastro'] = $aluno;
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Contador</title>
        <link rel="stylesheet" type="text/css" href="css.css"/>
    </head>
    <body>

    <div id="menu">
        <a href="lista.php">Ver Lista</a>
        <a href="cadastro.php">Ver Cadastro</a>
    </div>
  				<!-- Ele retorna a própria página porque ele irá ler a função cadastrar.php -->
            <center><form action="cadastro.php"method="POST">
                <input type="text" name="nome"     placeholder="Nome Completo"></br>
                <input type="number" name="ra"     placeholder="RA"></br>
                <select name="gender">
                    <option value="Masculino">Masculino
                    <option value="Feminino">Feminino
                    <option value="Outro">Outro
                </select>
                </br>
                <input type="number" name="idade"  min="1" max="99"  placeholder="Idade"></br>
                <input type="text" name="endereco" placeholder="Endereço"></br>
                <input type="tel" name="telefone" placeholder="Telefone"></br>
                <input type="email" name="email"    placeholder="email"></br></br>
                <input type="button" name="cadastrar" onclick="cadastrar()" value="Cadastrar">
                <input input type="submit" value="Exibir" name="submit">
            </form></center>
            <?php
				$aluno = []; 
            function cadastrar(){
        			array_push($aluno, $_POST["nome"], $_POST["ra"], $_POST["gender"], 
				$_POST["idade"], $_POST["endereco"], $_POST["telefone"], $_POST["email"]);
            }
            ?>


    </body>
</html>