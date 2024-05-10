class IndexCtrl {
  constructor() {
    this.serviceHttp = serviceHttp;
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


 // Méthode pour afficher les détails d'un superhéros
 showSuperheroDetails(superhero) {
  // Sélectionner les éléments où afficher les détails
  const nameElement = document.getElementById("superhero-name");
  const descriptionElement = document.getElementById("superhero-description");
  const powersElement = document.getElementById("superhero-powers");
  const imageElement = document.getElementById("superhero-image");

  // Insérer les données du superhéros dans les éléments correspondants
  nameElement.textContent = superhero.name;
  descriptionElement.textContent = superhero.description;
  powersElement.textContent = "Pouvoirs : " + superhero.powers.join(", ");
  imageElement.src = superhero.image;
}

// Méthode de succès pour charger les superhéros
async chargerSuperheroSuccess(superheroes) {
  // Sélectionner la liste des superhéros
  const listElement = document.getElementById("superheroes-list");

  // Vider la liste existante pour éviter les doublons
  listElement.innerHTML = "";

  // Générer la liste des superhéros
  superheroes.forEach(superhero => {
    const listItem = document.createElement("li");
    listItem.textContent = superhero.name;
    listItem.addEventListener("click", () => this.showSuperheroDetails(superhero));
    listElement.appendChild(listItem);
  });
}

// Méthode pour charger les superhéros et afficher leurs détails
async voirInfosSuperheros() {
  try {
    const superheroes = await this.serviceHttp.chargerSuperhero();
    this.chargerSuperheroSuccess(superheroes);
  } catch (error) {
    console.error("Erreur lors du chargement des superhéros :", error);
  }
}


// Fonction d'erreur pour charger les superhéros
 chargerSuperheroError(error) {
  console.error("Erreur lors du chargement des superhéros :", error);
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
    window.location.href = 'index.html';
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
  $("#btnSedeconnecter").click(function () {
    indexCtrl.seDeconnecter();
  });
});
// Création d'une instance de indexCtrl lorsque la page est chargée
document.addEventListener("DOMContentLoaded", function() {
  const serviceHttp = new ServiceHttp(); // Remplacez ServiceHttp par le nom de votre service HTTP
  new indexCtrl(serviceHttp);
});


// Utilisation de la classe
var indexCtrl = new IndexCtrl();
