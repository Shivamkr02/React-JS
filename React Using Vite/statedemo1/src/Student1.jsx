import { Component } from 'react';

export default class Student1 extends Component {
    state = {name: "Shivam",roll: 101};
  render() {
    return (
      <div>
        <p>Name is {this.state.name}</p>
        <p>Roll is {this.state.roll}</p>
      </div>
    );
  }
}
