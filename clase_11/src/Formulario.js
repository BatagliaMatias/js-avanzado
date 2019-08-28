import React from "react"
import { Consumer } from "./api/contexto"


class Formulario extends React.Component {

    render(){
        return(
            <Consumer>
            {({mostrar,handleChange,handleMostrar,handleSubmit,nombre,apellido})=>{
            return(<>
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
            }}
            </Consumer>
        )
    }
}

export default Formulario