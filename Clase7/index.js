function greet(name) {
  console.log(`hello!, ${name}`);
}

greet("hola");

const sum = function add(x, y) {
  console.log(`add`, x + y);
  return x + y;
};

sum(2, 7);

const multiply = (x, y) => {
  console.log(`multiply`, x * y);
  return x * y;
};
multiply(12, 4);

const square = (x) => {
  console.log("square", x * x);
};
square(2);

const squareSimply = (x) => console.log("squareSimply", x * x);
squareSimply(4);

let priceProduct = [10, 12, 13];

const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  console.log(`El total es: `, total);
};
bill(priceProduct, 0.18);

function showMessage(name, surname) {
  console.log(`hello ${arguments[0]} ${arguments[1]}`);
}

showMessage("Daniel", "Soto");

function showMessages() {
  for (let i = 0; i < arguments.length; i++) {
    console.log("arguments", arguments[i]);
  }
}

showMessages("Daniel", "Gustavo");
//Funcion anidada
function multiple(x) {
  function fn(y) {
    return x * y;
  }
  return fn;
}

let triple = multiple(3);

console.log(`triple`, triple(3));

function messages(name) {
  function hello() {
    console.log(`Hello, ${name}`);
  }
  return hello();
}

messages("Daniel");
