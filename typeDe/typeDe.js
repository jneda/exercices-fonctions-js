/* 7/ Écrivez une fonction JavaScript qui accepte un argument et renvoie son type.
Typeof renvoie six valeurs possibles : object, boolean, function, number, string,
and undefined. */

function typeDe(x) {
  return typeof x;
}

// const flechee = x => typeof x;

function log(x) { console.log(x + " => " + typeDe(x)); }

log([]);
log(false);
log(function() { return "Coucou !"; });
log(42);
log("toto");
log();