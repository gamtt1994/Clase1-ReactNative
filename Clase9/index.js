const color = ["hola", "chau"];
const clonecolor = [...color];
console.log("clone ...", color === clonecolor);

const cloneConcat = [].concat(clonecolor);
console.log("clone concat", color === cloneConcat);

const cloneSlice = color.slice();
console.log("clone slice ", color === cloneSlice);

const number = [1];

console.log(number.includes(2));
console.log(number.includes(200));

const numberA = [1, 2, 3, 4, 5];
const isEven = (number) => {
  return number % 2 === 0;
};

const eventNumber = numberA.find(isEven);
console.log(eventNumber);

const numbersB = [1, 5, 7, 11, 22];
const odds = [1, 3, 3, 3];

console.log(numbersB.some(isEven));

const names = ["batman", "catwoman", "joken", "robin"];
const fromIndex = 1;
const removeCount = 2;

const newNames = [
  ...names.slice(0, fromIndex),
  ...names.slice(fromIndex + removeCount),
];

console.log(newNames);

const colorsC = ["Blue", "Red", "Yellow"];
console.log((colorsC.length = 0));

console.log("ColorsC", colorsC);

const colorsCD = ["Blue", "Red", "Yellow"];
console.log("splice... colorsCD ", colorsCD.splice(0, 0));

const numbersX = [1, 2, 3, 4, 5];
numbersX.fill(0);
console.log("numbersX", numbersX);

const lengthB = 3;
const zeros = Array(lengthB).fill(0);
console.log(zeros);

const numberValid = [0, [1, 3, 5], [2, 4, 6]];
const flatArray = numberValid.flat();
console.log("Flat ...", flatArray);

const letters = ["B", "H", "D", "J", -1];
letters.sort();

console.log("sort...", letters);

const numbersR = [4, 3, 1, 2];

const compare = (n1, n2) => {
  if (n1 % 2 === 0 && n2 % 2 !== 0) {
    console.log("nif1", n1, "n2if1", n2);
    return -1;
  }
  if (n1 % 2 !== 0 && n2 % 2 == 0) {
    console.log("nif1", n1, "n2if1", n2);
    return -1;
  }
  return 0;
};

numbersR.sort(compare);
console.log(numbersR);
