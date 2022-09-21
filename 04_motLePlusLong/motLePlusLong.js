/* 
4/ Écrivez une fonction JavaScript qui accepte une chaîne comme paramètre et
recherchez le mot le plus long dans la chaîne.
Ex : « je suis développeur web »
Sortie prévue : « développeur »
*/

function plusLong(chaine) {
  const mots = chaine.split(" ");
  let indexPlusLong = 0;
  for (let i = 1; i < mots.length; i++) {
    if (mots[i].length > mots[indexPlusLong].length) {
      indexPlusLong = i;
    }
  }
  return mots[indexPlusLong];
}

function log(x) {
  console.log(x + " => " + plusLong(x));
}

log("toto tonton");
log("Coucou maman je suis dévelopeur web");
log("a bcd ef");