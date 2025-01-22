let arr = [10,20,30];
let brr = [40,50,60];  
let crr = [5,7,...arr,35,45,...brr,70,80,90]; // Deep copy
crr.forEach((x) =>{
    document.write(`${x}<br>`);
});
