/*
 Ejercicio #1: Escriba una función de JavaScript que acepte una cadena
como parámetro y encuentre la palabra más larga dentro de la cadena
*/

function longestWord(string) {
  var str = string.split(" ");
  var longest = 0;
  var word = null;
  str.forEach(function (str) {
    if (longest < str.length) {
      longest = str.length;
      word = str;
    }
  });
  return word;
}
console.log(longestWord("hola como estas muy buen perfectamente estupendo"));
