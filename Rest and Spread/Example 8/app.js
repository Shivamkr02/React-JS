let arr = [10,20,30];
let brr = arr;   // Shallow Copy
document.write(`${arr === brr}<br>`);
brr.push(40);
arr.forEach((x) =>{
    document.write(`${x}<br>`);
});