class IndexCtrl {
  constructor() {
    // Initialisation ou tout autre traitement nécessaire au chargement du contrôleur
  }

  seConnecter() {
    var identifiant = document.getElementById("txtLoginId").value.trim();
  var motDePasse = document.getElementById("txtLoginPw").value.trim();

  // Vérifier si les champs sont vides
  if (identifiant === "" || motDePasse === "") {
    alert("Veuillez saisir un identifiant et un mot de passe.");
    return; // Arrêter l'exécution si les champs sont vides
  }

  // Continuer avec la connexion si les champs ne sont pas vides
  console.log("Connection");
  login(identifiant, motDePasse, this.connecterAvecSucces, this.gestionErreur);
}

  connecterAvecSucces(data) {
    console.log("Vous êtes connecté avec succès.");
    window.location.href = 'index2.html';
  }

  voirInfosSuperheros() {
    chargerSuperhero(chargerSuperheroSuccess, chargerSuperheroError);
  }

  ajouterSuperhero(nom, description, fkPlanete) {
    var nouveauSuperhero = new Superhero();
    nouveauSuperhero.setNom(nom);
    nouveauSuperhero.setDescription(description);
    nouveauSuperhero.setFKPlanete(fkPlanete);
    ajouterSuperheroDB(nouveauSuperhero, this.ajoutSuperheroAvecSucces, this.gestionErreur);
  }

  ajoutSuperheroAvecSucces(data) {
    console.log("Superhéros ajouté avec succès.");
    
  }

  supprimerSuperhero(pkSuperhero) {
    supprimerSuperheroDB(pkSuperhero, this.supprimerSuperheroSuccess, this.gestionErreur);
  }

  supprimerSuperheroSuccess(data) {
    console.log("Superhéros supprimé avec succès.");
  }

  modifierSuperhero(pkSuperhero, nouveauNom, nouvelleDescription, nouvelleFKPlanete) {
    var superheroModifie = new Superhero();
    superheroModifie.setNom(nouveauNom);
    superheroModifie.setDescription(nouvelleDescription);
    superheroModifie.setFKPlanete(nouvelleFKPlanete);
    modifierSuperheroDB(pkSuperhero, superheroModifie, this.modificationSuperheroSuccess, this.gestionErreur);
  }

  modificationSuperheroSuccess(data) {
    console.log("Superhéros modifié avec succès.");
  }

  seDeconnecter() {
    deconnection(this.deconnecterAvecSucces, this.gestionErreur);
  }

  deconnecterAvecSucces(data) {
    console.log("Vous êtes déconnecté avec succès.");
  }

  gestionErreur() {
    console.log("Une erreur s'est produite.");
    alert("Une erreur s'est produite.");
  }
}

$(document).ready(function () {
  // Créer une instance de la classe IndexCtrl
  var indexCtrl = new IndexCtrl();

  // Ajouter un écouteur d'événements au bouton "Se connecter"
  $("#btnSeConnecter").click(function () {
    indexCtrl.seConnecter();
  });
});


// Utilisation de la classe
var indexCtrl = new IndexCtrl();
