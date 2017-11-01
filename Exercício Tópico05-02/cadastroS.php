<?php
        session_start();
        $aluno =  array();
        $_SESSION['cadastro'] = $aluno;
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>form</title>
    </head>
    <body>

    <div id="menu">
        <a href="lista.php">Ver Lista</a>
    </div>
            <center>
                <form action="cadastroS.php"method="POST">
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
                    <input type="submit" name="cadastrar" value="Cadastrar">
                </form>
            </center>
        
        <?php

            var_dump($_REQUEST);
            var_dump($_SESSION['cadastro']);
            if(isset($_SESSION['cadastro'])){
            array_push($_SESSION['cadastro'],   $_REQUEST['nome'],
                                                $_REQUEST["ra"],
                                                $_REQUEST["gender"],
                                                $_REQUEST["idade"],
                                                $_REQUEST["endereco"],
                                                $_REQUEST["telefone"],
                                                $_REQUEST["email"]);
            }
        ?>


    </body>
</html>