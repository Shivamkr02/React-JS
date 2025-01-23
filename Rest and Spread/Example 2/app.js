function add(){
   // document.write(`length of args is ${arguments.length}<br>`);
    let sum=0;
    arguments.forEach((x)=> {
        sum+=x;
    });
    document.write(`Sum is ${sum}<br><br>`);
}
add(10,20); // Sum is 30
add(5,7,9,12); // Sum is 12
add(6,8,9); // Sum is 14