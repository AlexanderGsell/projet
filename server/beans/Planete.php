<?php 
  /**
  * Classe Planete
  *
  * Cette classe représente une planète.
  *
  * @version 1.0
  * @author Neuhaus Olivier <neuhauso@edufr.ch> modifié par Maraldi Kenzo
  * 
  */
  class Planete
  {
    /**
    * Variable représentant le nom d'une planète
    * @access private
    * @var string
    */
    private $nom;
    /**
    * Variable représentant la pk d'une planète
    * @access private
    * @var integer
    */
    private $pk_planete;

    /**
    * Constructeur de la classe Planete
    *
    * @param string $pk_planete. PK d'une planète
    * @param string nom. Nom d'une planète
    * 
    */
    public function __construct($pk_planete, $nom)
    {
      $this->nom = $nom;
      $this->pk_planete = $pk_planete;    
    }
    
    /**
    * Fonction qui retourne le nom d'une planète
    *
    * @return string nom
    */
    public function getNom()
    {
      return $this->nom;
    }
    
    /**
    * Fonction qui retourne la pk du genre.
    *
    * @return string du genre.
    */
    public function getPkPlanete()
    {
      return $this->pk_planete;
    }
    
    /**
    * Fonction qui retourne le contenu du bean au format XML
    * @return string contenu du bean au format XML
    */
    public function toXML()
    {
      $result = '<planete>';
      $result = $result . '<pk_planete>'.$this->getPkPlanete().'</pk_planete>';
      $result = $result . '<nom>'.$this->getNom().'</nom>';
      $result = $result . '</planete>';
      return $result;
    }
  }
?>