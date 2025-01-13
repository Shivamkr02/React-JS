class Emp {
    constructor(id,name,sal){
        this.id  = id;
        this.name = name;
        this.sal = sal;
        document.write(`Employee created... <br>`);
    }
    display(){
        document.write(`id: ${this.id}, name: ${this.name}, sal: ${this.sal}<br>`); 
    }
}
class Manager extends Emp {
    constructor(){
        super();
        document.write(`Manager created ... <br>`);
    }
}
let boss = new Manager(101,"Shristi",50000.0);
boss.display();