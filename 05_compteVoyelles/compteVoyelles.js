/* 5/ Écrivez une fonction JavaScript qui accepte une chaîne comme paramètre
et compte le nombre de voyelles dans la chaîne.*/

function compteVoyelles(chaine) {
  // on stocke les voyelles dans une chaîne pour comparaison

  const voyelles = "aeiouy";

  // on compte

  let compte = 0;
  // dans une boucle for ... of
  for (const car of chaine.toLowerCase()) { // on uniformise la casse
    if (voyelles.includes(car)) {
    // on se sert de la méthode String.prototype.includes() qui renvoie true
    // si le caractère testé est dans la chaîne des voyelles
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
