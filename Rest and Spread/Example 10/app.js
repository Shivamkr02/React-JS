let arr = [10,20,30];
let brr = [40,50,60] ;  
let crr = [...arr,...brr]; // Deep copy
crr.forEach((x) =>{
    document.write(`${x}<br>`);
});
