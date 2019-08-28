import React from "react"


class Formulario extends React.Component {

    render(){
        let {mostrar,handleMostrar,handleSubmit,handleChange,nombre,apellido} = this.props
        return(
            <>
            {mostrar
            ?<form onSubmit={
            /* 
            Esta es para la segunda forma del submit

            e=>{
                e.preventDefault()
                handleSubmit(this.refs.nombre,this.refs.apellido)
            } 
            */
           handleSubmit
           }>               
                <div>
                    <input onChange={handleChange} type="text" placeholder="Nombre" id="nombre" value={nombre}/*ref="nombre"*//>
                </div>
                <div>
                    <input onChange={handleChange} type="text" placeholder="Apellido" id="apellido" value={apellido}/*ref="apellido"*//>
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