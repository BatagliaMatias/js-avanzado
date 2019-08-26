import React from "react"
import Formulario from "../Formulario"

class Contacto extends React.Component {

    render(){
        let {mostrar,handleChange,handleMostrar,handleSubmit,nombre,apellido} = this.props
        return(
            <>
            <h2>Contacto</h2>
            <Formulario mostrar={mostrar} handleMostrar={handleMostrar} handleSubmit={handleSubmit} handleChange={handleChange} nombre={nombre} apellido={apellido}/>
            </>
        )
    }
}

export default Contacto