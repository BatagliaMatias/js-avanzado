import React, { Component } from 'react'
import { Consumer } from './api/contexto'

class Contador extends Component {
    render() {
        return (
            <div>
                <Consumer>
                {({contador,aumentarContador})=>{
                    return(
                        <>
                        <p>Contador : {contador}</p>
                        <button  onClick={aumentarContador}>+</button>
                        </>
                    )
                }}
                </Consumer>
            </div>
        )
    }
}

export default  Contador