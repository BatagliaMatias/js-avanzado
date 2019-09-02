let initState = {
    links : ["perfil","portfolio","contacto"],
    contador : 0,
    mostrar : false,
    nombre : "",
    apellido : "",
    usuarios : [],
    usuario : false,
    error : false,
    fetching : false,
    fetched : false,
    changed : false,
}

let reducer = (prevState=initState,action) => {
    switch(action.type){
        case "CONTADOR_SUMAR":
            return {...prevState,contador : prevState.contador + 1}
        case "CONTADOR_RESTAR":
            return {...prevState,contador : prevState.contador - 1}
        case "CONTADOR_RESET":
            return {...prevState,contador : 0}
        case "FORMULARIO_TOGGLE":
            return {...prevState,mostrar : !prevState.mostrar}
        case "FORMULARIO_CHANGE":
            return {...prevState,[action.payload.id]:action.payload.value}
        case "FORMULARIO_SUBMIT" : 
            //Lo que tenia antes en App
            //this.setState({ usuarios : [ ...this.state.usuarios ,{ nombre : this.state.nombre , apellido : this.state.apellido }] ,nombre : "" ,apellido : ""})
            //Este es el traspaso
            return {
                ...prevState,
                usuarios : [
                    ...prevState.usuarios,
                    {
                        nombre : prevState.nombre,
                        apellido : prevState.apellido
                    }
                ],
                nombre : "",
                apellido : ""
            }
        case "USUARIOS_BORRAR":
            //this.setState({ usuarios : [...this.state.usuarios.slice(0,indice),...this.state.usuarios.slice(indice+1)]})
            return {
                ...prevState,
                usuarios : [
                    ...prevState.usuarios.slice(0,action.payload),
                    ...prevState.usuarios.slice(action.payload+1)
                ]
            }
        case "USUARIOS_SELECCIONAR" :
            //this.setState({ nombre : this.state.usuarios[indice].nombre , apellido : this.state.usuarios[indice].apellido , usuario : this.state.usuarios[indice] })
            return {
                ...prevState,
                nombre : prevState.usuarios[action.payload].nombre,
                apellido : prevState.usuarios[action.payload].apellido,
                usuario : prevState.usuarios[action.payload]
            }
        case "USUARIOS_PIDIENDO":
            return {...prevState,fetching:true}
        case "USUARIOS_SUCCESS": 
            return {
                ...prevState,
                usuarios : [
                    ...prevState.usuarios,
                    ...action.payload.map(usuario=>({
                        nombre:usuario.name.split(" ")[0],
                        apellido:usuario.name.split(" ")[1]
                    }))
                ],
                fetching : false,
                fetched : true
            }
        case "USUARIOS_ERROR": 
            return {...prevState,error:action.payload}
        default : 
            return prevState
    }
}

export default reducer