let person = [21,"Shristi",45000,["B.tech","M.tech","Phd"]];
let [age,name,salary,[deg1,deg2,deg3]] = person; // Using default value with destructuring
document.write(`${age},${name},${salary},${deg1},${deg2},${deg3}`);