/* 3/ Écrivez une fonction JavaScript qui accepte une chaîne comme paramètre et
convertit la première lettre de chaque mot de la chaîne en majuscule. */

function toTitleCase(chaine) {
  const mots = chaine.split(" ");
  for (let i = 0; i < mots.length; i++) {
    const mot = mots[i];
    mots[i] = mot.charAt(0).toUpperCase() + mot.slice(1);
  }
  return mots.join(" ");
}

/* TODO: essayer avec Array.prototype.forEach(),
ou mieux sans doute, Array.prototype.map() */

// tests
function log(x) {
  console.log(x, " => ", toTitleCase(x));
}

log("coucou !");
log ("coucou maman !");
log("coucou maman je suis développeur web !");
log("");
