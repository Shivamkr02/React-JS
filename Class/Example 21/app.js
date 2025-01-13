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
        this.color = "blue";
        document.write(`Vehicle Created...<br>`);
    }
    reverse() {
        document.write(`Car is reversing...<br>`);
    }
}
let audi = new Car();
audi.accelarate();
audi.reverse();