<!-- dashboard.php -->

<?php
session_start();

// Vérifiez si l'utilisateur est connecté
if (!isset($_SESSION['username'])) {
    header('Location: login.php'); // Redirigez vers la page de connexion s'il n'est pas connecté
    exit;
}

// Récupérez les informations de l'utilisateur (par exemple, depuis la base de données)
$username = $_SESSION['username'];
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tableau de bord</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Bienvenue, <?php echo $username; ?> !</h1>
    <p>Ceci est votre tableau de bord personnel.</p>

    <!-- Autres éléments spécifiques à votre application -->
    <!-- Liens vers d'autres pages, fonctionnalités, etc. -->

    <a href="logout.php">Se déconnecter</a>
</body>
</html>