class roundFight {
  constructor() {
    this.createCharacter = function (type, name) {
      let character;
      if (type === "hero") character = new Hero(name);
      else if (type == "villain") character = new Villain(name);

      return character;
    };
  }
}

class Hero {
  constructor(name) {
    this._type = "hero";
    this.name = name;
    this.attack = function () {
      return `The hero: ${name} this attacking`;
    };
    this.guard = function () {
      return `The hero: ${name} this defending`;
    };
  }
}

class Villain {
  constructor(name) {
    this._type = "villain";
    this.name = name;
    this.attack = function () {
      return `The villain: ${name} this attacking`;
    };
    this.guard = function () {
      return `The villain: ${name} this defending`;
    };
  }
}

// creating objects
const fight = new roundFight();

const createHero = fight.createCharacter("hero", "Gustavo");
const createVillain = fight.createCharacter("villain", "Alejandro");

console.log("Moving Hero: ", createHero.attack());
console.log("Moving Hero: ", createHero.guard());

console.log("Moving Villain: ", createVillain.attack());
console.log("Moving Villain: ", createVillain.guard());
