function add(a,b){
   let c = a+b;
   document.write(`Sum is ${c}<br>`);
}
let nums = [10,20];
add(...nums);