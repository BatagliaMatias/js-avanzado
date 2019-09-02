import React, { Component } from 'react'
import Home from "./paginas/Home.js"
import Perfil from "./paginas/Perfil.js"
import Portfolio from "./paginas/Portfolio.js"
import Contacto from "./paginas/Contacto.js"
import {Switch,Route} from "react-router-dom"

class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path="/" children={props=><Home {...props}/>} exact/>
                    <Route path="/perfil" component={Perfil}/>
                    <Route path="/portfolio" component={Portfolio}/>
                    <Route path="/contacto" children={props=><Contacto {...props}/>}/>
                </Switch>
            </main>
        )
    }
}

export default Main