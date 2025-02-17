import { Component } from 'react'
export default class MyButton extends Component {
    handleClick = () => {
        alert(new Date());
    };
    render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}
