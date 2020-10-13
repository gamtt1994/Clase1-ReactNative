const balance = 500;
const jeans = 40;

if (jeans <= balance) {
  console.log("You have enough money to purchase the item!");
} else {
  console.log("You don´t have enough money to purchase the item!");
}

let grade = 87;
if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else {
  console.log("F");
}

let age = 28;
const oldEnough = age >= 21 ? "You may enter" : "You may not enter";
console.log(oldEnough);

const day = new Date().getDay();

switch (day) {
  case 1:
    console.log("Happy Mondar");
    break;
  case 2:
    console.log("It tuesday, you got this!");
    break;
  case 3:
    console.log("Hump day already!");
    break;
  case 4:
    console.log("Just one more day 'til the wekend");
    break;
  case 5:
    console.log("Happy Friday!");
    break;
  case 6:
    console.log("Have a wonderful saturday");
    break;
  case 7:
    console.log("It sunday time to relax");
    break;
  default:
    console.log("something wont horribly wrong...");
}
