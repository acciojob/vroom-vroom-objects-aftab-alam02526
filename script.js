// Complete the js code
// 1. Car class
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getMakeModel() {
    return `${this.make} ${this.model}`;
  }
}

// 2. SportsCar class that inherits from Car
class SportsCar extends Car {
  constructor(make, model, topSpeed) {
    super(make, model); // Call parent constructor
    this.topSpeed = topSpeed;
  }

  getTopSpeed() {
    return this.topSpeed;
  }
}

// ===== Usage Example =====
const myCar = new SportsCar("Ferrari", "Testarossa", 200);

console.log(myCar.getMakeModel()); // Output: Ferrari Testarossa
console.log(myCar.getTopSpeed());  // Output: 200
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
