import React, { Component } from 'react'

//Uplifting de estado
export default class Contador extends Component {
    render() {
        let {contador,aumentar} = this.props
        return (
            <div>
                <p>Contador : {contador}</p>
                <button  onClick={aumentar}>+</button>
            </div>
        )
    }
}