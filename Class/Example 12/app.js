class Emp{
    constructor(id,name,sal) { 
        this.id = id;
        this.name = name;
        this.sal = sal;
    }
    raiseSalary(){
        this.sal = this.sal+this.sal*0.1;
    }
}

let e1 = new Emp(101,"Shristi",80000.0);
document.write(`id: ${e1.id}, name: ${e1.name}, sal: ${e1.sal}<br>`);

let e2 = new Emp(102,"Shivam",120000.0);
document.write(`id: ${e2.id}, name: ${e2.name}, sal: ${e2.sal}<br>`);
e1.raiseSalary();
e2.raiseSalary();
document.write(`After incrementing Salary <br>`);
document.write(`id: ${e1.id}, name: ${e1.name}, sal: ${e1.sal}<br>`);
document.write(`id: ${e2.id}, name: ${e2.name}, sal: ${e2.sal}<br>`);