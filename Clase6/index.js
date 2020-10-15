const popLimit = 10;
let fish = 0;

while (fish < popLimit) {
  fish++;
  console.log(`there room for ${popLimit - fish} more fish`);
}

let ice = true;
let polar = 5;

while (ice) {
  console.log(`there are ${polar} polar bears`);
  polar--;
  if (polar === 0) {
    console.log(`there are no polar bears`);
    break;
  }
}

let x = 0;
do {
  x++;
  console.log(x);
} while (false);

let rands = [];
let count = 0;
const size = 10;
while (count < size) {
  rands.push(Math.round(Math.random() * 10));
  count++;
  console.log(`the current size of the array is ${count}`);
}

console.log(rands);
console.log("----");

let iterations = 0;
top: for (let i = 0; i < 5; i++) {
  console.log("i", i);
  for (let j = 0; j < 5; j++) {
    console.log("j", j);
    iterations++;
    console.log("iterations", iterations);
    if (i === 2 && j === 2) {
      break top;
    }
  }
}
console.log(iterations);
