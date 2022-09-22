/* 3/ Écrivez une fonction JavaScript qui accepte une chaîne comme paramètre et
convertit la première lettre de chaque mot de la chaîne en majuscule. */

// Version basique

/* 
function toTitleCase(chaine) {
  const mots = chaine.split(" ");
  for (let i = 0; i < mots.length; i++) {
    const mot = mots[i];
    mots[i] = mot.charAt(0).toUpperCase() + mot.slice(1);
  }
  return mots.join(" ");
}
*/

// avec Array.prototype.forEach()

/* 
function toTitleCase(chaine) {
  const mots = chaine.split(" ");
  mots.forEach(function(mot, i, mots) {
    mots[i] = mot.charAt(0).toUpperCase() + mot.slice(1);
  })
  return mots.join(" ");
}
*/

// avec Array.prototype.map()

/* 
function toTitleCase(chaine) {
  const mots = chaine.split(" ");
  return mots
    .map(function (mot) {
      return mot.charAt(0).toUpperCase() + mot.slice(1);
    })
    .join(" ");
}
*/

// de même avec fonction fléchée

/* 
function toTitleCase(chaine) {
  const mots = chaine.split(" ");
  return mots
    .map((mot) => mot.charAt(0).toUpperCase() + mot.slice(1))
    .join(" ");
}
*/

// patate chaude ! enchaînement de méthodes

function toTitleCase(chaine) {
  return chaine
    .split(" ") // conversion de la chaîne en tableau de chaînes
    .map(function (mot) { // on renvoie un tableau des chaînes en titleCase
      return mot.charAt(0).toUpperCase() + mot.slice(1);
    })
    .join(" "); // conversion du tableau en chaîne
}

// tests en dur

function log(x) {
  console.log(x, " => ", toTitleCase(x));
}

log("coucou !");
log("coucou maman !");
log("coucou maman je suis développeur web !");
log("");
