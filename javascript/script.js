/*Début Compteur de produit */

document.addEventListener("DOMContentLoaded", function() {
  var produits = document.getElementsByClassName("card-produit");
  var nombreProduitsVisibles = 0;
  
  for (var i = 0; i < produits.length; i++) {
  if (produits[i].offsetWidth > 0 && produits[i].offsetHeight > 0) {
  nombreProduitsVisibles++;
  }
  }
  
  document.getElementById("nombreProduit").innerHTML = nombreProduitsVisibles + ' ';
  });
  
  /*Fin Compteur de produit */
  
  /*Début Barre de recherche */
  
  document.addEventListener("DOMContentLoaded", function() {
  var input = document.getElementById("searchInput");
  input.addEventListener("input", function() {
  var produits = document.getElementsByClassName("card-produit");
  var nombreProduitsVisibles = 0;
  
  for (var i = 0; i < produits.length; i++) {
  var produit = produits[i];
  var nomProduit = produit.getElementsByClassName("nom-produit")[0].innerHTML;
  if (nomProduit.toLowerCase().indexOf(input.value.toLowerCase()) == -1) {
  produit.style.display = "none";
  } else {
  produit.style.display = "block";
  nombreProduitsVisibles++;
  }
  }
  document.getElementById("nombreProduit").innerHTML = nombreProduitsVisibles + ' ';

  // Modification de la propriété "display" pour l'élément "msgAucunResultat"
var msgAucunResultat = document.getElementById("msgAucunResultat");
if (nombreProduitsVisibles === 0) {
  msgAucunResultat.style.display = "block";
} else {
  msgAucunResultat.style.display = "none";
}
  });
  });
  
  /*Fin Barre de recherche */

