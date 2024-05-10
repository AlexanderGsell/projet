<?php

class UtilisateurDBManager {
    private static $pdo;

    function __construct(){
        self::$pdo = new PDO(DB_TYPE.':host='.DB_HOST.';dbname='.DB_NAME, DB_USER, DB_PASS);
    }

    // Fonction pour charger les utilisateurs depuis la base de données
    public function chargerUtilisateursFromDatabase() 
        {
            $count = 0;
            $list = array();
            $connection = new Connexion();
            $query = $connection->SelectQuery("select * from t_utilisateurs", null);
            foreach ((array) $query as $data) {
                $lUtilisateur = new Utilisateur($data['PK_utilisateur'], $data['Nom'], $data['MDP']);
                $list[$count++] = $lUtilisateur;
            }
            return $list;
        }

    // Fonction pour détruire un utilisateur dans la base de données
    public static function detruireUtilisateurFromDatabase($id_utilisateur) {
        $sql = "DELETE FROM t_utilisateurs WHERE id = ?";
        $stmt = self::$pdo->prepare($sql);
        if (!$stmt) {
            return ["error" => "Erreur lors de la préparation de la requête de suppression"];
        }
        $result = $stmt->execute([$id_utilisateur]);
        if (!$result) {
            return ["error" => "Erreur lors de la suppression de l'utilisateur"];
        }
        return ["success" => true];
    }

    // Fonction pour créer un nouvel utilisateur dans la base de données
    public static function creerUtilisateurInDatabase($nom_utilisateur, $mot_de_passe) {
        $sql = "INSERT INTO t_utilisateurs (Nom, MDP) VALUES (?, ?)";
        $stmt = self::$pdo->prepare($sql);
        if (!$stmt) {
            return ["error" => "Erreur lors de la préparation de la requête de création d'utilisateur"];
        }
        $result = $stmt->execute([$nom_utilisateur, $mot_de_passe]);
        if (!$result) {
            return ["error" => "Erreur lors de la création de l'utilisateur"];
        }
        return ["success" => true];
    }

    // Fonction pour vérifier les identifiants de connexion dans la base de données
    public static function verifierIdentifiantsInDatabase($loginId, $loginPw) {
        $sql = "SELECT * FROM t_utilisateurs WHERE Nom = ?";
        $stmt = self::$pdo->prepare($sql);
        if (!$stmt) {
            return ["error" => "Erreur lors de la préparation de la requête de vérification des identifiants"];
        }
        $result = $stmt->execute([$loginId]);
        if (!$result) {
            return ["error" => "Erreur lors de la vérification des identifiants"];
        }
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        return $user && password_verify($loginPw, $user["password"]);
    }

    public function getInXML()
	{
		$listUtilisateurs = $this->chargerUtilisateursFromDatabase();
		$result = '<listUtilisateurs>';
		for ($i = 0; $i < sizeof($listUtilisateurs); $i++) {
			$result = $result . $listUtilisateurs[$i]->toXML();
		}
		$result = $result . '</listUtilisateurs>';
		return $result;
	}
}

?>
