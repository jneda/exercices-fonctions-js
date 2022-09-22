/* 8/ Écrivez une fonction JavaScript qui prendra un tableau
de nombres stockés et trouvera respectivement le deuxième plus petit
et le deuxième plus grand nombre.
Ex : let arr = [1,2,3,4,5]
Sortie prévue : 2,4 */

// faisons simple : on trie le tableau en ordre croissant
// et on retourne la seconde valeur et l'avant-dernière

function quasiMinMax(nombres) {
  if (nombres.length <= 1) {
    return [];
  }
  nombres.sort();
  return([nombres[1], nombres[nombres.length-2]]);
}

const log = x => console.log(x + " => " + quasiMinMax(x));

log([1, 2, 3, 4, 5]);
log([4, 5, 1, 3, 2]);
log([3, 1, 2]);
log([26,42]);
log([666]);
log([]);
