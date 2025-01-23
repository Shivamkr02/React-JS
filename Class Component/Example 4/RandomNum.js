function getRandomNumber() {
    let arr = [10, 6, 7, 11, 34, 89, 65, 44, 58, 90, 12];
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }
  class RandomNum  extends React.Component{
    render(){
      let num = getRandomNumber();
    let msg = null;
    if(num===6){
        msg = (<div>
                <h3>Congratulations ! You won</h3>
                <img src="https://shorturl.at/OGQxj" alt=""/>
            </div>
          );
    }
    else{
        msg=<small>sorry! Better luck next time</small>;
    }
    return (<div><p>You got the number {num}</p>{msg}</div>);
  }
}
