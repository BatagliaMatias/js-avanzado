import React, { Component } from 'react'
import Home from "./paginas/Home.js"
import Perfil from "./paginas/Perfil.js"
import Portfolio from "./paginas/Portfolio.js"
import Contacto from "./paginas/Contacto.js"
import {Switch,Route,Redirect} from "react-router-dom"

class Main extends Component {
    render() {
        let {mostrar,contador,nombre,apellido,handleChange,handleMostrar,handleSubmit,aumentarContador,usuarios,borrarUsuario,seleccionarUsuario} = this.props
        return (
            <main>
                <Switch>
                    <Route path="/" children={props=>
                        <Home {...props} contador={contador} aumentarContador={aumentarContador}/>
                    } exact/>

                    <Route path="/perfil" component={Perfil}/>
                    <Route path="/portfolio" component={Portfolio}/>

                    <Route path="/contacto" children={props=>
                        <Contacto {...props} mostrar={mostrar} apellido={apellido} nombre={nombre} handleChange={handleChange} handleSubmit={handleSubmit} handleMostrar={handleMostrar} usuarios={usuarios} borrarUsuario={borrarUsuario} seleccionarUsuario={seleccionarUsuario}/>
                    }/>

                    {/* <RutaPrivada path="/portfolio" component={Portfolio} /> */}
                </Switch>
            </main>
        )
    }
}

/* 
let RutaPrivada = props => {
    let isLogged = document.cookie.slice(0,...)
    let isLogged = localStorage.getItem("token")
    if(isLogged){
        return <Route {...props}/>
    }else{
        return <Redirect path="/"/>
    }
}

let RutaPublica = () => {} 
*/

export default Main