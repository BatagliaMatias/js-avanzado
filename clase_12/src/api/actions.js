export let aumentarContador = () => ({type:"CONTADOR_SUMAR"})

export let disminuirContador = () => ({type:"CONTADOR_RESTAR"})

export let resetearContador = () => ({type:"CONTADOR_RESET"})

export let handleMostrar = () => ({type:"FORMULARIO_TOGGLE"})

export let handleChange = e => ({type:"FORMULARIO_CHANGE",payload:e.target})

export let handleSubmit = e => {e.preventDefault();return {type:"FORMULARIO_SUBMIT"}}

export let seleccionarUsuario = i => ({type:"USUARIOS_SELECCIONAR",payload:i})

export let borrarUsuario = i => ({type:"USUARIOS_BORRAR",payload:i})

export let pedirUsuarios = () => {
    //Puedo hacer operaciones asincronicas si y solo si retorno inmediatamente una funcion
    //Esta nueva funcion, la que retorno gracias al middleware thunk, vuelve a recibir la funcion dispatch
    return dispatch => {
        
        dispatch({type:"USUARIOS_PIDIENDO"})

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(res=>{
            dispatch({type:"USUARIOS_SUCCESS",payload:res})
        })
        .catch(err=>{
            dispatch({type:"USUARIOS_ERROR", payload : err})
        })
    }
}