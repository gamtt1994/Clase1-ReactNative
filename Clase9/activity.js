/*
implementa una funcion que ordene alfabeticamente las sgt
palabras*/
const names = ["Perro", "Gato", "Casa", "Vaca", "Bañera", "Terraza"];
names.sort();
console.log(names);

/*
implementa una funcion que haga el calculo de valor total 
de los siguientes elementos
*/

const products = [
  { name: "taza", price: 20 },
  { name: "polo", price: 40 },
  { name: "jeans", price: 60 },
  { name: "jeans", price: 80 },
];
let acumulator = 0;

products.map((item) => {
  acumulator += item.price;
});
console.log("La suma total del arreglo es: ", acumulator);

/*valida si alguno de los elementos de la lista anterior (pregunta 2) es mayor a 50*/

products.map((item) => {
  if (item.price > 50) {
    console.log("El número mayor a 50 es: ", item.price);
  }
});
