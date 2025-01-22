class Person {
    constructor(age,fname,lname){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    getFullName() {
        return this.fname + " " + this.lname;
    }
    set fullName(name) {
        let arr = name.split(" ");
        this.fname = arr[0];
        this.lname = arr[1];
    }
    set age(x){
        if(x<0) {
            throw new Error("Invalid age!");
        }
        this._age = x;
    }
    get age() {
        return this._age; 
    }
}  
let p = new Person(34,"Sachin","Kapoor");
document.write(`${p.fullName}, `);
document.write(`${p.age}`);
p.fullName = "Shivam Kumar";  // p.setFullname("Shivam Kumar") 
p.age = -25;
document.write(`<br>${p.fullName}`);
document.write(`${p.age}`);
