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
