function doubler(x){
    return x*2;
}
let arr=[5,7,9,11,13];
let brr=[];
arr.forEach((x)=>{
    brr.push(doubler(x));
})
document.write(arr);
document.write("<br>");
document.write(brr);