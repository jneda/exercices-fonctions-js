/* 6/ Écrivez une fonction JavaScript qui accepte un nombre comme paramètre
et vérifiez que le nombre est premier ou non.
Un nombre entier naturel (supérieur ou égal à 2) est un nombre premier
s'il admet exactement 2 diviseurs : 1 et lui-même. */

/* test de primalité
https://fr.wikipedia.org/wiki/Test_de_primalit%C3%A9

on teste la division de n par tous les entiers compris entre 2 et 
racine carrée de n */

function estPremier(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// tests en dur

function log(x) {
  console.log(x + " => " + estPremier(x));
}

log(2);
log(31);
log(42);
log(73);
log(74);

/* NB: Les vingt-cinq nombres premiers inférieurs à 100 sont :
2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59,
61, 67, 71, 73, 79, 83, 89, et 97.*/
