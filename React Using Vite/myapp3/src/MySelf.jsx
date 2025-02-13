import { Component } from 'react';
import shivam from './assets/react.svg';

export default class MySelf extends Component {
    render() {
        console.log(shivam,typeof shivam);
        return (
            <div>
                <p>This is me!</p>
                <img src={shivam} alt="shivam" />
                <p>This is my Laptop</p>
                <img src="https://m.media-amazon.com/images/I/61v405rSEeL._SX679_.jpg" alt="laptop" />
            </div>
        );
    }
}
