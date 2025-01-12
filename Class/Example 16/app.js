class Vehicle {
    constructor(){
        document.write(`Vehicle Created...<br>`)
    }
    accelarate() {
        document.write(`Vehicle is accelerating...<br>`);
    }
}
class Car extends Vehicle {
    reverse() {
        document.write(`Car is reversing...<br>`);
    }
}
let audi = new Car();
audi.accelarate();
audi.reverse();