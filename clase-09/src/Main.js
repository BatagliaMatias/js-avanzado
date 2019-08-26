import React, { Component } from 'react'
import Home from "./paginas/Home.js"
import Perfil from "./paginas/Perfil.js"
import Portfolio from "./paginas/Portfolio.js"
import Contacto from "./paginas/Contacto.js"
import {Switch,Route} from "react-router-dom"

export default class Main extends Component {
    render() {
        let {mostrar,contador,nombre,apellido,handleChange,handleMostrar,handleSubmit,aumentarContador} = this.props
        return (
            <main>
                <Switch>
                    <Route path="/" children={props=>
                        <Home {...props} contador={contador} aumentarContador={aumentarContador}/>
                    } exact/>

                    <Route path="/perfil" component={Perfil}/>
                    <Route path="/portfolio" component={Portfolio}/>

                    <Route path="/contacto" children={props=>
                        <Contacto {...props} mostrar={mostrar} apellido={apellido} nombre={nombre} handleChange={handleChange} handleSubmit={handleSubmit} handleMostrar={handleMostrar}/>
                    }/>
                </Switch>
            </main>
        )
    }
}
