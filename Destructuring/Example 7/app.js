function calculate(a,b){
    let x = a+b;
    let y = a-b;
    return [x+y];
}
let sum,diff;
[sum,diff] = calculate(10,20);
document.write(`${sum},${diff}`);