/* 10/ Écrivez une fonction JavaScript qui accepte deux arguments,
une chaîne et une lettre, la fonction comptera le nombre d'occurrences
de la lettre spécifiée dans la chaîne. 

Exemples d'arguments : function maFunc(‘www.alibaba.com’, ’a’)
Sortie prévue : 3 */

function compteLettres(chaine, car) {
  let compte = 0;
  for (const c of chaine.toLowerCase()) {
    if (c === car.toLowerCase()) {
      compte++;
    }
  }
  return compte;
}

const log = (x, y) => console.log(x + " | " + y + " => " + compteLettres(x, y));

log("www.alibaba.com", "a");
log("toto", "u");
log("PATATE", "t");
log("Karine alla en Irak", "A");