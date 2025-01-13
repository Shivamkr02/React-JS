class Emp {
    constructor(id,name,sal){
        this.id  = id;
        this.name = name;
        this.sal = sal;
    }
    display(){
        document.write(`id: ${this.id}, name: ${this.name}, sal: ${this.sal}<br>`); 
    }
}
class Manager extends Emp {
    
}
let boss = new Manager(101,"Shristi",50000.0);
boss.display();