//Clase 2 - Objetos
const objetLiteral = {};
const objectConstructor = new Object();

const employee = {
  name: "Daniel",
  career: "Software development",
  weapon: "axe",
  age: 27,
  greet1: function () {
    return `Hi, my name is ${this.name}`;
  },
  isStudent: false,
};

console.log("Employee object", employee);

// Cambiar los valores de una propiedad
console.log("age", employee.age);
employee.age = 28;
console.log("Change age", employee.age);
employee["age"] = 29;
console.log("Change age2", employee.age);
//
employee.fight = function () {
  return `Gustavo Attacks with ${this.weapon}`;
};
console.log("Action Player", employee.fight());
//
console.log("carrer property", employee.career);
console.log("carrer property", employee["career"]);
console.log("carrer property", employee.greet1());
//Eliminar una propiedad
delete employee.weapon;
console.log("Employee object", employee);

for (let key in employee) {
  console.log(employee[key]);
}

for (let key in employee) {
  console.log(key.toUpperCase() + ":", employee[key]);
}
console.log("Objects key", Object.keys(employee));
