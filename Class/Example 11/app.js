class Emp{
    constructor(id,name,sal) { 
        this.id = id;
        this.name = name;
        this.sal = sal;
    }
}

let e1 = new Emp(101,"Shristi",80000.0);
console.log(`id: ${e1.id}, name: ${e1.name}, sal: ${e1.sal}`);

let e2 = new Emp(); // This will give undefined output
console.log(`id: ${e2.id}, name: ${e2.name}, sal: ${e2.sal} `)