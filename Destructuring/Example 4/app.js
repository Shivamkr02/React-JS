let person = [21,"Shristi"];
let [age=25,name,salary=50000.0] = person; // Using default value with destructuring
document.write(`${age},${name},${salary}`);