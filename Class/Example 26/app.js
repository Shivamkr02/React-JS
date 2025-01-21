class Emp {
    constructor(id,name,sal) {
        this.id = id;
        this.name = name;
        this.sal = sal;
        document.write("Emp object created...<br>");
    }
    raiseIncome(){
        this.sal = this.sal + this.sal * 0.1;
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
    raiseIncome(){   // This is called method overriding
        super.raiseIncome();
        this.bonus = this.bonus+this.bonus*0.1;
    }
    toString(){     // This is called method overriding
        return `${super.toString()}, Bonus: ${this.bonus}`;
    }
}
let boss = new Manager(101,"Shristi",80000.0,5000.0);
document.write(`${boss}<br>`);
document.write("<br>After Increment <br>");
boss.raiseIncome();
document.write(`${boss}`);
