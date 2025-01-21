class Emp {
    constructor(id,name,sal) {
        this.id = id;
        this.name = name;
        this.sal = sal;
        document.write("Emp object created...<br>");
    }
    toString(){
        return `id: ${this.id}, name: ${this.name}, sal: ${this.sal}`;
    }
}
class Manager extends Emp{
    constructor(id,name,sal,bonus){
        super(id,name,sal);
        this.bonus = bonus;
        document.write("Manager object created...<br>");
    }
    toString(){
        return `${super.toString()}, dept: ${this.bonus}`;
    }
}
let boss = new Manager(101,"Shristi",80000.0,5000.0);
document.write(`${boss}<br>`);
