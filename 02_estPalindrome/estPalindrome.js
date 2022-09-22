/* 2/ Écrire une fonction JavaScript qui vérifie si une chaîne passée est un palindrome ou non ?
Un palindrome est un mot, une phrase ou une séquence qui se lit de la même manière vers l'arrière que vers l'avant, par exemple, kayak, été, rêver. */

function estPalindrome(chaine) {
  // traitement de l'entrée

  chaine = chaine.toLowerCase(); // on uniformise la casse
  chaine = chaine.split(" ").join(""); // on supprime les espaces

  // constantes utilitaires

  const nbLettres = chaine.length;
  const indexFin = nbLettres - 1; 
  const indexMilieu = Math.floor(nbLettres / 2);

  // on compare un par un les caractères du début et de la fin en progressant vers le milieu
  
  for (let i = 0; i < indexMilieu; i++) {
    if (chaine.charAt(i) !== chaine.charAt(indexFin - i)) {
      return false; // les caractères sont différents : on sort
    }
  }

  // on a passé la boucle : tous les caractères étaient identiques
  
  return true;
}

// tests en dur

console.log("toto", estPalindrome("toto"));
console.log("pythagore", estPalindrome("pythagore"));
console.log("kayak", estPalindrome("kayak"));
console.log("été", estPalindrome("été"));
console.log("rêver", estPalindrome("rêver"));
console.log("Karine alla en Irak", estPalindrome("Karine alla en Irak"));
console.log("Éric notre valet alla te laver ton ciré", estPalindrome("Éric notre valet alla te laver ton ciré"));
