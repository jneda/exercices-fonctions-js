/* 1/ Écrivez une fonction JavaScript qui inverse un nombre.
Ex : 32243
Sortie prévue : 34223 */

function inverserNombre(nb) {
  nb = nb.toString();
  let result = "";
  for (let i = nb.length - 1; i >= 0; i--) {
    // console.log(nb.charAt(i)); 
    result = result.concat(nb.charAt(i));
  }
  return parseInt(result);
}

console.log(inverserNombre(123456));
// inverserNombre(12);
// console.log("*");
// inverserNombre(7645878789512);