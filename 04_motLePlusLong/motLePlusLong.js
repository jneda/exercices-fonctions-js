/* 
4/ Écrivez une fonction JavaScript qui accepte une chaîne comme paramètre et
recherchez le mot le plus long dans la chaîne.
Ex : « je suis développeur web »
Sortie prévue : « développeur »
*/

function plusLong(chaine) {
  // conversion de la chaîne en tableau de chaînes

  const mots = chaine.split(" ");

  // recherche de l'index du mot le plus long

  let indexPlusLong = 0;
  for (let i = 1; i < mots.length; i++) {
    if (mots[i].length > mots[indexPlusLong].length) {
      indexPlusLong = i;
    }
  }

  // on se sert de l'index pour renvoyer le résultat recherché

  return mots[indexPlusLong];
}

// tests en dur

function log(x) {
  console.log(x + " => " + plusLong(x));
}

log("toto tonton");
log("Coucou maman je suis développeur web");
log("a bcd ef");