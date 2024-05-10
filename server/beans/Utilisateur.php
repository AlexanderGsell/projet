<?php 
  /**
  * Classe Genre
  *
  * Cette classe représente un utilisateur
  *
  * @version 1.0
  * @author GsellA
  * 
  */
  class Utilisateur
  {
    /**
    * Variable représentant le nom de l'utilisateur
    * @access private
    * @var string
    */
    private $nom;
    /**
    * Variable représentant la pk du genre
    * @access private
    * @var string
    */
    private $pk_utilisateur;


    /**
    * Variable représentant la pk du genre
    * @access private
    * @var string
    */
    private $MDP;
    /**
    * Constructeur de la classe Genre
    *
    * @param string $pk_pays. PK du genre
    * @param string nom. Nom du genre
    */
    public function __construct($pk_utilisateur, $nom, $MDP)
    {
      $this->nom = $nom;
      $this->MDP = $MDP;
      $this->pk_utilisateur = $pk_utilisateur; 
      
    }
    
    /**
    * Fonction qui retourne le nom du genre.
    *
    * @return string du genre.
    */
    public function getNom()
    {
      return $this->nom;
    }

    /**
    * Fonction qui retourne le mdp.
    *
    * @return string du mdp.
    */
    public function getMDP()
    {
      return $this->MDP;
    }
    
    /**
    * Fonction qui retourne la pk de l'utilisateur.
    *
    * @return string de l'utilisateur.
    */
    public function getPkUtilisateur()
    {
      return $this->pk_utilisateur;
    }

    public function setPkUtilisateur($pk_utilisateur) {
      $this->$pk_utilisateur=(int) $pk_utilisateur;
    }

    public function setMDP($MDP){
      $this->$MDP = (int) $MDP;
    }
    
    /**
    * Fonction qui retourne le contenu du bean au format XML
    * @return string contenu du bean au format XML
    */
    public function toXML()
    {
      $result = '<utilisateur>';
      $result = $result . '<pk_utilisateur>'.$this->getPkUtilisateur().'</pk_utilisateur>';
      $result = $result . '<nom>'.$this->getNom().'</nom>';
      $result = $result . '<pswddefaulthash>'.$this->getMDP().'</pswddefaulthash>';
      $result = $result . '</utilisateur>';
      return $result;
    }
  }
?>