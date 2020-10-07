function Vecicle(name, maker) {
  this.name = name;
  this.maker = maker;
}

//Diseño de patrones
let car1 = new Vecicle("Fiesta", "Ford");
let car2 = new Vecicle("Fiesta2", "Ford2");

console.log("card1", car1);

let car = Object.create(Object.prototype, {
  name: {
    value: "fiesta",
    configurable: true,
    writable: true,
    enumerable: false,
  },

  maker: {
    value: "Fork",
    configurable: true,
    writable: true,
    enumerable: false,
  },
});

console.log("card", car.maker);

class Vehicles {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
  start() {
    console.log("Starting...");
  }
}

let bike1 = new Vehicles("Hayabusa", "Suzuki", "1340cc");

bike1.start();
bike1.brake = function () {
  console.log("Applying Brake...");
};
console.log("bike", bike1.engine);
bike1.brake();
console.log("bike1 Final", bike1);
