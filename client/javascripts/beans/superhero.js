/*
 * Bean "Superhero".
 *
 * @author Gsell Alexander
 * @project Superhero
 * @version 1.0 / 23-02.2024
 */

var Superhero = function() {
};

/**
 * Setter pour le nom
 * @param String nom
 * @returns {undefined}
 */
Superhero.prototype.setNom = function(nom) {
  this.nom = nom;
};


Superhero.prototype.setDescription = function(description) {
  this.description = description;
};

Superhero.prototype.setImage = function(image) {
  this.image = image;
};


Superhero.prototype.setFKPlanete = function(fk_planete) {
  this.fk_planete = fk_planete;
};




/**
 * Setter pour le pk du superhero
 * @param String nom
 * @returns {undefined}
 */
Superhero.prototype.setPk = function(pk) {
  this.pk = pk;
};



/**
 * Retourne le superhero en format texte
 * @returns Le superhero en format texte
 */
Superhero.prototype.toString = function () {
  return "Nom:" +this.nom + ", description: " + this.description + ", image: " + this.image + ", planète: " + this.fk_planete;
};




