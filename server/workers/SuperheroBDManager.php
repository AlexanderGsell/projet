<?php
include_once("connexion.php");
include_once("beans/Superhero.php");


/**
 * Classe SuperheroBDManager
 *
 * permet de gèrer les superhero de la DB
 *
 * @version 1.0
 * @author GsellA
 * 
 */
class SuperheroBDManager
{
	
	public function readSuperhero()
	{
		$count = 0;
		$list = array();
		$connection = new Connexion();
		$query = $connection->SelectQuery("select * from t_superhero", null);
		foreach ((array) $query as $data) {
			$leSuperhero = new Superhero($data['PK_Superhero'], $data['Nom'], $data['Description'], /*erreur image */$data['Image'], $data['FK_Planete']);
			$list[$count++] = $leSuperhero;
		}
		return $list;
	}

	public function createSuperhero($superhero)
	{
		$query = "INSERT INTO t_superhero (PK_Superhero, Nom, Description,Image, FK_Planete) values(:pk, :nom, :descrip,:image, :fkplanete)";
		$params = array('pk' => $superhero->getPkSuperhero(), 'nom' => $superhero->getNom(), 'descrip' => $superhero->getDescription(), 'image' => $superhero->getImage(), 'fkplanete' => $superhero->getFkPlanete());
		connexion::getInstance()->ExecuteQuery($query, $params);
		return connexion::getInstance()->GetLastId('t_superhero');
	}

	public function readUnSuperhero($pk)
	{
		$query = "SELECT * FROM t_superhero WHERE PK_Superhero = :id";
		$params = array('id' => $pk);
		$res = connexion::getInstance()->SelectQuery($query, $params);
		if ($res != null) {
			$data = $res[0];
			$superhero = new Superhero($data['PK_Superhero'], $data['Nom'], $data['Description'], $data['Image'], $data['FK_Planete']);
		}else{
			$superhero = null;

		}

		return $superhero;
	}

	/**
	 * Fonction permettant de retourner la liste des superhero en XML.
	 * @param int $fkEquipe. Id du pays dans lequel se retrouvent les superhero
	 * @return string Liste des superhero en XML
	 */
	public function getInXML()
	{
		$listSuperheros = $this->readSuperhero();
		$result = '<listSuperheros>';
		for ($i = 0; $i < sizeof($listSuperheros); $i++) {
			$result = $result . $listSuperheros[$i]->toXML();
		}
		$result = $result . '</listSuperheros>';
		return $result;
	}
}
