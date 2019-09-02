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
        default : 
            return prevState
    }
}

export default reducer