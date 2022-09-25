/* 10/ Écrivez une fonction JavaScript qui accepte deux arguments,
une chaîne et une lettre, la fonction comptera le nombre d'occurrences
de la lettre spécifiée dans la chaîne. 

Exemples d'arguments : function maFunc(‘www.alibaba.com’, ’a’)
Sortie prévue : 3 */

function compteLettres(chaine, car) {
  // uniformisation de la casse

  chaine = chaine.toLowerCase();
  car = car.toLowerCase();

  // on compte

  let compte = 0;
  // boucle for ... of
  for (const c of chaine) {
    if (c === car) {
      compte++;
    }
  }

  return compte;
}

// tests en dur

const log = (x, y) => console.log(x + " | " + y + " => " + compteLettres(x, y));

log("www.alibaba.com", "a");
log("toto", "u");
log("PATATE", "t");
log("Karine alla en Irak", "A");