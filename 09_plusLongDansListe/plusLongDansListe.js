/* 9/ Écrivez une fonction JavaScript qui accepte une liste de noms
de pays en entrée et renvoie le nom de pays le plus long en sortie.

Exemple de fonction : Longest_Country_Name(["Australie", "Allemagne",
"États-Unis d'Amérique"])
Sortie prévue : "États-Unis d'Amérique" */

function plusLongDansListe(liste) {
  // cf 04_motLePlusLong

  // recherche de l'index du mot le plus long
  
  let indexPlusLong = 0;

  for (let i = 1; i < liste.length; i++) {
    if (liste[i].length > liste[indexPlusLong].length) {
      indexPlusLong = i;
    }
  }

  return liste[indexPlusLong];
}

// tests en dur

function log(x) { console.log(x + " => " + plusLongDansListe(x)) };

log(["Syrie", "Egypte", "Soudan"]);
log(["Australie", "Allemagne", "États-Unis d'Amérique"]);
log(["Liechtenstein", "France", "Belgique"]);