/* 8/ Écrivez une fonction JavaScript qui prendra un tableau
de nombres stockés et trouvera respectivement le deuxième plus petit
et le deuxième plus grand nombre.
Ex : let arr = [1,2,3,4,5]
Sortie prévue : 2,4 */

// fonction utilitaire

function numSort(array) {
  // NB : définir la fonction de tri sans quoi les nombres négatifs
  // seront triés alphabétiquement
  // NB2 : cette fonction modifie l'array donné en entrée,
  // donc pas de valeur de retour
  array.sort((a, b) => a - b)
}

function quasiMinMax(nombres) {
  // on sort si la condition n'est pas respectée

  if (nombres.length <= 1) {
    return [];
  }

  // faisons simple : on trie le tableau en ordre croissant
  
  numSort(nombres);

  // et on retourne la seconde valeur et l'avant-dernière

  return([nombres[1], nombres[nombres.length-2]]);
}

// tests en dur

const log = x => console.log(x + " => " + quasiMinMax(x));

log([1, 2, 3, 4, 5]);
log([4, 5, 1, 3, 2]);
log([3, 1, 2]);
log([26,42]);
log([666]);
log([]);
log([1, 2, 3, 4, 5, -1, -2, -3, -4, -5]);