function add(a,b,c){
   let d = a+b+c;
   document.write(`Sum is ${d}<br>`);
}
let nums = [10,20,50,63];
add(...nums);