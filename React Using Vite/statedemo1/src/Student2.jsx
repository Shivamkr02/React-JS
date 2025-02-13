import { Component } from 'react';

export default class Student2 extends Component {
    constructor(){
        super();
        this.state = {
            name: "Shristi",
            roll: 102,
        };
    }
  render() {
    return (
      <div>
        <p>Name is {this.state.name}</p>
        <p>Roll is {this.state.roll}</p>
      </div>
    );
  }
}
