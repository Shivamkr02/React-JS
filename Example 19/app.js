// This Will give Error
class Vehicle {
    constructor(){
        document.write(`Vehicle Created...<br>`)
    }
    accelarate() {
        document.write(`Vehicle is accelerating...<br>`);
    }
}
class Car extends Vehicle {
    constructor(){
        super();
        document.write(`Vehicle Created...<br>`);
        super(); // This line is Compulsory
    }
    reverse() {
        document.write(`Car is reversing...<br>`);
    }
}
let audi = new Car();
audi.accelarate();
audi.reverse();