import {greetings as wishes,PI,arr} from "./welcome.js";

function greetings(name){
    console.log(`Good Morning ${name}`);
}
greetings("Shivam");
wishes("Shristi");
console.log("PI is",PI);

for(let n of arr){
    console.log(n);

}