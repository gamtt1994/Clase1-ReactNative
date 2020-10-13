/* tenemos un capital de 200 dolares y tenemos 4 articulos
item|precio|stock
jeans|30|5
shoes|70|7
T-shirt|15|4
¿Cuantas mudas de ropa puedo comprar con esos 200 dolares?
¿Cuantos zapatos puede comprar?
cuantas camisas puedo comprar?
cuantos Jean puedo comprar? */

let clothing = [
  { id: 1, ropa: "jeans", precio: 30, stock: 5 },
  { id: 2, ropa: "shoes", precio: 70, stock: 7 },
  { id: 3, ropa: "T-shirt", precio: 15, stock: 4 },
];

let capital = 250;
let maxValue = clothing[0].stock;

//Obtener el mayor valor de stock
for (var i = 0; i < clothing.length; i++) {
  var currentValue = clothing[i].stock;

  if (currentValue > maxValue) {
    maxValue = currentValue;
  }
}

let acumulador2 = 0;
let muda = 0;
for (var j = 1; j < maxValue; j++) {
  acumulador2 =
    (clothing[0].precio + clothing[1].precio + clothing[2].precio) * j;
  if (capital > acumulador2) {
    muda = j;
  } else {
  }
}
console.log("La cantidad de muda es:", muda);
console.log("-----Resolución con Switch---------");

for (let i = 0; i < clothing.length; i++) {
  let stock = clothing[i].stock;
  let price = clothing[i].precio;
  let cantidad = 0;

  for (let j = 1; j <= stock; j++) {
    if (capital > j * price) {
      cantidad = j;
    } else {
      cantidad;
    }
  }

  console.log(`La cantidad máxima de ${clothing[i].ropa} es: `, cantidad);
}

//Resolución con switch
console.log("-----Resolución con Switch---------");
for (let i = 0; i < clothing.length; i++) {
  switch (clothing[i]) {
    case clothing[0]:
      let stock = clothing[0].stock;
      let price = clothing[0].precio;
      let cantidad = 0;
      for (let j = 1; j <= stock; j++) {
        if (capital > j * price) {
          cantidad = j;
        } else {
          cantidad;
        }
      }
      console.log("La cantidad máxima de jeans es: ", cantidad);
      break;
    case clothing[1]:
      let stock1 = clothing[1].stock;
      let price1 = clothing[1].precio;
      let cantidad1 = 0;
      for (let j = 1; j <= stock1; j++) {
        if (capital > j * price1) {
          cantidad1 = j;
        } else {
          cantidad1;
        }
      }
      console.log("La cantidad máxima de shoes es: ", cantidad1);
      break;
    case clothing[2]:
      let stock2 = clothing[2].stock;
      let price2 = clothing[2].precio;
      let cantidad2 = 0;
      for (let j = 1; j <= stock2; j++) {
        if (capital > j * price2) {
          cantidad2 = j;
        } else {
          cantidad2;
        }
      }
      console.log("La cantidad máxima de T-shirt es: ", cantidad2);
      break;
    default:
      console.log("No hay producto seleccionado");
  }
}
