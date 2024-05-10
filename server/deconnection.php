<?php
/*
 * Request method de type getter pour la deconnexion
 *
 * @author Maraldi Kenz0
 * @version 1.0 / 13.05.2023
 */
session_start();
include_once("WorkerSession.php");
$wrkSession = new WorkerSession();

//permet de faire une requête get
if (isset($_SERVER['REQUEST_METHOD']))
	{
		if ($_SERVER['REQUEST_METHOD'] == 'GET')
		{
		if(isset($_SESSION['connection'])){
			$wrkSession->close();
            echo("GG vous vous êtes déconnecté");
           
		}else{
			echo("vous n'etes pas connecté");
		}
	}
	}

?>


