function marksheet(name,...marks){
   document.write(`Name is ${name}<br>`);
   let sum =0;
   marks.forEach((m)=>{
    sum += m;
   });
   document.write(`Total Marks: ${sum}<br><br>`);
}
marksheet("Shristi",90,63,45,85,95);
marksheet("Shivam",90,63,45,85);
marksheet("Aditya",40,83);
marksheet("Priya",63,45,25);