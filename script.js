/*
    Il faut que la page web crée un nb aléatoire (rechercher en ligne)
    Il faut a chaque tour demander a l'utilisateur un nombre 
    regarder s'il a deviné le nombre ou s'il est en dessous 
    tant qu'il est au dessus ou en dessous, la boucle continue 
    si a gagner, afficher message bravo la partie est finie. 

    bonus : quand il a gagné, preciser en combien de tour il l'a fait.

    (variables, conditions)
*/

// recuperer l'entrée
// let value = prompt("test");

let limiteSuperieure = Number(prompt("Définissez la limite supérieure"));

let nombreAléatoire = Math.round(Math.random() * limiteSuperieure);

let reponse;
let tours = 0;

while (reponse !== nombreAléatoire) {
  tours++;
  reponse = Number(prompt("Devinez le nombre (entre 1 et " + limiteSuperieure + ") !"));

  if (reponse < nombreAléatoire) {
    alert("Plus haut !");
  }

  if (reponse > nombreAléatoire) {
    alert("Plus bas !");
  }
  if (reponse === nombreAléatoire) {
    alert("Bravo, la partie est finie au bout de " + tours + " tours");
  }
}
