import React from "react"
import Formulario from "../Formulario"
import ListadoUsuarios from "../ListadoUsuarios";

class Contacto extends React.Component {

    render(){
        let {mostrar,handleChange,handleMostrar,handleSubmit,nombre,apellido,usuarios,borrarUsuario,seleccionarUsuario} = this.props
        return(
            <>
            <h2>Contacto</h2>
            <Formulario mostrar={mostrar} handleMostrar={handleMostrar} handleSubmit={handleSubmit} handleChange={handleChange} nombre={nombre} apellido={apellido}/>
            <ListadoUsuarios usuarios={usuarios} borrarUsuario={borrarUsuario} seleccionarUsuario={seleccionarUsuario}/>
            </>
        )
    }
}

export default Contacto