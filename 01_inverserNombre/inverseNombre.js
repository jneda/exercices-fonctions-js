/* 1/ Écrivez une fonction JavaScript qui inverse un nombre.
Ex : 32243
Sortie prévue : 34223 */

function inverserNombre(nb) {
  // conversion en chaîne
  nb = nb.toString();

  // construction de la chaîne inversée par concaténation
  // dans une boucle for

  let result = "";
  for (let i = nb.length - 1; i >= 0; i--) {
    result = result.concat(nb.charAt(i));
  }

  // conversion de la chaîne en entier à la volée
  
  return parseInt(result);
}

/* 
// V2 /!\ à utiliser uniquement pour Halloween /!\

const inverserNombre = n => parseInt(Array.from(n.toString()).reverse().join(""));
 */