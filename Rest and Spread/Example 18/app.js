let student1 = {
    roll: 12,
    name: "Shivam",
    marks: {phy: 50, chem: 60, maths: 70},
};
let student2 = JSON.parse(JSON.stringify(student1));
document.write(student1 === student2); // false
document.write("<br>");
student2.marks.phy = 100;
document.write(student2.marks.phy); // 100
document.write("<br>");
document.write(student1.marks.phy); // 100