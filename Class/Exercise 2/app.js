class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area(){
        let cal1 = Math.PI * Math.pow(this.radius,2);
        return cal1.toFixed(2);
    }
}
class cylinder extends Circle {
    constructor(radius,height){
        super(radius);
        this.height = height;
    }
    area(){
        // 2*pi*rad^2+2*pi*rad*height
        let cal2 = 2*Math.PI * this.radius *this.height;
        return (2*super.area()+cal2).toFixed(2);
    }
    volume() {
        return (super.area() * this.height).toFixed(2);
    }
}
let obj = new cylinder(5,10);
document.write(`Area is ${obj.area()}<br>`);
document.write(`<br>Volume is ${obj.volume()}<br>`);