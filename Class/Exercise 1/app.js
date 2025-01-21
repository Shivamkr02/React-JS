class Car{
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    age(year1){
        //this.year = year1 - this.year;
        return year1 - this.year;
    }
    toString(){
        return `Name: ${this.name}, Year: ${this.year}`;
    }
}
let date = new Date();
let year  = date.getFullYear();

let c1 = new Car("Harrier",2020);
document.write(`${c1}<br>`);

document.write(`Age: ${c1.age(year)}`);