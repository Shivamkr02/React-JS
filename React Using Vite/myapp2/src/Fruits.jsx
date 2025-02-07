import React, {Component} from 'react'
import foods from  from './foods'
export default class Fruits extends Component {
    render() {
        return (
            <div>
                <p>Total fruits: {foods}</p>
            </div>
        )
    }
}