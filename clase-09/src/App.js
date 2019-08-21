import React , {Component} from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import Contador from "./Contador"
//let App = () => <p>Hola Mundo App</p>

class App extends Component {

    constructor(){
        super()
        this.state = {
            links : ["perfil","portfolio","contacto"],
            contador : 0
        }
        this.aumentarContador = this.aumentarContador.bind(this)
    }

    aumentarContador(){
        this.setState({contador : this.state.contador + 1})
    }

    render(){
        
        let {links,contador} = this.state

        return (
            <>
            <Header links={links} />
            <Contador contador={contador} aumentar={this.aumentarContador}/>
            <Main/>
            <Footer/>
            </>
        )      
    }
    
}

//module.exports = App
//module.exports.Component = Component
export default App 

