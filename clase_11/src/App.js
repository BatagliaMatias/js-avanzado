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
            usuarios : [],
            usuario : false
        }
        this.aumentarContador = this.aumentarContador.bind(this)
        this.handleMostrar = this.handleMostrar.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.borrarUsuario = this.borrarUsuario.bind(this)
        this.seleccionarUsuario = this.seleccionarUsuario.bind(this)
    }

    aumentarContador(){
        this.setState({contador : this.state.contador + 1})
    }

    handleMostrar(){
        this.setState({mostrar : !this.state.mostrar})
    }

    handleSubmit(e){
        e.preventDefault()
/* 
        let copia = this.state.usuarios.slice(0)
        copia.push({ nombre : this.state.nombre , apellido : this.state.apellido })
        this.setState({ usuarios : copia })
 */
        this.setState({ 
            usuarios : [ 
                ...this.state.usuarios ,
                { nombre : this.state.nombre , apellido : this.state.apellido }
            ] ,
            nombre : "" ,
            apellido : ""
        })
    }

    handleChange(e){
        this.setState({ [e.target.id] : e.target.value })
    }

    borrarUsuario(indice){
        console.log("Borrar Usuario",indice)
        console.log(this.state.usuarios[indice])
        this.setState({
            usuarios : [
                ...this.state.usuarios.slice(0,indice),
                ...this.state.usuarios.slice(indice+1)
            ]
        })
    }

    seleccionarUsuario(indice){
        console.log("Seleccionar Usuario",indice)
        console.log(this.state.usuarios[indice])
        let usuario = this.state.usuarios[indice]
        let nombre = this.state.usuarios[indice].nombre
        let apellido = this.state.usuarios[indice].apellido
        this.setState({ nombre , apellido , usuario })
    }

    render(){
        
        let {links,contador,mostrar,nombre,apellido,usuarios} = this.state
        let {handleMostrar,handleSubmit,aumentarContador,handleChange,borrarUsuario,seleccionarUsuario} = this

        return (
            <Provider value={this.state}>
                <Header/>
                
                <Main handleChange={handleChange} handleMostrar={handleMostrar} handleSubmit={handleSubmit} contador={contador} mostrar={mostrar} nombre={nombre} apellido={apellido} aumentarContador={aumentarContador} usuarios={usuarios} borrarUsuario={borrarUsuario} seleccionarUsuario={seleccionarUsuario}/>
                
                <Footer/>
            </Provider>
        )      
    }
    
}

export default App 

