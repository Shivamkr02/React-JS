let arr = [10,20,30];
let brr = [...arr] ;   // Deep copy
document.write(`${arr === brr}<br>`);
document.write("<br>arr data<br>");
brr.push(40);
arr.forEach((x) =>{
    document.write(`${x}<br>`);
});
document.write("<br>brr data<br>");
brr.forEach((x)=>{
    document.write(`${x}<br>`);
});