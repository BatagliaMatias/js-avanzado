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
        case "CONTADOR_AUMENTAR":
            return {
                //tengo que mantener el estado anterior
                ...prevState,
                //pero modifico aquel dato que me dice el action
                contador : prevState.contador + 1
            }
        default : 
            return prevState
    }
}

export default reducer