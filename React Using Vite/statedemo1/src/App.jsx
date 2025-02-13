import { Component } from 'react';
import Student1 from './Student1';
import Student2 from './Student2';

export default class App extends Component {
  constructor(props ){
    super(props);
    this.state={name: this.props.name, roll: this.props.roll}
  }
  render() {
    return (
      <div>
        <Student1/>
        <Student2/>
        <Student3 name="Shiva" roll={103}/>
      </div>
    )
  }
}
