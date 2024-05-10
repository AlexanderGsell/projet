<?php
require_once('server/workers/configConnexion.php');
//AJOUTER LES INCLUDES NECESSAIRES AUX TEST DES FONCTIONS WORKER
require_once('server/workerSession.php');
require_once('server/beans/Planete.php');
require_once('server/beans/Superhero.php');
require_once('server/beans/Utilisateur.php');


//----------------------------------TESTS CONNEXION Server MySQL et DB---------------------------------------
echo "<h1> TESTS CONNEXION Server MySQL et DB </h1>";
echo "<hr>";

try {
	/*
	$pdo = new PDO(
		'mysql:host=localhost:3307;dbname=gsella_151;charset=utf8',
		'root',            
		''  
		);
		
	*/
	//avec les constantes définies dans le fichier configConnexion
	
	$pdo = new PDO(DB_TYPE . ':host=' . DB_HOST . ';dbname=' . DB_NAME, DB_USER, DB_PASS, array(
		PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
		PDO::ATTR_PERSISTENT => true
     ));
	 echo "Connexion successfull <br>";
} catch (PDOException $e) {
  echo "Erreur !: " . $e->getMessage() . "<br/>";
  die();
}

$attributes = array(
     "CLIENT_VERSION", "CONNECTION_STATUS", "SERVER_VERSION"
);
foreach ($attributes as $val) {
    echo "PDO::ATTR_$val: ";
    echo $pdo->getAttribute(constant("PDO::ATTR_$val")) . "<br>";
}	

//----------------------------------------------------TESTS Database---------------------------------------
echo '<h1> TEST Database '.DB_NAME.'</h1>';
echo "<hr>";
//VALUES TO CHANGE
//VALUES TO CHANGE
$tableName = "t_superpouvoir";
$columnName = "Nom";

echo "<h4>Query simple sur table $tableName</h4>";
$statement = $pdo->query("SELECT * FROM $tableName");
    
  while (($row = $statement->fetch())) {
	  echo $row[$columnName] . '<br>';
  };



  $tableName = "t_superhero";
$columnName = "Description";

echo "<h4>Query simple sur table $tableName</h4>";
$statement = $pdo->query("SELECT * FROM $tableName");
    
  while (($row = $statement->fetch())) {
	  echo $row[$columnName] . '<br>';
  };


  $tableName = "t_utilisateur";
  $columnName = "Nom";
  
  echo "<h4>Query simple sur table $tableName</h4>";
  $statement = $pdo->query("SELECT * FROM $tableName");
	  
	while (($row = $statement->fetch())) {
		echo $row[$columnName] . '<br>';
	};
  
$pdo=NULL;

//----------------------------------------------------TESTS Fonction worker---------------------------------------
/*
echo '<h1> TEST Fonctions Worker </h1>';
echo "<hr>";
$wrk = new Wrk;
//METHODE TO CHANGE
$results = $wrk->getEquipesFromDB();

echo "Results from wrk function <br>";
foreach ($results as $result) {
	echo ' id : ';
	//METHODE TO CHANGE if getPk is note available
	echo $result->getPk();
}	
*/

//----------------------------------------------------TESTS requete---------------------------------------

?>

