const car = {
  noOfWheels: 4,
  start() {
    return `started`;
  },
  stop() {
    return `stopped`;
  },
};

const myCar = Object.create(car, { owner: { value: "Daniel" } });

console.log(`proto`, myCar.__proto__ == car);

console.log(myCar);
console.log(car);
