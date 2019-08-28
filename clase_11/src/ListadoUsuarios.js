import React from "react"

class ListadoUsuarios extends React.Component {

    render(){
        let {usuarios,borrarUsuario,seleccionarUsuario} = this.props
        return(
            <ul>
            {usuarios.length 
            ? usuarios.map((usuario,i)=>
                <li key={i}> 
                    {usuario.nombre} {usuario.apellido} 
                    <button className="material-icons" onClick={
                        ()=>{
                            seleccionarUsuario(i)
                        }
                    }>create</button> 
                    <button className="material-icons" onClick={
                        ()=>{
                            borrarUsuario(i)
                        }
                    }>clear</button> 
                </li>
            )
            : <li>No hay usuarios</li> }
            </ul>
        )
    }
}

export default ListadoUsuarios