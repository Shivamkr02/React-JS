import { Component } from 'react'

export default class Student3 extends Component {
  render() {
    return (
      <div>
        <p>Name is {this.state.name}</p>
        <p>Roll is {this.state.roll}</p>
      </div>
    );
  }
}
