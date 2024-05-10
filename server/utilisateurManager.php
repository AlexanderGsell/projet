<?php
/*
 * Request method de type getter,post,put et delete pour les utilisateurs
 *
 * @author GsellA
 * @version 1.0 / 13.05.2023
 */

include_once('workers/connexion.php');
include_once('workers/configConnexion.php');
include_once('workers/UtilisateurBDManager.php');
include_once('beans/Utilisateur.php');
include_once('WorkerSession.php');

// Gestion de la requête AJAX
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_SERVER["HTTP_X_REQUESTED_WITH"]) && strtolower($_SERVER["HTTP_X_REQUESTED_WITH"]) === 'xmlhttprequest') {
    // Vérifier s'il y a une action spécifiée dans les données POST
    if (isset($_POST["action"])) {
        // Rediriger la requête vers le worker approprié en fonction de l'action
        switch ($_POST["action"]) {
            case "chargerUtilisateur":
                // Appeler la fonction appropriée pour charger les utilisateurs
                $bdReader = new SuperheroBDManager();
			    echo $bdReader->getInXML();
                
                break;
            case "detruireUtilisateur":
                // Appeler la fonction appropriée pour détruire un utilisateur en passant le paramètre PK
                UtilisateurDBManager::detruireUtilisateurFromDatabase($_POST["pk_utilisateur"]);
                break;
            case "créerUtilisateur":
                // Appeler la fonction appropriée pour créer un utilisateur en passant les paramètres nom et mot de passe
                UtilisateurDBManager::creerUtilisateurInDatabase($_POST["nom"], $_POST["mot_de_passe"]);
                break;
            case "login":
                // Appeler la fonction appropriée pour gérer la connexion d'un utilisateur en passant les paramètres loginId et loginPw
                $result = UtilisateurDBManager::verifierIdentifiantsInDatabase($_POST["loginId"], $_POST["loginPw"]);
                // Envoyer la réponse JSON contenant le résultat de la vérification
                echo json_encode($result);
                break;
            case "deconnection":
                // Appeler la fonction appropriée pour gérer la déconnexion d'un utilisateur
                UtilisateurDBManager::deconnection();
                break;
            default:
                // Action non reconnue
                echo json_encode(["success" => false, "message" => "Action non valide"]);
                break;
        }
    } else {
        // Aucune action spécifiée dans les données POST
        echo json_encode(["success" => false, "message" => "Aucune action spécifiée"]);
    }
} else {
    // Requête non autorisée ou non AJAX
    echo json_encode(["success" => false, "message" => "Requête non autorisée"]);
}
?>
