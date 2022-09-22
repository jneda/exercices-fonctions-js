/* 5/ Écrivez une fonction JavaScript qui accepte une chaîne comme paramètre
et compte le nombre de voyelles dans la chaîne.*/

function compteVoyelles(chaine) {
  // on stocke les voyelles dans une chaîne pour comparaison

  const voyelles = "aeiouy";

  // on compte

  let compte = 0;
  for (const car of chaine.toLowerCase()) {
    if (voyelles.includes(car)) {
      compte++;
    }
  }

  // et on renvoie le résultat

  return compte;
}

// tests en dur

const log = x => console.log(x + " => " + compteVoyelles(x));

log("Toto");
log("tOto");
log("b4nAn3");
log("anticonstitutionnellement");
log("papaye");
log("Karine alla en Irak");
