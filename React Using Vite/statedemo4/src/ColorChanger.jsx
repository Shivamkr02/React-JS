import { Component } from 'react'

export default class ColorChanger extends Component {
    constructor(props){
        super(props)
        this.state = {backgroundColor:"red"};
        setInterval(this.changeColor,2000);
    }
    changeColor=()=>{
        let currColor=this.state.backgroundColor;
        currColor=currColor === "red" ? "blue" : currColor === "blue" ? "green" : "red";
        this.setState({backgroundColor: currColor});
    }
    render() {
        let myStyle = {
            width: "100vw",
            height: "100vh",
            backgroundColor : "orange",
        };
    return (
      <div style={myStyle}>
        
      </div>
    )
  }
}
