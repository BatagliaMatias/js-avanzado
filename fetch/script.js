//Futures/Deferred*/Promesas = Cualquier objeto que pueda implementar un método then. Ya viene expuesta en la interfaz Promise y simboliza una variable que eventualmente va a tener un valor. Esto nos facilita el pasaje de variables y retorno de valores, no así como teniamos en el patrón de callbacks (Callback of Hell)

//* Objeto Diferido : Una pseudo - implementación de jQuery que no cumple con el standar real de Promise según la WHATWG

//Fetch :  / Request / Response / Headers / Body / Streams / XHR / Promise

/* 
let xhr = new XMLHttpRequest
xhr.open("GET")
xhr.addEventListener("load",()=>{
    console.log(xhr.response)
})
xhr.send() 
*/

/* let request = new Request("https://jsonplaceholder.typicode.com/users")

let pedido = fetch(request) 
//Hasta este punto, sería analogo al readyState == 2 
pedido
.then(resultado=>{
    console.log(resultado)
    let tipo = resultado.headers.get("Content-Type")
    let len = resultado.headers.get("Content-Length")
    console.log(tipo,len)
    let status = resultado.status 
    if(status >= 200 && status < 300){
        return resultado.json()
    }else{
        Promise.reject(new Error())
    }
})
.then(valor=>{
    console.table(valor)
})
.catch(err=>{
    console.error(err)
})
console.log(pedido) */

//fetch({url String|Request})   => Promise
//Promise.then().catch()        => Response
// Response.metodo()            => Promise
// .then(()=>{ Promise })       => .then(()=>{ return Promise })
// .then(()=>{ Promise,Promise }) => .then(()=>{ return Promise.all([Promise,Promise]) })

//En los casos en donde estamos pidiendo recursos cross-origin o no simples (Ej.: GET)
//Access-Control-Allow-Origin : Verifica si referer puede acceder al recurso. Es un Header que nos configura el servidor que contiene o "*" ó "midominio.com"
//Access-Control-Allow-Headers : Un listado separado por comas de todos los headers a los cuales vamos a poder tener acceso

//Los headers "publicos" : Content-Type - Cache-Control - Last-Modified 
//Uno de los headers "privados" que necesita permiso : Content-Length 


// "thenable"
//let manual = {then:()=>{}}

let promesa = new Promise((res,rej/* ,progress */)=>{
    //try{
    res(1)
    //}catch(){
    //rej(true)
    //throw true
    //}
})

promesa
.then(valor=>{
    //console.log(valor)
    //return valor + 1 => De esta manera, el valor pasa directamente al proximo then sin tener la posibilidad de poder dar una vuelta mas de bucle 
    //return new Promise((res,rej)=>{ res(valor + 1) })
    return Promise.resolve(valor + 1)
})
//Acá necesitamos una vuelta de bucle más para poder resolver microtareas. En este espacio, el usuario puede seguir haciendo operaciones en el DOM o bien nosotros podemos iniciar mas tareas no dependientes de esta cadena de promesas. 
.then(valor=>{
   //console.log(valor)
})
.catch(err=>{
    console.error(err)
})
/* 
.then()
.catch() 
*/

//promesa.catch()

//.then() => Se ejecuta cuando una promesa es resuelta o cuando retornamos un valor
//.catch() => Se ejecuta cuando una promesa es rechazada o se arroja un error. Si iniciamos una tarea dentro del callback de un catch, y la misma resuelve, se va a pasar al proximo .then de la cadena y si rechaza o arroja otro error, se pasa al proximo .catch de la cadena. 

/**
 * status : settled - pending(default) - rejected - resolved. Una vez que una promesa tomo un valor, no se puede volver a cambiar el valor. El rechazo de una promesa adentro de su resolver tiene que ser sincrónico. 
 * valor : Any 
 * 
 * 
 * Promise.resolve() => Promise - 
 * Promise.reject() => Promise - 
 * Promise.all(Array) => Array(Promise) - Puede resolver multiples promesas y entra a su then si y solo si TODAS las promesas del array fueron resueltas
 * Promise.race(Array) => Entra a su then ni bien una promesa haya sido resuelta
 * Promise.allSettled() => Espera a que todas las promesas hayan concluido, independientemente si se resolvieron o rechazaron 
 
 
 let url = "https://jsonplaceholder.typicode.com"
 fetch(`${url}/users`)
 .then(res=>res.json())
 .then(res=>fetch(`${url}/posts?userId=${res[6].id}`))
 .then(res=>res.json())
 .then(res=>Promise.all(res.map(post=>fetch(`${url}/comments?postId=${post.id}`))))
 .then(res=>Promise.all(res.map(response=>response.json())))
 .then(res=>{
     console.log(res)
    })
    .catch(console.error)
*/

//ASYNC/AWAIT : El operador async nos transforma una funcion en una promesa, osea que lo que se retorna de la funcion es el valor de resolucion y cualquier error manual o automatico es el rechazo de la misma. La unica regla a seguir es que el operador await, que nos permite "demorar" una ejecución asincrónica solo se puede usar directamente adentro de un operador async

let url = "https://jsonplaceholder.typicode.com"
 

async function traerComentarios(){
    //try {
        let pedido_usuarios = await fetch(`${url}/users`)
        //ya no tengo que contatenarle ningun .then porque el await me está "demorando" la ejecución del fetch para que esté disponible su resultado en la próxima línea
        let usuarios = await pedido_usuarios.json()

        let pedido_posteos = await fetch(`${url}/posts?userId=${usuarios[6].id}`)

        let posteos = await pedido_posteos.json()

        let pedidos_comentarios = await Promise.all(posteos.map(async post=>{
            let pedido = await fetch(`${url}/comments?postId=${post.id}`)
            return await pedido.json()
        }))

        return pedidos_comentarios
        
        /*

        let comentarios = pedidos_comentarios.map(response=>{
            return response.json()
        }) 
        
        */

    //}catch(e){
       // throw new Error({status:0,e})
    //}
}

let resultado = traerComentarios().then(console.table).catch(console.error)


