function choice(foods){
    let randomIndex=Math.floor(Math.random()*foods.length);
    return foods[randomIndex];
}

function remove(items,item){
    let arr = [...items];
    let index = arr.indexOf(item);
    arr.splice(index,1);
    return arr;
}
export {choice,remove};