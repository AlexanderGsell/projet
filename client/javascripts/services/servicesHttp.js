/*
 * Couche de services HTTP (worker).
 *
 * @author Gsell Alexander
 * @version 1.0
 */

function chargerSuperhero(callbackSuccess, callbackError) {
  $.ajax({
    url: "http://localhost/151/151-personal-projet-Gsell-Alexander-AlexanderGsell/projet/server/superheroManager.php",
    type: "GET",
    dataType: "xml", // Ou "json" selon le format de données attendu
    data: { action: "chargerSuperhero" },
    success: callbackSuccess,
    error: callbackError
  });
}

function chargerUtilisateurs(callbackSuccess, callbackError) {
  $.ajax({
    url: "http://localhost/151/151-personal-projet-Gsell-Alexander-AlexanderGsell/projet/server/utilisateurManager.php",
    type: "GET",
    dataType: "xml", // Ou "json" selon le format de données attendu
    data: { action: "chargerUtilisateur" },
    success: callbackSuccess,
    error: callbackError
  });
}

function detruireUtilisateur(pk_utilisateur, callbackSuccess, callbackError) {
  $.ajax({
    url: "http://localhost/151/151-personal-projet-Gsell-Alexander-AlexanderGsell/projet/server/utilisateurManager.php",
    type: "POST",
    data: { action:"detruireUtilisateur", pk_utilisateur: pk_utilisateur },
    success: callbackSuccess,
    error: callbackError
  });
}

function créerUtilisateur(nom, mot_de_passe, callbackSuccess, callbackError) {
  $.ajax({
    url: "http://localhost/151/151-personal-projet-Gsell-Alexander-AlexanderGsell/projet/server/utilisateurManager.php",
    type: "POST",
    data: { action:"créerUtilisateur", nom: nom, mot_de_passe: mot_de_passe },
    success: callbackSuccess,
    error: callbackError
  });
}

function login(loginId, loginPw, callbackSuccess, callbackError) {
  $.ajax({
    url: "http://localhost/151/151-personal-projet-Gsell-Alexander-AlexanderGsell/projet/server/utilisateurManager.php",
    type: "POST",
    data: { action:"login", loginId: loginId, loginPw: loginPw },
    success: callbackSuccess,
    error: callbackError
  });
}

function deconnection(callbackSuccess, callbackError) {
  $.ajax({
    url: "http://localhost/151/151-personal-projet-Gsell-Alexander-AlexanderGsell/projet/server/utilisateurManager.php",
    type: "POST",
    data: { action: "deconnection" },
    success: callbackSuccess,
    error: callbackError
  });
}

function modifierUtilisateur(utilisateur, callbackSuccess, callbackError) {
  $.ajax({
    url: "http://localhost/151/151-personal-projet-Gsell-Alexander-AlexanderGsell/projet/server/utilisateurManager.php",
    type: "POST",
    data: utilisateur,
    success: callbackSuccess,
    error: callbackError
  });
}
