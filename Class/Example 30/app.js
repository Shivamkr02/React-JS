class Emp {
    static companyName="Amazon";
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    show(){
        document.write(`name:${this.name}, age:${this.age},company:${Emp.companyName}<br>`);
    }  
    static changeCompanyName() {
        //this.companyName() = "Google"; // Using "this" in a static method is same as using class name
        Emp.companyName = "Google";
    }
}
let e1 = new Emp("Shivam",24);
let e2 = new Emp("Shristi",32);
e1.show();
e2.show();
Emp.companyName = "Google";
document.write(`After Company change<br>`);
e1.show();
e2.show();