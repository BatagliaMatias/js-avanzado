import React from "react"
import Formulario from "../Formulario"
import ListadoUsuarios from "../ListadoUsuarios";

class Contacto extends React.Component {

    render(){
        return(
            <>
            <h2>Contacto</h2>
            <Formulario/>
            <ListadoUsuarios/>
            </>
        )
    }
}

export default Contacto