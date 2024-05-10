/*
 * Bean "Utilisateur".
 *
 * @author Gsell Alexander
 * @project utilisateur
 * @version 1.0 / 23-02.2024
 */

var Utilisateur = function() {
};

/**
 * Setter pour le nom
 * @param String nom
 * @returns {undefined}
 */
Utilisateur.prototype.setNom = function(nom) {
  this.nom = nom;
};


/**
 * Setter pour le mdp
 * @param String nom
 * @returns {undefined}
 */


Utilisateur.prototype.setMDP = function(MDP) {
  this.MDP=MDP;
};


/**
 * Setter pour le pk de l'utilisateur
 * @param String nom
 * @returns {undefined}
 */
Utilisateur.prototype.setPkUtilisateur = function(pk_utilisateur) {
  this.pk = pk_utilisateur;
};

/**
 *Getter pour le nom
 * @param String nom
 * @returns {undefined}
 */
Utilisateur.prototype.getNom = function() {
  return this.nom;
};

/**
 *Getter pour le pk utilisateur
 * @returns {undefined}
 */
 Utilisateur.prototype.getPkUtilisateur = function() {
  return this.pk_utilisateur;
};

/**
 *Getter pour le pk mot de passe
 * @returns {undefined}
 */
 Utilisateur.prototype.getMDP = function() {
  return this.MDP;
};





/**
 * Retourne le superhero en format texte
 * @returns Le superhero en format texte
 */
Utilisateur.prototype.toString = function () {
  return this.nom;
};




