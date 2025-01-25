function add(...args){
   let sum = 0;
  args.forEach((x)=>{
   sum = sum+x;
  });
  document.write(`Sum is ${sum}<br>`);
}
let nums = [10,20,50,63];
add(...nums);
let nums2 = [10,20,63];
add(...nums2);
let nums3 = [15,63];
add(...nums3);

