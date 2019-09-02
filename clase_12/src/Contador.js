import React, { Component } from 'react'
import {connect} from "react-redux"

class Contador extends Component {
    render() {
        let {contador} = this.props
        return (
            <div>
                <p>Contador : {contador}</p>
                <button  /* onClick={aumentarContador} */>+</button>
            </div>
        )
    }
}


let mapStateToProps = store => ({ contador : store.contador })

export default  connect(mapStateToProps)(Contador)