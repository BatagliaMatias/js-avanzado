import React from "react"
import {connect} from "react-redux"
import {handleMostrar,handleChange,handleSubmit} from "./api/actions"
import {bindActionCreators} from "redux"

class Formulario extends React.Component {

    render(){
        let {mostrar,handleChange,handleMostrar,handleSubmit,nombre,apellido} = this.props
        return(
            <>
            {mostrar
            ?<form onSubmit={handleSubmit}>               
                <div>
                    <input onChange={handleChange} type="text" placeholder="Nombre" id="nombre" value={nombre}/>
                </div>
                <div>
                    <input onChange={handleChange} type="text" placeholder="Apellido" id="apellido" value={apellido}/>
                </div>
                <button>Agregar</button>
            </form>
            :null}
            <button onClick={handleMostrar}>Mostrar</button>
            </>
        )
    }
}

let mapStateToProps = store => ({
    mostrar : store.mostrar,
    nombre : store.nombre,
    apellido : store.apellido
})

let mapDispatchToProps = dispatch => ({
    handleMostrar : bindActionCreators(handleMostrar,dispatch),
    handleChange : bindActionCreators(handleChange,dispatch),
    handleSubmit : bindActionCreators(handleSubmit,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Formulario)