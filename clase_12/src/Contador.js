import React, { Component } from 'react'
import { Consumer } from './api/contexto'
import {connect} from "react-redux"

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


let mapStateToProps = store => ({ contador : store.contador })

export default  connect(mapStateToProps)(Contador)