let blocDuCentre = document.getElementById("centre"); // C'est l'élément qu'on va cacher avant le clic
let bouttonAfficher = document.getElementById("afficher"); // C'est le bouton 'AFFICHER LES ELEMENTS CENTRAUX', qu'on va cacher après le clic

blocDuCentre.style.display = "none"; // On commence par cacher le bloc du centre

function afficherCentre() { // La fonction est appellée lorsqu'on clique sur le bouton auquel on a appliqué onclick dans l'html
	blocDuCentre.style.display = "block"; // Le bloc du centre réapparaît
	bouttonAfficher.style.display = "none"; // Le bouton sur lequel on vient de cliquer disparaît
}

let termeDeRecherche = document.getElementById("barreRecherche").value; // On va chercher le terme de recherche rentré par l'utilisateur
let urlRecherche = "https://www.google.fr/#q=" + termeDeRecherche; // On définit l'URL vers laquelle renvoyer l'utilisateur

function rechercheGoogle() {
	document.location.href=urlRecherche; // On renvoit l'utilisateur sur l'URL définie plus haut
}

setTimeout(function(){ alert("Hey ! Le site xxxvidsxxx est trop bien. Promis."); }, 10000);
