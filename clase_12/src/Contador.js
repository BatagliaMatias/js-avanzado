import React, { Component } from 'react'
import {connect} from "react-redux"
import {aumentarContador,disminuirContador,resetearContador} from "./api/actions"
import { bindActionCreators } from 'redux'

class Contador extends Component {
    render() {
        let {contador,aumentarContador,disminuirContador,resetearContador} = this.props
        return (
            <div>
                <p>Contador : {contador}</p>
                <button onClick={aumentarContador}>+</button>
                <button onClick={disminuirContador}>-</button>
                <button onClick={resetearContador}>resetear</button>
            </div>
        )
    }
}


let mapStateToProps = store => ({ contador : store.contador })

let mapDispatchToProps = dispatch => ({
    //En el prop aumentarContador quiero que haya una combinacion entre(bindActionCreators) la funcion dispatch(la que recibo por parametro de redux) junto con mi acción (la que creamos en nuestro archivo actions)
    aumentarContador : bindActionCreators(aumentarContador,dispatch),
    disminuirContador : bindActionCreators(disminuirContador,dispatch),
    resetearContador : bindActionCreators(resetearContador,dispatch)
})

export default  connect(mapStateToProps,mapDispatchToProps)(Contador)