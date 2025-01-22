class Emp {
    #salary;
    constructor(age,name,sal){
        this.age = age;
        this.name = name;
        this.#salary = sal;
    }
    show(){
        document.write(`age: ${this.age}, name: ${this.name}, sal: ${this.#salary}<br>`);
    }
}
let obj1 = new Emp(23,"Shristi",80000.0);
let obj2 = new Emp(25,"Shivam",90000.0);

// console.log(obj);
obj1.show();

obj2.show();
