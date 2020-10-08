/*Ejemplo de funciones
var example = function(){

}
example();

var example2 =  () =>{

}
example2();
*/

let fish = ["pirnha", "barracuda", "cod"];
console.log("---Foreach---");
fish.forEach((individual) => {
  console.log(individual);
});
console.log("---For---");
for (let i = 0; i < fish.length; i++) {
  console.log(fish[i]);
}
console.log("---Map---");
fish.map((item) => {
  console.log(item);
});

console.log("---Map---");
let printFish = fish.map((item) => {
  return item;
});

console.log("printFish", printFish);

let pluralFish = fish.map((individual) => {
  return `${individual}s`;
});
console.log("pluralFish", pluralFish);

let seaCreatures = [
  "shark",
  "whale",
  "squid",
  "startfish",
  "cuttlefish",
  "eel",
];
let filterlist = seaCreatures.filter((creature) => {
  return creature[0] === "s";
});

console.log("filterlist", filterlist);

let numbers = [12, 15, 16, 20, 30, 50, 70, 80];
let sum = numbers.reduce((a, b) => {
  return a + b;
});

console.log("sum reduce", sum);

const iscephalod = (cephalod) => {
  return ["cuttlefish", "octupush"].includes(cephalod);
};

console.log("find", seaCreatures.find(iscephalod));
console.log("find", seaCreatures.findIndex(iscephalod));

const isThere = (eel) => {
  return ["eel"].includes(eel);
};

console.log("findIndexOf", seaCreatures.findIndex(isThere));

var operatives = [
  { id: 1, name: "Daniel soto", student: false },
  { id: 2, name: "Jose gallese", student: true },
];

var listHasStudent = operatives.some((operative) => {
  return operative.student;
});

var listHasStudent2 = operatives.every((operative) => {
  return operative.student;
});

console.log(listHasStudent);
console.log(listHasStudent2);
