/* tenemos un capital de 200 dolares y tenemos 4 articulos
item|precio|stock
jeans|30|5
shoes|70|7
T-shirt|15|4
¿Cuantas mudas de ropa puedo comprar con esos 200 dolares?
¿Cuantos zapatos puede comprar?
cuantas camisas puedo comprar?
cuantos Jean puedo comprar? */

//Realización del arreglo de ropa
let clothings = [
  { id: 1, clothing: "jeans", price: 30, stock: 5 },
  { id: 2, clothing: "shoes", price: 70, stock: 7 },
  { id: 3, clothing: "T-shirt", price: 15, stock: 4 },
];

let capital = 250;
let maxValue = clothings[0].stock;

//Obtener el mayor valor de stock
for (var i = 0; i < clothings.length; i++) {
  var currentValue = clothings[i].stock;

  if (currentValue > maxValue) {
    maxValue = currentValue;
  }
}

//Hacemos la sumatoria de la muda y comparamos con el capital
let acumulador2 = 0;
let muda = 0;
for (var j = 1; j < maxValue; j++) {
  acumulador2 =
    (clothings[0].price + clothings[1].price + clothings[2].price) * j;
  if (capital > acumulador2) {
    muda = j;
  } else {
  }
}
console.log("La cantidad de muda es:", muda);
console.log("-----Resolución con Switch---------");

for (let i = 0; i < clothings.length; i++) {
  let stock = clothings[i].stock;
  let priceClothing = clothings[i].price;
  let cantidad = 0;

  for (let j = 1; j <= stock; j++) {
    if (capital > j * priceClothing) {
      cantidad = j;
    } else {
      cantidad;
    }
  }

  console.log(`La cantidad máxima de ${clothings[i].clothing} es: `, cantidad);
}

//Resolución con switch
console.log("-----Resolución con Switch---------");
for (let i = 0; i < clothings.length; i++) {
  switch (clothings[i]) {
    case clothings[0]:
      let stock = clothings[0].stock;
      let priceClothing = clothings[0].price;
      let cantidad = 0;
      for (let j = 1; j <= stock; j++) {
        if (capital > j * priceClothing) {
          cantidad = j;
        } else {
          cantidad;
        }
      }
      console.log("La cantidad máxima de jeans es: ", cantidad);
      break;
    case clothings[1]:
      let stockClothing1 = clothings[1].stock;
      let priceClothing1 = clothings[1].price;
      let cantidad1 = 0;
      for (let j = 1; j <= stockClothing1; j++) {
        if (capital > j * priceClothing1) {
          cantidad1 = j;
        } else {
          cantidad1;
        }
      }
      console.log("La cantidad máxima de shoes es: ", cantidad1);
      break;
    case clothings[2]:
      let stockClothing2 = clothings[2].stock;
      let priceClothing2 = clothings[2].price;
      let cantidad2 = 0;
      for (let j = 1; j <= stockClothing2; j++) {
        if (capital > j * priceClothing2) {
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
