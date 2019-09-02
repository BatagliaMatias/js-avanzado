import React from "react"
import contexto,{Consumer} from "./api/contexto"

class ListadoUsuarios extends React.Component {

    static contextType = contexto

    componentDidMount(){
        if (this.context.fetched) return;
        this.context.pedirUsuarios()
    }

    render(){
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

export default ListadoUsuarios

