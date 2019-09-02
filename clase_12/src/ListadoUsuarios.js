import React from "react"
import {connect} from "react-redux"
import {borrarUsuario,seleccionarUsuario,pedirUsuarios} from "./api/actions"
import {bindActionCreators} from "redux"

class ListadoUsuarios extends React.Component {

    componentDidMount(){
        if (this.props.fetched) return;
        this.props.pedirUsuarios()
    }

    render(){
        let {usuarios,borrarUsuario,seleccionarUsuario} = this.props
        return(
            <ul>
            {usuarios.length 
            ? usuarios.map((usuario,i)=>
                <li key={i}> {usuario.nombre} {usuario.apellido} <button className="material-icons" onClick={()=>{seleccionarUsuario(i)}}>create</button> <button className="material-icons" onClick={()=>{borrarUsuario(i)}}>clear</button> </li>
            )
            : <li>No hay usuarios</li>}
            </ul>
        )
    }
}

let mapStateToProps = store => ({
    usuarios:store.usuarios,
    fetched:store.fetched,
})

let mapDispatchToProps = dispatch => ({
    seleccionarUsuario : bindActionCreators(seleccionarUsuario,dispatch),
    borrarUsuario : bindActionCreators(borrarUsuario,dispatch),
    pedirUsuarios : bindActionCreators(pedirUsuarios,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(ListadoUsuarios)

