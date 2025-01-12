// This will Run but it will give undefined
class Emp{
    constructor() { 
        let id = 101;
        let names = "Shristi";
        let sal = 90000.0;
    }
}

let e1 = new Emp();
console.log(`id: ${e1.id}, name: ${e1.name}, sal: ${e1.sal}`);
