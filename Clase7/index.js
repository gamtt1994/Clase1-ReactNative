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
