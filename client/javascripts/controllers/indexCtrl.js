class indexCtrl {

  constructor(serviceHttp) {
      this.serviceHttp = serviceHttp;
  }

  async onSubmit(event) {
  event.preventDefault(); // Empêche la soumission du formulaire
  const username = document.querySelector('#username');
  const password = document.querySelector('#password');
  const loginError = document.querySelector('#loginError');
  console.log("bouton appuyé");
  const result = await this.serviceHttp.login(username.value, password.value);
  if (result.success) {
      window.location.href = 'index2.html';
  } else {
      username.style.borderColor = 'red';
      password.style.borderColor = 'red';
      loginError.textContent = 'Les identifiants ne sont pas corrects';
  }
  return false; // Pour empêcher la soumission du formulaire
}

}


function chargerSuperheroSuccess(data, text, jqXHR) {
  var cmbSuperhero = document.getElementById("cmbSuperhero");
  $(data).find("superhero").each(function () {
    var superhero = new Superhero();
    superhero.setNom($(this).find("nom").text());
    superhero.setPk($(this).find("pkSuperhero").text());
    superhero.setDescription($(this).find("description").text());
    superhero.setFKPlanete($(this).find("FK_Planete").text());
    cmbSuperhero.options[cmbSuperhero.options.length] = new Option(superhero, JSON.stringify(superhero));
  });
}

function chargerSuperheroError(request, status, error) {
  alert("Erreur lors de la lecture des superheros: " + error);
}

function chargerUtilisateurError(request, status, error) {
  alert("Erreur lors de la lecture des Utilisateurs: " + error);
}

function chargerUtilisateursSuccess(data) {
  console.log("La liste d'utilisateur a bien été envoyée");
  var nameTab = [];
  $(data).find("utilisateur").each(function () {
    var utilisateur = new Utilisateur();
    utilisateur.setNom($(this).find("Nom").text());
    utilisateur.setPkUtilisateur($(this).find("PK_Utilisateur").text());
    nameTab.push(utilisateur.getNom());
  });
}

function preDelUtilisateursSuccess(data) {
  console.log("recherche du userDel");
  $(data).find("utilisateur").each(function () {
    if ($(this).find("nom").text() == document.getElementById("txtLoginId").value) {
      detruireUtilisateur($(this).find("pk_utilisateur").text(), detruireUtilisateurSuccess, callbackError);
    }
  });
}

function updateSuccess(data) {
  console.log("Votre compte a été modifié");
  alert("Votre compte a été modifié avec succès!");
}

function detruireUtilisateurSuccess() {
  console.log("L'utilisateur a été retiré de la DB");
  chargerUtilisateurs(chargerUtilisateursSuccess, callbackError);
}

function connectSuccess(data) {
  console.log("Vous êtes connecté");
}

function créerUtilisateurSuccess(data) {
  console.log("La création d'un utilisateur a réussi");
  alert("Votre utilisateur a été créé, veuillez vous connecter!");
}

function deconnectSuccess(data) {
  console.log("Vous êtes déconnecté");
}

function callbackError() {
  console.log("La requête n'a pas abouti");
  alert("La requête n'a pas abouti");
}

function connect() {
  login(
    document.getElementById("txtLoginId").value,
    document.getElementById("txtLoginPw").value,
    connectSuccess,
    callbackError
  );
}

function nouveau() {
  créerUtilisateur(
    document.getElementById("txtLoginId").value,
    document.getElementById("txtLoginPw").value,
    créerUtilisateurSuccess,
    callbackError
  );
}

function suppr() {
  chargerUtilisateurs(preDelUtilisateursSuccess, callbackError);
}

function deconnection() {
  deconnection(
    deconnectSuccess,
    callbackError
  );
}



$(document).ready(function () {
  $.getScript("javascripts/helpers/dateHelper.js");
  $.getScript("javascripts/beans/superhero.js");
  $.getScript("javascripts/beans/utilisateur.js");
  $.getScript("javascripts/services/servicesHttp.js", function () {
    console.log("servicesHttp.js chargé !");
    chargerSuperhero(chargerSuperheroSuccess, chargerSuperheroError);
    chargerUtilisateurs(chargerUtilisateursSuccess, chargerUtilisateurError);
  });
});
