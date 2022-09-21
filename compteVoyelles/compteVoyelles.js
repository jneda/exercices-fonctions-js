/* 5/ Écrivez une fonction JavaScript qui accepte une chaîne comme paramètre
et compte le nombre de voyelles dans la chaîne.*/

function compteVoyelles(chaine) {
  const voyelles = "aeiouy";
  let compte = 0;
  for (const car of chaine.toLowerCase()) {
    if (voyelles.includes(car)) {
      compte++;
    }
  }
  return compte;
}

const log = x => console.log(x + " => " + compteVoyelles(x));

log("Toto");
log("tOto");
log("b4nAn3");
log("anticonstitutionnellement");
log("papaye");
log("Karine alla en Irak");
