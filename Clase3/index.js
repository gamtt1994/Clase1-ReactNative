let oceans = ["Pacifico", "Atlantico", "Indian", "Arctico", "Antartico"];

console.log("oceans", oceans[0]);

let shark = ["blanco", "tigre", "gato"];

console.log("oceans", oceans[0]);

let mixedData = ["string", null, 7, ["another", "array"]];
console.log("mixedData", mixedData[3]);

console.log("length", mixedData.length);

console.log("indexOf", mixedData.indexOf("string"));

const lasindex = mixedData.length - 1;

console.log("lasindex", lasindex);

let nestedarray = [
  ["salmon", "halibut"],
  ["coral", "reef"],
];

console.log(nestedarray, nestedarray[1][0]);

//Tenemos que tener cuidado porque puede agregar indefinido dependiendo de la posicion que se le asigne
shark[3] = "whale";
console.log("shark modified", shark);

shark.push("pikachu");
console.log("shark modified", shark);

//Añade un valor en la posicion 0
shark.unshift("charizard");
console.log("shark modified unshift", shark);

//Elimina el ultimo valor
shark.pop();
console.log("shark pop", shark);

//Eliminar un valor por posicion
shark.splice(2, 1);
console.log("shark splice", shark);

//Eliminar el primer elemento
shark.shift();
console.log("shark shift", shark);

//reemplazar un elemento
shark.splice(2, 1, "sea");
console.log("shark splice", shark);

let shellfish = ["oyster", "shrimp", "raichu"];

shellfish.splice(shellfish.length / 2, 0, "ash");
console.log("shark splice", shellfish);

//loop - for
for (let i = 0; i < shellfish.length; i++) {
  console.log(i, shellfish[i]);
}

//loop - for of
let mamals = ["ash", "brok", "gary"];
for (let mamal of mamals) {
  console.log(mamal);
}

//Valida si es un array o no
let fish = ["golfish", "golden", "goldux"];
console.log("isArray", Array.isArray(fish));

fish.reverse();
console.log("reverse", fish);

fish.sort();
console.log("sort", fish);

let numbers = [2, 90, 200, 50];
numbers.sort();
console.log("sort", numbers);

const sortNuymerica = (a, b) => {
  return a - b;
};

numbers.sort(sortNuymerica);
console.log(numbers.sort(sortNuymerica));

//AñADIR 2 ARRAY
let bike = ["susuki", "yamaha"];
let cars = ["fork", "nissan"];

let vehicle = bike.concat(cars);
console.log(vehicle);

//join
let bike2 = ["susuki", "yamaha", "yamaha2", "yamaha3"];
let vehicle2 = bike2.join("/");
console.log(vehicle2);
let almacenar = bike2.slice(2, 0);
let almacena2 = bike2.slice(2);
console.log("slice", almacenar);
console.log("slice", almacena2);

let bike3 = ["susuki", "yamaha", "yamaha2", "yamaha3"];
console.log("slice", bike3.lastIndexOf("yamaha3"));
