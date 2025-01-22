function add(...args){
    document.write(`Length of args is ${args.length}<br>`);
    let sum=0;
    args.forEach((x)=> {
        sum+=x;
    });
    document.write(`Sum is ${sum}<br><br>`);
}
add(10,20); // Sum is 30
add(5,7,9,12); // Sum is 12
add(6,8,9); // Sum is 14