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
        default : 
            return prevState
    }
}

export default reducer