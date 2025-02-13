import { Component } from 'react'

export default class Timer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {timestamp:new Date()};
    setInterval(this.updateTime,1000);
  }
  updateTime=()=>{
    this.setState({timestamp:new Date()});
  }
    render() {
    return (
      <div>
        <h2>Hello Everyone</h2>
        <p>Current date and time are: {this.state.timestamp.toLocaleString()}</p>
      </div>
    )
  }
}
