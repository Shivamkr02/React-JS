import { Component } from 'react'

export default class ShoppingCart extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         items:this.props.items,
         count: this.props.items.length
      };
      setTimeout(this.updateCart,5000);
    }
    updateCart=()=>{
        let newItems=[...this.state.items,"Dell Inspiron-Laptop"];
        let newCount=this.state.count+1;
        this.setState({items: newItems,count:newCount});
    };
    
  render() {
    return (
      <div>
        <h2>Your Cart Details</h2>
        <p>Product Details:{this.state.items.join()}</p>
        <p>Item Count:{this.state.count}</p>
      </div>
    );
  }
}
