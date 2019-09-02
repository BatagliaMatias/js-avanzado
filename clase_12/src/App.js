import React , {Component} from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import {Provider} from "./api/contexto"

class App extends Component {

    constructor(){
        super()
        this.state = {
            contador : 0,
            mostrar : false,
            nombre : "",
            apellido : "",
            usuarios : [],
            usuario : false,
            error : false,
            fetching : false,
            fetched : false,
            changed : false,
            aumentarContador : this.aumentarContador.bind(this),
            handleMostrar : this.handleMostrar.bind(this),
            handleSubmit : this.handleSubmit.bind(this),
            handleChange : this.handleChange.bind(this),
            borrarUsuario : this.borrarUsuario.bind(this),
            seleccionarUsuario : this.seleccionarUsuario.bind(this),
            pedirUsuarios : this.pedirUsuarios.bind(this)
        }
    }

/*     
    let state = {
        usuarios = [false,false,false]
    }

    test(i){
        let copia = [...this.state]
        copia[i] = true
        this.setState({ usuarios : copia })
    }
    
 */
    pedirUsuarios(){
        
        this.setState({fetching : true})

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                usuarios : [
                    ...this.state.usuarios,
                    ...res.map(usuario=>({
                        nombre:usuario.name.split(" ")[0],
                        apellido:usuario.name.split(" ")[1]
                    }))
                ],
                fetching : false,
                fetched : true
            })
        })
        .catch(err=>{
            this.setState({
                error : err
            })
        })
    }

    aumentarContador(){
        this.setState({contador : this.state.contador + 1})
    }

    handleMostrar(){
        this.setState({mostrar : !this.state.mostrar})
    }

    handleSubmit(e){
        e.preventDefault()
        this.setState({ usuarios : [ ...this.state.usuarios ,{ nombre : this.state.nombre , apellido : this.state.apellido }] ,nombre : "" ,apellido : ""})
    }

    handleChange(e){
        this.setState({ [e.target.id] : e.target.value })
    }

    borrarUsuario(indice){
        this.setState({ usuarios : [...this.state.usuarios.slice(0,indice),...this.state.usuarios.slice(indice+1)]})
    }

    seleccionarUsuario(indice){
        this.setState({ nombre : this.state.usuarios[indice].nombre , apellido : this.state.usuarios[indice].apellido , usuario : this.state.usuarios[indice] })
    }

    render(){
        return (
            <Provider value={this.state}>
                <Header/>
                <Main/>
                <Footer/>
            </Provider>
        )      
    }
    
}

export default App 

