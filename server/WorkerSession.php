
<?php

/*
*Author Gsell Alexander
*Version 1.0
*/
//require_once "../beans/Utilisateur.php";

class WorkerSession

{

	//Permet de set une connexion avec une valeur dans la variable 'connection'
	public function setConnexion($PK_Utilisateur)

	{

		$_SESSION['connection'] = $PK_Utilisateur;
	}



//permet de fermer la session
	public function close()

	{

		if ($this->isOpen())

			session_destroy();
	}



//permet de vérifier qu'un session est ouverte (booléen)
	public function isOpen()

	{

		return isset($_SESSION['connection']);
	}



//Permet de donner une connexion
	public function getconnection()

	{

		return $_SESSION['connection'];
	}
}

?>