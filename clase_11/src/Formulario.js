import React from "react"


class Formulario extends React.Component {

    render(){
        let {mostrar,handleMostrar,handleSubmit,handleChange,nombre,apellido} = this.props
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

export default Formulario