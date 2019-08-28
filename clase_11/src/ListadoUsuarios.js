import React from "react"
import contexto,{Consumer} from "./api/contexto"

class ListadoUsuarios extends React.Component {

    componentDidMount(){
        if (this.context.fetched) return;
        this.context.pedirUsuarios()
    }

    render(){
        /* let {usuarios,borrarUsuario,seleccionarUsuario} = this.props */
        return(
            <ul>
            <Consumer>
            {contexto=>{
                let {usuarios,borrarUsuario,seleccionarUsuario} = contexto    
                return  usuarios.length 
                        ? usuarios.map((usuario,i)=>
                            <li key={i}> {usuario.nombre} {usuario.apellido} <button className="material-icons" onClick={()=>{seleccionarUsuario(i)}}>create</button> <button className="material-icons" onClick={()=>{borrarUsuario(i)}}>clear</button> </li>
                        )
                        : <li>No hay usuarios</li>
            }}
            </Consumer>
            </ul>
        )
    }
}

//Para generar una propiedad/metodo estatico en una clase en JS, creo una nueva propiedad directamente adentro de la funcion/clase componente. Para usar esta propiedad estatica como contexto, obligatoriamente se tiene que llamar contextType y la misma tiene que estar igualada a todo el contexto entero, ni el Consumer ni el Provider sino todo el retorno de createContext
ListadoUsuarios.contextType = contexto
//Cuando el contexto se asocia como propiedad estatica de la clase , tenemos habilitado la opcion "this.context.loQueSea"

export default ListadoUsuarios

