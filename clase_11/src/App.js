import React , {Component} from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import {Provider} from "./api/contexto"

class App extends Component {

    constructor(){
        super()
        this.state = {
            links : ["perfil","portfolio","contacto"],
            contador : 0,
            mostrar : false,
            nombre : "",
            apellido : "",
        }
        this.aumentarContador = this.aumentarContador.bind(this)
        this.handleMostrar = this.handleMostrar.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    aumentarContador(){
        this.setState({contador : this.state.contador + 1})
    }

    handleMostrar(){
        this.setState({mostrar : !this.state.mostrar})
    }

    handleSubmit(e/* n,a */){
        e.preventDefault()
        //Formas de manejar un formulario 

        //1) Selectores
        //let nombre = document.querySelector("#nombre").value
        //let apellido = document.querySelector("#apellido").value

        //2) Refs = usar props ref en cada elemto del DOM 
        //let nombre = n.value
        //let apellido = a.value
         
        //3) Event
        //let nombre = e.target[0].value
        //let apellido = e.target[1].value

        //4) Controlled Component : Cada control de formular (input - select - textarea ) va a tener un evento tal que guarde cada cambio de valor Y ADEMAS manterner el evento de submit

        //console.log(nombre,apellido)
    }

    handleChange(e){
        /* 
        let obj = {}
        obj[e.target.id] = e.target.value
        console.log(obj)
        this.setState(obj)
        */
        this.setState({ [e.target.id] : e.target.value })
    }

    render(){
        
        let {links,contador,mostrar,nombre,apellido} = this.state
        let {handleMostrar,handleSubmit,aumentarContador,handleChange} = this

        return (
            <Provider value={this.state}>
                <Header/>
                
                <Main handleChange={handleChange} handleMostrar={handleMostrar} handleSubmit={handleSubmit} contador={contador} mostrar={mostrar} nombre={nombre} apellido={apellido} aumentarContador={aumentarContador}/>
                
                <Footer/>
            </Provider>
        )      
    }
    
}

export default App 

