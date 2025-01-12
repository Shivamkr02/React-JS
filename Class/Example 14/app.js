class Emp{
    constructor(id,name,sal) { 
        this.id = id;
        this.name = name;
        this.sal = sal;
    }
    raiseSalary(per){
        this.sal = this.sal+(this.sal*per/100);
    }
    toString(){
        return `id: ${this.id}, name: ${this.name}, sal: ${this.sal}`;
    }
}

let e1 = new Emp(101,"Shristi",80000.0);
document.write(`${e1}<br>`);

let e2 = new Emp(102,"Shivam",120000.0);
document.write(`${e2}<br>`);
