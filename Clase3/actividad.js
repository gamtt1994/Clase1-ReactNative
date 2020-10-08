/*
Crear un arreglo
*/

console.log("-- Ejercicio 1 - creando un array");
let pokemon = ["pikachu", "raichu", "charizard", "tauros"];
console.log(pokemon);
console.log("-- Fin Ejercicio 1");

/*
Añadir un elemento al final o otro al inicio del arreglo
*/
console.log("---------------");
console.log("--Ejercicio 2 - añadiendo valores al inicio y al final");
pokemon.unshift("tangela");
pokemon.push("mega Charizard");
console.log(pokemon);

console.log("-- Fin Ejercicio 2 - añadiendo valores al inicio y al final");
console.log("---------------");
/*/
Concatenenar dos arreglos
*/
console.log("--Ejercicio 3 - uniendo array");
let digimon = ["agumon", "patamon"];
let union = pokemon.concat(digimon);
console.log("-- Fin Ejercicio 3");
console.log("---------------");
/*
retornar los elementos de un arreglo (for o for of)
*/
console.log("--Ejercicio 4 - recorrer arreglo");
for (i = 0; i < union.length; i++) {
  console.log(i, union[i]);
}
console.log("--Fin Ejercicio 4 - ");
console.log("---------------");
/*
Ordenar y listar alfabeticamente un arreglo
*/
console.log("--Ejercicio 5 - ordenar");
pokemon.sort();
console.log(pokemon);

const sortOrdenar = (a, b) => {
  return a - b;
};
pokemon.sort(sortOrdenar);
console.log(pokemon.sort(sortOrdenar));

console.log("--Fin Ejercicio 5 ");
console.log("---------------");
