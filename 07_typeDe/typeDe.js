/* 7/ Écrivez une fonction JavaScript qui accepte un argument et renvoie son type.
Typeof renvoie six valeurs possibles : object, boolean, function, number, string,
and undefined. */

// en définitive, on enveloppe l'opérateur typeof dans une fonction 

function typeDe(x) {
  return typeof x;
}

// variante en fonction fléchée
/* 
const flechee = x => typeof x;
*/

// tests en dur

function log(x) { console.log(x + " => " + typeDe(x)); }

log([]);
log(false);
log(function() { return "Coucou !"; });
log(42);
log("toto");
log();