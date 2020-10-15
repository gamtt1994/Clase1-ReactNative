/*
1) declarar una funcion que divide 2 numeros
2) declarar una funcion que agregue un caracter a un string
3) declarar una funcion que agregue un elemento a una lista(array)
*/

const divide = (x, y) => {
  console.log("La división es: ", x / y);
};
divide(6, 2);

const addLetter = (letter) => {
  console.log(`Hola como estas ${letter}`);
};
addLetter("gustavo");

let data = ["Gustavo", "Alejandro"];
const addData = (valueData) => {
  data.push(valueData);
  console.log("Valores: ", data);
};

addData("Miguel");
